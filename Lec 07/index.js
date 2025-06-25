const express=require('express')

const app=express()

// app.use("/user",(req,res)=>{
//     res.send({name:"rohit"})
// })


//parsing krni hoti hai !!
app.use(express.json())
//middleware => json format data to Js Object

app.get("/user",(req,res)=>{
    
    res.send({name:"rohit"})
})

app.post("/user",(req,res)=>{
    // console.log("data saved successfully")
    console.log(req.body)
    res.send("data saved successfully")
})

app.listen(4000,()=>{
    console.log("Server listening at port 4000...")
})