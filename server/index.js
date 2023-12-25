import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

const app = express() 
app.use(bodyParser.json({limit:"50mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"50mb",extended:true}))
app.use(cors())


app.use('/posts',postRoutes);
app.use('/user', userRoutes)

const Connection_url="Enter Your URL" || process.env.MONGO_URI
const PORT = process.env.PORT || 5000;
mongoose.connect(Connection_url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=>console.log("Server is running on port 5000, Database is connected successfully")))
.catch((error)=>console.log(error.message));

