const express = require("express");
const { m1, m2, checkAdmin } = require("./middleware/middleware");
const app = express();
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const blogRoutes = require("./routes/blogsRoutes")
app.use(m1);
//app.use(m2);
//Middleware run in order in which it is called..
app.get("/home",(req,res,next)=>{
    console.log("running controller home")
    res.json({
        success:true,
        message:"welcome to home page"
    })
    next()
})
app.use(m2);
app.get("/dashboard",checkAdmin,(req,res)=>{
    if(req.isAdmin){
        return res.json({
            success:true,
            message:"admin dashboard"
        })
    }
    return res.json({
        success:false,
        message:"not authorized"
    })
    
})
app.use("/api/blogs",blogRoutes)
app.listen(1427,()=>{
    console.log("Server Started")
})