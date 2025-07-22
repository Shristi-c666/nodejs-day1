import mongoose,{Schema} from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
const userSchema = Schema({
   username:{
    type:String,
    unique:true,
    required:true
   
   },
   role:{
    enum:['user','admin']
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
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION || "1h",
  });
};



const User = mongoose.model("User",userSchema)
export default User