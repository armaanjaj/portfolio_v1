import * as fs from "fs";
import path from "path";

export default async function getFilteredBlogs(req, res) {
    // check if the request method if GET, if otherwise return error message
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    // try to get the data
    try {
        // read and parse contents of the index.json file under blogData
        let blogs = await fs.promises.readFile(
            path.join(process.cwd(), "/data/blogData/index.json"),
            "utf-8"
        );
        blogs = JSON.parse(blogs);

        if (blogs.length === 0) {
            return res.status(404).send({ success: false, message: "No blogs found" });
        }

        const filteredBlogs = blogs.filter(
            (blog) => blog.topic === req.query.topic
        );

        // otherwise pass the data with 200 status code
        return res.status(200).json(filteredBlogs);
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Internal Server Error.",
        });
    }
}
