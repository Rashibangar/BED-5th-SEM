const fs = require("fs");
// read users.txt and users2.txt and write in file all_users.txt
// fs.readFile("../users.txt","utf-8",function(err,data1){
//     if(err) return console.log(err);
//     let users1 = JSON.parse(data1);
//     console.log(users1)
//     fs.readFile("../users2.txt","utf-8",function(err,data2){
//         if(err) return console.log(err);
//         let users2 = JSON.parse(data2);
//         console.log(users2)
//         let allusers = users1.concat(users2)
//         fs.writeFile("./all_users.txt",JSON.stringify(allusers),function(err){
//             if(err) return console.log(err);
//             console.log("done");
//         })
//     })
// })
const { read } = require("../IO/io.js");
const { write } = require("../IO/io.js");
async function task(file1,file2,file3) {
   let users1 = await read(file1); 
   console.log(users1);
   let users2 = await read(file2); 
   console.log(users2);
//    let a = JSON.parse(users1);
//    let b = JSON.parse(users2);
   let allusers = users1.concat(users2);
   let mes = await write(file3,JSON.stringify(allusers));
   console.log(mes)
}
task("../users.txt","../users2.txt","./all_users2.txt");