const express=require('express');
const { userAuth } = require('../middlewares/auth');
const { validateProfileEditData } = require('../utils/validation');
const validator=require('validator')


const profileRouter=express.Router();


profileRouter.get("/profile/view",userAuth,async(req,res)=>{
    try{

        const user=req.user;
        res.json({message:user});

    }catch(err){
        res.send(404).send("Some Error Occured: "+err.message)
    }
    
})

profileRouter.patch("/profile/edit",userAuth,async (req,res)=>{
    try{
        if(!validateProfileEditData(req)){
            throw new Error("Invalid Edit fields")
        }

        const loggedUser=req.user;
        Object.keys(req.body).forEach((key)=>(loggedUser[key]=req.body[key]))

        await loggedUser.save();

        res.json({message:`${loggedUser.firstName} your profile edited successfully!`,
            data:loggedUser,
        })


    }catch(err){
        res.status(400).send("ERROR: "+err.message)
    }

})

profileRouter.patch("/profile/password",userAuth,async(req,res)=>{
   try{
    const {currentPassword,newPassword}=req.body;
    
    const user=req.user;

    const isCurrentPassValid=await user.validatePassword(currentPassword);
    if(isCurrentPassValid){
        if(!validator.isStrongPassword(newPassword)){
            throw new Error("Enter a strong password")
        }
        user.password=newPassword;
        await user.save();

        res.send("Password changed successfully")
    }else{
        throw new Error("Invalid Password")
    }


   }catch(err){
    res.status(400).send("ERROR: "+err.message);
   } 
})


module.exports=profileRouter;