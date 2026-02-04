import express from "express"
import { verifyOTP, requestOTP } from "../Controllers/authcontroller.js"
import { verifyToken } from "../Middlewares/verifytoken.js"
 
const router = express.Router()

 
router.post('/request-otp', requestOTP)
router.post('/verify-otp', verifyOTP)


router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}` });
});

export default router


  