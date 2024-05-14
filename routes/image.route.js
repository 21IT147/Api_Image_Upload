import express from "express";
import imageUpload from "../controller/imageUpload.controller.js";
import multer from "multer";
import getUserImages from "../controller/images.controller.js";

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.route("/").get((req,res)=>{
    res.status(200).send("This is Image Backend.")
})
router.post("/upload", upload.single("image"), imageUpload);

router.post("/all",getUserImages);

export default router;
