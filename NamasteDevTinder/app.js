const express = require("express");
const connectDB = require("./src/config/database");
const app = express();
const User = require("./src/models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);
 
  // const user=new User({
  //   firstName:"Rohit",
  //   lastName:"Sharma",
  //   email:"rohit@gmail.com",
  //   password:"rohit@321"
  // })

  // try{
  //   user.save();
  //   res.send("Data Added Successfully")
  // }catch(err){
  //   res.status(400).send("Some Error Occured")
  // }
});

connectDB()
  .then(() => {
    console.log("Database connection Established.");
    app.listen(7777, () => {
      console.log("App is listening on port 7777");
    });
  })
  .catch((err) => {
    console.log("Database Connection Failed...");
  });
