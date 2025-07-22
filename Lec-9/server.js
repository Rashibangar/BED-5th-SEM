const express = require("express");
const app = express();
app.use(express.json());
app.post("/home",(req,res)=>{
  const jsondata = req.body;
  console.log(jsondata);
  res.send({message:"JSon recieved successfully",data : jsondata});
})
app.listen(1427,()=>{
    console.log("Server started");                        
})