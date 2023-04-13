import * as fs from "fs";

export default async function getProjects(req, res) {
    let data = await fs.promises.readdir("data/skillData");
    let allSkills = [];
    let skills;
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        skills = await fs.promises.readFile("data/skillData/" + item, "utf-8");
        allSkills.push(JSON.parse(skills));
    }

    allSkills.sort((a, b) => a.index - b.index);
    
    res.status(200).send(allSkills);
}