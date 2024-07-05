import express from 'express';
import { getAmount, submitAmount } from '../controller/userController.js';

const router = express.Router();

router.post("/submit-amount", submitAmount);
router.get("/get-amount", getAmount);

export default router;
