const express = require("express");

const {adminAuth,userAuth}=require('./src/middlewares/auth')

const app = express();

// handle Auth Middleware for all request GET,POST ,....all
app.use("/admin",adminAuth)

app.post("/user/login",(req,res)=>{
  res.send("User Logged In...")
})
// app.use("/user",userAuth) //=>as user has only route, we can write directly..
app.get("/user",userAuth,(req, res) => {
    res.send("User data send")
});

app.get("/admin/getAllData", (req, res) => {
    res.send("All data sent")
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a User");
});

app.listen(7777, () => {
  console.log("Server is listening on port 7777");
});
