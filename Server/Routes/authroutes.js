import express from "express"
import { registerUser, loginUser } from "../Controllers/authcontroller.js"
import { verifyToken } from "../Middlewares/verifytoken.js"

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}` });
});

export default router
