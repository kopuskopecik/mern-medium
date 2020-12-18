const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName:{
        type:String,
        required:true,  
    },
    lastName:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    registerDate:{
        type: Date,
        default:Date.now
    },
    
});

module.exports = User = mongoose.model("user", UserSchema);
