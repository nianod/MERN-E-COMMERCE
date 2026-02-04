 import user from "../Models/user.js";
 
export const requestLogin = async (req, res) => {
  try {
    const {email} = req.body

    if(!email) {
      return res.status(400).json({message: 'email is mandatory'})
    }

    const existingUser = await user.findOne({email})

    return res.status(200).json({
      success: true,
      message: 'if your email exists in our database, we will send an OTP to your email'
    })

  } catch (error) {
    console.error("Error in CheckEmail:", error);
    res.status(500).json({ message: "Server error" });  
  }
}
 
export const verifyOTp = async (req, res) => {
  const {email, otp} = req.body
  
}