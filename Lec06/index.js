const express=require('express')

const app=express()





app.use("/about/:id/:user",(req,res)=>{
    // console.log(req.params)
    res.send({name:"Kartik",age:20,hobby:"coding",})
})
app.use("/contact",(req,res)=>{
    res.send("Contact Page")
})
app.use("/detail",(req,res)=>{
    res.send("Details Page")
})
    app.use("/",(req,res)=>{
        res.send("Home Page")
    })

app.listen(4000,()=>{
    console.log("Server listening at port 4000...")
})