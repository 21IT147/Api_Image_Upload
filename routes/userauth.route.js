import { Router } from "express";
import userSignup from "../controller/usersignup.controller.js";
import userLogin from "../controller/userlogin.controller.js";
import getUserDetails from "../controller/userdetail.controller.js";

const router = Router();

router.route("/").get((req,res)=>{
    res.status(200).send("This is User Backend.")
})

router.route("/sign-up").post(userSignup);
router.route("/login").post(userLogin);
router.route("/details").post(getUserDetails);
export default router;
