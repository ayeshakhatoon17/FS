// File creating, reading, deleting using asyn await

import fs from "fs/promises";

let main = async() => {

    try{
        console.clear()
        let fileName = "writeFileUsingPromises.txt"
        let data = "hellloo iam ayesha"
        let write = await fs.writeFile(fileName,data);
        console.log("File Created");
        
        let read = await fs.readFile(fileName, "utf-8");
        console.log(read);

        let deleted1 = await fs.unlink(fileName);
        console.log("Folder Deleted")
    
    }
    catch(error){
        console.log("error")
    }
   

}
main()
