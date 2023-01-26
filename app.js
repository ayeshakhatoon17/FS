import fs from "fs";

let fileName = "writefile.txt";
let data = "Iam Ayesha";

// to wrtie a file:
fs.writeFile(fileName, data, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created successfully");
  }
});

//to read a file

fs.readFile(fileName, "utf-8", (err, output) => {
  if (err) {
    console.log(err);
  } else {
    console.log(output);
  }
});

//to delete file
fs.unlink(fileName, (err, output) => {
  if (err) {
    console.log(err);
  } else {
    console.log("FILE DELETED SUCCESSFULLY");
  }
});
