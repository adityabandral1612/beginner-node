const fs =  require('fs'); // or in ES6: import fs from "fs";

// creating a new file by fs module (data overwrite)
// fs.writeFileSync("read.txt", "creating a file by core module fs");

// append file data
// fs.appendFileSync("read.txt", " added content");

// read file data
const buff_data = fs.readFileSync("read.txt");
// console.log(buff_data); // in node js we have additional data type buffer to store binary data while reading file
//console.log(buff_data.toString());


// rename file
//fs.renameSync("read.txt", "read_new.txt");