const express = require("express");
const authRouter = express.Router();

const { validateSignUpData } = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validator = require("validator");


authRouter.post("/signup", async (req, res) => {
  try {
    // validate user
    validateSignUpData(req);

    const { firstName, lastName, email, password } = req.body;

    //Encrypt pass
    const hashPass = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashPass,
    });

    await user.save();
    res.send("Data Added Successfully");
  } catch (err) {
    res.status(400).send("Some Error Occured " + err.message);
  }
});


authRouter.post("/login",async (req,res)=>{

    try{
        const {email,password}=req.body;
        if(!validator.isEmail(email)){
            throw new Error("Invalid Email Format!")
        }

        const user=await User.findOne({email:email});
        if(!user){
            throw new Error("Invalid Credentials ")
        }
        const isPassValid=await user.validatePassword(password);
        if(isPassValid){
            const token =await user.getJWT();

            res.cookie("token",token,{expires:new Date(Date.now()+8*3600000)})

            res.send("User Login Successful!!")
        }else{
            throw new Error("Invalid Credentials")
        }


       
    }catch(err){
        res.status(400).send("ERROR: "+err.message)
    }
    
})

authRouter.post("/logout",async (req,res)=>{
    res.cookie("token",null,{expires:new Date(Date.now())})
    res.send("User logged out successfully!")
})



module.exports = authRouter;