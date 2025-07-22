import express from "express";
import { register,login,Alluser,getSpecificUser } from "../controllers/user.controller.js";

const router =express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/users",Alluser)
router.get("/users/:id",getSpecificUser)

export default router