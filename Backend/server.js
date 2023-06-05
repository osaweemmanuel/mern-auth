import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import userRouter from './Routes/userRoutes.js'
import {notFound,errorHandler} from './middleware/notFound.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import path from 'path'

const port=process.env.PORT || 5000;
const app=express();

app.use(express.json());
app.use(express.urlencoded({extends:true}))
app.use(cookieParser())



app.use('/api/users', userRouter);

//when deploying for production
if(process.env.NODE_ENV === 'production'){
    const __dirname=path.resolve();
    app.use(express.static(path.join(__dirname,'frontend/dist')));

    app.get("*",(req,res)=>res.sendFile(path.resolve(__dirname,'frontend','dist','index.html')));
}else{
    app.get('/',(req,res)=>{
        res.send('Hello World')
    })  
}

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`)
})

connectDB();