import * as fs from "fs";

export default async function getProjects(req, res) {
    let data = await fs.promises.readdir(path.join(process.cwd(), '/data/projectData/projects'));
    let allProjects = [];
    let project;
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        project = await fs.promises.readFile(path.join(process.cwd(), '/data/projectData/projects/') + item, "utf-8");
        allProjects.push(JSON.parse(project));
    }

    const files = allProjects.map((project) => {
        let fullFilePath = path.join(process.cwd(), `data/projectData/projects/${project.slug}.json`);
        let fullFileName = `${project.slug}`;
        const file = fs.readFileSync(fullFilePath, "utf-8");
        const date = new Date(JSON.parse(file).timeline.startDate);
        return { fullFileName, date, content: JSON.parse(file) };
    });

    files.sort((a, b) => b.date.getTime() - a.date.getTime());

    const finalSortedFiles = files.map((fileObj) => fileObj.content);
    
    res.status(200).send(finalSortedFiles);
}