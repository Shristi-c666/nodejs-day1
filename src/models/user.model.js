import mongoose,{Schema} from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = Schema({
   username:{
    type:String,
    unique:true,
    required:true
   
   },
   email:{
    type:String,
    unique:true,
    required:true

   },
   password:{
    type:String,
    required:true
   }
},{timestamps:true})


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    // console.log(`Password hashed for user ${this.email}`);
    next();
  } catch (error) {
    console.error("Error hashing password:", error);
    next(error);
  }
});



const User = mongoose.model("User",userSchema)
export default User