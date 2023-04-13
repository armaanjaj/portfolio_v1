import * as fs from 'fs';

export default function getProject(req, res){
    fs.readFile(`projectData/${req.query.slug}.json`, 'utf-8', (error, data)=>{
        if(error) res.status(500).send({error:"No such project found"})
        res.status(200).send(JSON.parse(data));
    })
}