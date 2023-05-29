import * as fs from "fs";
import path from "path";
import axios from "axios";
import NodeCache from "node-cache";

// constants
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const PRIVATE_ACCES_TOKEN = process.env.PRIVATE_ACCES_TOKEN;
const ACCOUNT_PERSONAL = "armaanjaj"
const ACCOUNT_COLLEGE = "armaansinghjaj"
const API_URL = "https://api.github.com";

// cache configurations
const cache = new NodeCache({
    stdTTL: 1800,
    checkperiod: 300,
});

// check if server has fresh cached data, if yes return the fresh/valid data 
async function getDataFromCacheOrApi(cacheKey, apiCall) {
    const cachedData = cache.get(cacheKey);

    if (cachedData && cachedData.key === cacheKey) {
        return cachedData.data;
    }

    const freshData = await apiCall();
    cache.set(cacheKey, { key: cacheKey, data: freshData });
    return freshData;
}

export default async function getProject(req, res) {
    // check if the request method if GET, if otherwise return error message
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    // try to get the data
    try {
        // try to get the cached data
        const apiResult = await getDataFromCacheOrApi(`projectData-${req.query.slug}`, async () => {

            // get the data from the personal GitHub account using authorized API token
            const response = await axios.get(`${API_URL}/users/${ACCOUNT_PERSONAL}/repos`, {
                headers: {
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            });
            const data = response.data;

            // declare a result array and filter the result which is requested by the user based on the slug
            let result = []
            result = data.filter(item => item.name === req.query.slug);
            
            // if the required data is not found, try to get it from the private repo from the personal account. If the data is found, add it to result array otherwise return a 404 error
            if (result.length === 0){

                const privateRepoResponse = await axios.get(
                    `${API_URL}/repos/${ACCOUNT_PERSONAL}/${req.query.slug}`,
                    {
                        headers: {
                            Authorization: `Bearer ${ACCESS_TOKEN}`,
                        },
                    }
                );
                const privateRepoData = privateRepoResponse.data;
                
                if(privateRepoData.name !== req.query.slug){
                    return {
                        status: 404,
                        success: false,
                        message: "No repositories found."
                    }
                }
                result[0] = privateRepoData
            }

            // read and parse contents of the index.json file under projectData
            let projects = await fs.promises.readFile(path.join(process.cwd(), "/data/projectData/index.json"),"utf-8");
            projects = JSON.parse(projects);

            const projectData = []

            // for each of the project JSON object in index.json file, look for the object which matches the result we found using the API and customize the contents of the file before passing the result to the front-end.
            projects.forEach((project) => {
                if (result[0].name === project.repo_name) {
                    project.overview = result[0].description;
                    project.links.github = result[0].html_url;
                    project.links.hosted =
                        result[0].homepage !== ""
                            ? result[0].homepage
                            : false;
                    projectData.push(project);
                }
            });

            // return the customized data
            return projectData[0];
        });
        
        // get the data from the apiResult function. If it turns to be a 404 error, pass the error,
        if(apiResult.status === 404) {
            const {success, message} = apiResult;
            return res.status(apiResult.status).send({success,message});
        }
        // otherwise pass the data with 200 status code
        return res.status(200).json(apiResult);

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Internal Server Error.",
        });
    }
}
