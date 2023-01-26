import fs from "fs";


// 1.To create FOlder
let folderName = "Ayesha"

fs.mkdir(folderName,(err,data)=>
{
    if (err){
        console.log(err)
    }
    else{
        console.log("Folder Created Successfully")
    }
})

//2. To delete the folder

/* fs.rmdir(folderName,(err,data)=>
{
    if (err){
        console.log(err)
    }
    else{
        console.log("Folder Deleted Successfully")
    }
}) */

// 3.To reanme the folder

fs.rename(folderName,"renamed",(err,data)=>
{
    if (err){
        console.log(err)
    }
    else{
        console.log("Folder Renamed Successfully")
    }
})