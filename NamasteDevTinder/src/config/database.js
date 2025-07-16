const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kartikshingde12:w8zwvMSLLfLTpgJF@namastenode.d6rrw0p.mongodb.net/DevTinder"
  );
};

module.exports=connectDB; 
