//* it particular reads only a single content of the json folder which was exist in it


import * as fs from 'fs';

export default async function readBlsdogData(req,res){
  fs.promises.readdir("blogdata",(err,data)=>{
    let allBlogs = [];
    data.forEach((item)=>{
      console.log(item)
      fs.readFile(("blogdata/" + item),(d)=>{
        allBlogs.push(d)
      })
    })
    res.status(200).json(allBlogs)
  })
}