//* just a sample js file for getting the main output in the server directory of .next backend data

import * as fs from "fs";

export default function sampler(req, res) {
    fs.readFile('json/learn-angular.json',"utf-8",(err,data)=>{
        res.status(200).json(JSON.parse(data))
    })
}
