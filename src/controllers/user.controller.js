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
    const user ={
        username,
        email,
        password
    }
     res.status(201).json({
            message:"user created",
            data:user
        })
    
    } catch (err) {
        console.log("err occured",err)
    }
}

export const login = async(req,res,)=>{
    try {
    const {email,password} = req.body;
    if( !email || !password){
        res.status(400).json({
            message:"All field are required"
        })
        return
    }
    const isExist = await User.findOne({email})
    if(!isExist){
         res.status(400).json({
            message:"invalid creditionals"
        })
        return
    }
    
    const user ={
        
        email,
        
    }
     res.status(200).json({
            message:"log in",
            data:user
        })
    
    } catch (err) {
        console.log("err occured",err)
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
