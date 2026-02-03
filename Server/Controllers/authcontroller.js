import { generateToken } from "../Utilities/generateToken.js";
import user from "../Models/user.js";
import bcrypt from 'bcryptjs'



export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

 
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

 
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    
    const token = generateToken(existingUser._id);

    res.status(200).json({
      message: "Login successful",
      user: {
        id: existingUser._id,
        email: existingUser.email,
      },
      token,
    });
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ message: "Server error" });
  }
};