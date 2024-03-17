import express from "express";
import { createFreelancer, getAllFreelancers } from "../controllers/freelancerController.js";
import requireAuth from "../middleware/requireAuth.js";


const router = express.Router();


router.post('/freelancer', requireAuth, createFreelancer);

router.get('/getAllFreelancers', requireAuth, getAllFreelancers);


export default router