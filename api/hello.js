// * default js api file in next.js with the boiler app of next js {not updated}

import * as fs from 'fs';

export default async function handleClick(req, res) {
    
    let data = await fs.promises.readdir("blogdata")
    let myfile;
    let allBlogs = []
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item);
        myfile = await fs.promises.readFile(("blogdata/" + item),'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }
    res.status(200).json(myfile)
}

