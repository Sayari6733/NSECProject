import express from 'express';
import { getUserData } from '../controllers/userController.js';
import userAuth from '../middleware/userAuth.js';
// or use the correct path if you meant authMiddleware instead of userAuth
// import authMiddleware from '../middleware/authMiddleware.js';

const userRouter = express.Router();

// Example route using userAuth middleware
// userRouter.get('/data', userAuth, (req, res) => {
//   res.json({ message: 'User data loaded successfully', user: req.user });
// });
userRouter.get('/data', userAuth, getUserData);


export default userRouter;
