//* this code refers to the reading the components of the contents which was exist in json folder

import * as fs from 'fs';

export default function readBlogDirectory(req,res){
    fs.readdir("json",(err,data)=>{
        res.status(200).json(data)
    })
}