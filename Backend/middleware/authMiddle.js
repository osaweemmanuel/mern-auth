
import User from '../model/userModel.js'
import asyncHandler from 'express-async-handler'
import  jwt  from 'jsonwebtoken';


const protect=asyncHandler(async(req,res,next)=>{
    let token;
    token=req.cookies.jwt;
    if(token){
        try{
           const decoded=jwt.verify(token,process.env.JWT_SECRET);
           req.user=await User.findById(decoded.userId).select('-password');
           next()
        }catch(error){
            res.status(401)
            throw new Error('Invalid token,not authorize')
        }
    }else{
        res.status(401)
        throw new Error('No token found,not authorize')
    }
});


export {protect}

