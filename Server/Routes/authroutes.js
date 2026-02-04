import express from "express"
import { verifyOtp, requestLogin } from "../Controllers/authcontroller.js"
import { verifyToken } from "../Middlewares/verifytoken.js"

const router = express.Router()

 
router.post('/request-login', requestLogin)
router.post('/verify-otp', verifyOtp)

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}` });
});

export default router


  