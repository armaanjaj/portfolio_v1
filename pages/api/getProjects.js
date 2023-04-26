import * as fs from "fs";
import path from "path";
import axios from "axios";
import NodeCache from "node-cache";

const cache = new NodeCache({
    stdTTL: 1800,
    checkperiod: 300,
});

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const PRIVATE_ACCES_TOKEN = process.env.PRIVATE_ACCES_TOKEN;
const API_URL = "https://api.github.com";

async function getDataFromCacheOrApi(key, apiCall) {
    const cachedData = cache.get(key);

    if (cachedData) {
        return cachedData;
    }

    const freshData = await apiCall();
    cache.set(key, freshData);
    return freshData;
}

export default async function getProjects(req, res) {
    if (req.method !== "GET") {
        res.status(405).json({ message: "Method Not Allowed" });
        return;
    }

    try {
        const allProjects = await getDataFromCacheOrApi("projectData", async () => {
                const response = await axios.get(`${API_URL}/users/armaanjaj/repos`,
                    {
                        headers: {
                            Authorization: `Bearer ${ACCESS_TOKEN}`,
                        },
                    }
                );
                const data = response.data;
                let projects = await fs.promises.readFile(path.join(process.cwd(), "/data/projectData/names.json"),"utf-8");
                projects = JSON.parse(projects);
                const finalData = [];

                data.forEach((repo) => {
                    finalData.push(repo);
                });

                const privateRepoResponse = await axios.get(
                    `${API_URL}/repos/armaansinghjaj/Wedd-Fullstack-application`,
                    {
                        headers: {
                            Authorization: `Bearer ${PRIVATE_ACCES_TOKEN}`,
                        },
                    }
                );
                const privateRepoData = privateRepoResponse.data;
                finalData.push(privateRepoData);

                finalData.sort((a, b) => new Date(a.pushed_at) - new Date(b.pushed_at));

                const result = [];

                for (const item in finalData) {
                    projects.forEach((project) => {
                        if (finalData[item].name === project.repo_name) {
                            project.overview = finalData[item].description;
                            project.links.github = finalData[item].html_url;
                            project.links.hosted =
                                finalData[item].homepage !== ""
                                    ? finalData[item].homepage
                                    : false;
                            result.push(project);
                        }
                    });
                }

                return result.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)).reverse();
            }
        );
        res.status(200).json(allProjects);
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Internal Server Error.",
        });
    }
}
