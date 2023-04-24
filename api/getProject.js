import * as fs from "fs";

export default function getProject(req, res) {
    fs.readFile(
        `data/projectData/${req.query.slug}.json`,
        "utf-8",
        (error, data) => {
            if (error) {
                return res.status(500).send({ error: "No such project found" });
            }
            return res.status(200).send(JSON.parse(data));
        }
    );
}
