const fs = require("fs");
// fs.writeFile("read.txt", "hello new async file", 
// (err) => {
//     console.log('success');
// }
// );

// append file
// fs.appendFile("read.txt", " new data added", 
// (err) => {
//     console.log('success');
// }
// );

fs.readFile("read.txt","utf-8", (err, data) => {
    console.log(data);
});