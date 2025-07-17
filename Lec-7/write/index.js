let users=[
    {
        id:1,
        name:"Rashi",
        age:'19'
    },
     {
        id:2,
        name:"varnika",
        age:'20'
    }
]
let users2=[
    {
        id:1,
        name:"Riya",
        age:'22'
    },
     {
        id:2,
        name:"Siya",
        age:'24'
    }
]
const fs = require("fs");
fs.writeFile("../users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("users written")
})


fs.writeFile("../users2.txt",JSON.stringify(users2),function(err){
    if(err) return console.log(err);
    console.log("users written 2")
})
