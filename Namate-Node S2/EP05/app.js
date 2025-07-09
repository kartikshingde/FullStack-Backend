const express = require("express");
const app = express();


app.get("/getUserData",(req,res)=>{

  try{
  // logic of DB call and get User data
  throw new Error("Random error")
  res.send("User Data Sent");

  }
  catch(err){
    res.status(500).send("Something went wrong, Contact Support team")

  }
  

  
})

app.use("/",(err,req,res,next)=>{
  if(err){
    // we can log errors also
    res.status(500).send("Something went wrong")
  }
})


app.listen(7777, () => {
  console.log("Server is listening on port 7777");
});







