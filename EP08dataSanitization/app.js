const express = require("express");
const connectDB = require("./src/config/database");
const app = express();
const User = require("./src/models/user");
const user = require("./src/models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  const mail = req.body.email;
  const userExist = await User.findOne({ email: mail });

  try {
    if (!userExist) {
      await user.save();
      res.send("Data Added Successfully");
    } else {
      res.send("User Alreday Exist");
    }
  } catch (err) {
    res.status(400).send("Some Error Occured" + err.message);
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
app.delete("/user", async (req, res) => {
  const UserId = req.body.userId;

  try {
    // const user =await User.findByIdAndDelete({_id:userId})
    const user = await User.findByIdAndDelete(UserId);
    res.send("User deleted Successfully");
  } catch (err) {
    res.send("Something went wrong !" + err);
  }
});

//update data of the user with id
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }
    if (data?.skills.length > 10) {
      throw new Error("Skills cannot more than 10");
    }
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    // console.log(user)
    res.send("User Updated");
  } catch (err) {
    res.send("Something went wrong " + err.message);
  }
});

//update user with emailId
app.patch("/userByMail", async (req, res) => {
  const mailId = req.body.mailId;
  const data = req.body;
  try {
    const user = await User.findOneAndUpdate({ email: mailId }, data, {
      returnDocument: "after",
    });

    res.send("User Updated Successfully");
  } catch (err) {
    res.send("Something Went Wrong -> " + err);
  }
});

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
