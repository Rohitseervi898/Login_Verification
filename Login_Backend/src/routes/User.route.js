import { Router } from "express";
import { registerUser, LoginUser } from "../controller/user.controller.js";

const router= Router();

router.route("/register").post(registerUser);
router.route("/login").post(LoginUser);

export default router;