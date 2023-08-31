import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const DBConnection=async ()=>{
    
    try{
        await mongoose.connect(process.env.DB_URL,{useNewUrlParser:true});
        console.log('Database connected successfully');
    }catch(error){
        console.error('error while connecting with the database',error.message);
    }
}

export default DBConnection;