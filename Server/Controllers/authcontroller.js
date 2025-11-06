import { generateToken } from "../Utilities/generateToken";
import user from "../Models/user";
import bcrypt from 'bcryptjs'

export const registerUser = async(req, res) => {
    try {
        const { email, password } = req.body

        const existingUser = await user.findOne({ email })

        if(existingUser) {
            return res.status(400).json({ message: "User already exists"})
        }

        //Hash passwod

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await user.create({
            email,
            password: hashedPassword
        })

        //token
        const token = generateToken(newUser._id)

        res.status(201).json({
            message: "User registered succseefully",
            user: {
                id: newUser._id,
                email: newUser.email
            },
            token
        })
    } catch(error) {
        console.error("could not register", error)
        res.status(500).json({ message: "SErver error"})
    }
} 


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