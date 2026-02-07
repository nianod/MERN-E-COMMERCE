import express from "express"
import { verifyOTP, requestOTP, checkIfUserExists, updateUser, registerUserAndRequestOTP} from "../Controllers/authcontroller.js"
import { verifyToken } from "../Middlewares/verifytoken.js"
 
const router = express.Router()

// Public routes  
router.post('/check-user', checkIfUserExists)
router.post('/register', registerUserAndRequestOTP)   
router.post('/request-otp', requestOTP)  
router.post('/verify-otp', verifyOTP)

// Protected routes  
router.post('/update-user', verifyToken, updateUser)
router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}` });
});

export default router