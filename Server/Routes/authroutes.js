import express from "express"
import { verifyOTP, requestOTP, checkIfUserExists, updateUser, registerUserAndRequestOTP} from "../Controllers/authcontroller.js"
import { verifyToken } from "../Middlewares/verifytoken.js"
import { limiter, authLimiter } from "../Middlewares/rateLimiter.js" 

const router = express.Router()

// Public routes  
router.post('/check-user', authLimiter, checkIfUserExists)
router.post('/register', authLimiter, registerUserAndRequestOTP)


router.post('/request-otp', limiter, requestOTP)  
router.post('/verify-otp', limiter, verifyOTP)

// Protected routes  
router.post('/update-user', verifyToken, updateUser)
router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}` });
});

  
export default router
