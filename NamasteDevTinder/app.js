const express = require("express");
const connectDB = require("./src/config/database");
const app = express();
const User = require("./src/models/user");
const user = require("./src/models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    email: "virat@gmail.com",
    password: "virat@321",
  });

  try {
    user.save();
    res.send("Data Added Successfully");
  } catch (err) {
    res.status(400).send("Some Error Occured");
  }
});

//get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.email;

  try {
    const users = await User.findOne({ email: userEmail });
    if (!users) {
      res.send("User Not Found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong" + err);
  }
});

//Feed Api- GET /feed -  get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.send("Something went wrong!");
  }
});

//delete user from the database
app.delete("/user",async (req,res)=>{
  const UserId=req.body.userId;
  

  try{
    // const user =await User.findByIdAndDelete({_id:userId})
    const user =await User.findByIdAndDelete(UserId)
    res.send("User deleted Successfully")

  }catch(err){
    res.send("Something went wrong !"+err)
  }
})

//update data of the user
app.patch("/user",async (req,res)=>{
  const userId=req.body.userId;
  const data=req.body;
  
  try{
    const user=await User.findByIdAndUpdate({_id:userId},data,{returnDocument:"after"})
    // console.log(user)
    res.send("User Updated")
  }catch(err){
    res.send('Something went wrong'+err)
  }

})





connectDB()
  .then(() => {
    console.log("Database connection Established.");
    app.listen(7777, () => {
      console.log("App is listening on port 7777");
    });
  })
  .catch((err) => {
    console.log("Database Connection Failed..." + err);
  });
