const express = require("express");
const app = express();

const { createClient } = require("redis");
const client = createClient()
async function connect(){

await client.connect()
client.on("error", function(err){
    console.log(err)
})
}
app.get("/profile",(req,res)=>{
    
})
//connect()
// .then(()=>{
// app.listen(1427,()=>{
//     console.log("Server Started")
// })
// })

async function cachedData(){
    await client.connect()
    await client.set("users:100",JSON.stringify([{
          name:"Rashi",
          age:"19"
}]))
}
// cachedData()
// .then(()=>{
//     console.log("Data Cached Successfully")
// })

async function readUser(){
    await client.connect()
    let user = await client.get("users:100") 
    return user;
}
readUser()
.then((data)=>{
    console.log(JSON.parse(data))
})


