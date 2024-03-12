import express from "express";
import { createHire } from "../controllers/hireController.js";
import requireAuth from "../middleware/requireAuth.js";


const router = express.Router();


router.post('/hire', requireAuth, createHire);


export default router