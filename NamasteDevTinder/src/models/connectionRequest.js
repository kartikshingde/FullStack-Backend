const mongoose=require('mongoose')


const connectionRequestSchema=new mongoose.Schema({

    fromUserId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    toUserId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    status:{
        type:String,
        enum:{
            values:["ignored","interested","accepted","rejected"],
            message:`{VALUE} is incorrect status type`
        },
        required:true
    }

},{timestamps:true})





connectionRequestSchema.pre("save",function (next){
    const connectionRequest=this;
    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
        throw new Error("You Cannot send Connection request to yourself");
    }
    next();
})

const ConnectionRequest=new mongoose.model("ConnectionRequest",connectionRequestSchema)

module.exports=ConnectionRequest;
