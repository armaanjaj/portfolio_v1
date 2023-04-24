import * as fs from "fs";
import path from "path";

export default function getProject(req, res) {
    fs.readFile(
        path.join(process.cwd(), `data/projectData/projects/${req.query.slug}.json`),
        "utf-8",
        (error, data) => {
            if (error) {
                return res.status(500).send({ error: "No such project found" });
            }
            return res.status(200).send(JSON.parse(data));
        }
    );
}
