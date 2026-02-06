import express from "express"
import { verifyOTP, requestOTP, checkIfUserExists, updateUser } from "../Controllers/authcontroller.js"
import { verifyToken } from "../Middlewares/verifytoken.js"
 
const router = express.Router()

 
router.post('/request-otp', requestOTP)
router.post('/update-user', verifyToken, updateUser)
router.post('/verify-otp', verifyOTP)
router.post('/check-user', checkIfUserExists)

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}` });
});

export default router


  