import * as fs from 'fs'

export default async function makerset(req,res){
    let data = await fs.promises.readdir("json") //* here it will readd the directory
    let allblogs = [] //* an empty array assigned for getting the results for all the data
    let myfile; //* local variable
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        myfile = await fs.promises.readFile(("json/" + item),"utf-8")
        allblogs.push(JSON.parse(myfile))
    }
    res.status(200).json(allblogs)
}
