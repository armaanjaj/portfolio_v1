import * as fs from "fs";
import path from "path";
import NodeCache from "node-cache";

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

export default async function getBlog(req, res) {
    // check if the request method if GET, if otherwise return error message
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    // try to get the data
    try {
        // try to get the cached data
        const apiResult = await getDataFromCacheOrApi(`blogData-${req.query.slug}`, async () => {

            // read and parse contents of the index.json file under blogData
            let blogs = await fs.promises.readFile(path.join(process.cwd(), "/data/blogData/index.json"),"utf-8");
            blogs = JSON.parse(blogs);

            if(blogs.length === 0){
                return {
                    status: 404,
                    success: false,
                    message: "No blogs found."
                }
            }

            const blog = blogs.find(
                (blog) => (blog.topic + blog.link) === req.query.slug
            );

            // return the customized data
            return blog;
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
