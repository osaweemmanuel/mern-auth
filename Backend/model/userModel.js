import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        },
    
},{timestamps:true})

userSchema.pre('save',async function(next){
  if(!this.isModified('password')){
    next()
  }
  const salt=await bcrypt.genSalt(10);
  this.password=await bcrypt.hash(this.password,salt)
});

userSchema.methods.matchPassword=async function(enterPassword){
  return await bcrypt.compare(enterPassword,this.password);
}


const User=mongoose.model("User",userSchema);
export default User;