import mongoose,{Schema} from "mongoose";
import bcrypt from "bcryptjs";
import User from "./user.model";
const blogSchema = Schema({
   title:{
    type:String,
    unique:true,
    required:true
   
   },
   description:{
    typr:String,
    unique:true,
    required:true
   },
   createdby:{
      
   }
   
},{timestamps:true})






const Blog  = mongoose.model("Blog",blogSchema)
export default Blog