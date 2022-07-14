import * as fs from 'fs'

export default async function handleClick(req, res) {
    let data = await fs.promises.readdir("forum");
    let allBlogs = [];
    let myfile;
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        myfile = await fs.promises.readFile(("forum/" + item),"utf-8")
    }
    allBlogs.push(JSON.parse(myfile))
    res.status(200).json(allBlogs)
}