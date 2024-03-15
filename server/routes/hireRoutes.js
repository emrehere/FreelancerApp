import express from "express";
import { createHire, getAllJobNotices } from "../controllers/hireController.js";
import requireAuth from "../middleware/requireAuth.js";


const router = express.Router();


router.post('/hire', requireAuth, createHire);

router.get('/getAllJobs', requireAuth, getAllJobNotices);


export default router