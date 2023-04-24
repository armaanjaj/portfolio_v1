import * as fs from "fs";
import path from "path";

export default async function getProjects(req, res) {
    
    let data = await fs.promises.readdir(path.join(process.cwd(), '/data/skillData/skills'));
    let allSkills = [];
    let skills;
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        skills = await fs.promises.readFile(path.join(process.cwd(), '/data/skillData/skills/') + item, "utf-8");
        allSkills.push(JSON.parse(skills));
    }

    allSkills.sort((a, b) => a.index - b.index);
    
    res.status(200).send(allSkills);
}