import express from "express"
import { 
  verifyOTP, 
  requestOTP, 
  checkIfUserExists, 
  updateUser,
  registerUserAndRequestOTP  // ✅ Add this import
} from "../Controllers/authcontroller.js"
import { verifyToken } from "../Middlewares/verifytoken.js"
 
const router = express.Router()

// Public routes (no authentication required)
router.post('/check-user', checkIfUserExists)
router.post('/register', registerUserAndRequestOTP)  // ✅ Add this route for new users
router.post('/request-otp', requestOTP)  // For existing users
router.post('/verify-otp', verifyOTP)

// Protected routes (authentication required)
router.post('/update-user', verifyToken, updateUser)
router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}` });
});

export default router