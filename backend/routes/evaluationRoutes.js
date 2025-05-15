import express from 'express';
import { evaluateAnswer } from '../controllers/evaluationController.js';

const router = express.Router();
router.post('/', evaluateAnswer);
export const evaluationRoutes = router;