import User from "../models/user.model.js";

export const register = async(req,res)=>{
 try {
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400).json({
            message:"All field are required"
        })
        return
    }
    const isExist = await User.findOne({email})
    if(isExist){
         res.status(400).json({
            message:"user already exist"
        })
        return
    }
    User.create({
        username,
        email,
        password
    })
   
     res.status(201).json({
            message:"user created",
            data:User
        })
    
    } catch (err) {
        console.log("err occured",err)
    }
}


export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }
    const token = user.generateAuthToken();
    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      data: { user, token },
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
}
export const Alluser = async (req,res)=>{
    try {
        const user = await User.find().select("-password")
        res.status(200).json({
            data:user
        })
    } catch (error) {
        console.error("error",error.message)
    }
}

export const getSpecificUser =async (req,res)=>{
    try {
        const {id} = req.params
        const user = await User.findById(id).select("-password")
        res.status(200).json({
            data:user
        })
    } catch (error) {
        console.error("error",error.message)
    }
}
