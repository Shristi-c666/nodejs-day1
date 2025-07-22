import express from "express";
import { register,Login,Alluser,getSpecificUser } from "../controllers/user.controller.js";
import { isAuth } from "../middleware/Auth.js";

const router =express.Router()

router.post("/register",register)
router.post("/login",Login)
router.get("/users",isAuth,Alluser)
router.get("/users/:id",getSpecificUser)

export default router