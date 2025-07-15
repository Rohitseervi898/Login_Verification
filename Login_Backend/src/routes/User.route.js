import { Router } from "express";
import { registerUser, LoginUser, VerifyOTP } from "../controller/user.controller.js";

const router= Router();

router.route("/register").post(registerUser);
router.route("/login").post(LoginUser);
router.route("/verify-otp").post(VerifyOTP);

export default router;