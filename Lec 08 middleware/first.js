const express = require("express");

const app = express();

//Router Handler

// app.use("/user", (req, res, next) => {
//   console.log("first");
//   //   res.send("Hello ji");

//   next();
//   console.log("Sixth");
// }); //middleware->does not respond

// app.use("/user", (req, res, next) => {
//   console.log("second");
//   // res.send("second")
//   next();
//   console.log("Fifth");
// });     //middleware->does not respond

// app.use("/user", (req, res, next) => {
//   console.log("third");

//   // res.send("I am third")
//   next();
// }) / middleware;

// app.use("/user", (req, res, next) => {
//   console.log("Fourth");
//   res.send("I am Fourth");
// }); //This is request handler


//maintain logs through middleware
app.use("/user",(req,res,next)=>{
    console.log(`${Date.now()} ${req.method} ${req.url}`);

    //can do authorization , authentication
    next()

})

app.get("/user",(req,res)=>{
    res.send("Info about USer")
})
app.post("/user",(req,res)=>{
    res.send("Info Saved")
})
app.delete("/user",(req,res)=>{
    res.send("Info deleted")
})



app.listen(5000, () => {
  console.log("listening at port 5000");
});

//Request: log ko maintain krna hota hai
//Timing: kis type ki request thi, url