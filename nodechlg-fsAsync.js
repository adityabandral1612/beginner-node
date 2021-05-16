const fs = require("fs");

// fs.writeFile("bio.tx", "utf-8", (err) => {
//     console.log('created file');
// });

// fs.rename("bio.tx", "bio.txt", (err) => {
//     console.log('renamed file');
// });

// fs.writeFile("bio.txt", " data added to original file", (err) => {
//     console.log('created file');
// });

// fs.readFile("bio.txt", "utf-8", (err,data) => {
//     console.log(data);
// });

// fs.unlink("bio.txt", (err) =>{
//     console.log('deleted file');
// })

fs.rmdir("nodechlg", (err) =>{
    console.log('deleted folder');
})