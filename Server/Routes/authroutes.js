import express from "express"
import { verifyOTP, requestLogin, requestOTP } from "../Controllers/authcontroller.js"
import { verifyToken } from "../Middlewares/verifytoken.js"
 
const router = express.Router()

 
router.post('/request-login', requestLogin)
router.post('/request-otp', requestOTP)
router.post('/verify-otp', verifyOTP)


// router.get("/protected", verifyToken, (req, res) => {
//   res.json({ message: `Welcome, user ${req.user.id}` });
// });

export default router


  