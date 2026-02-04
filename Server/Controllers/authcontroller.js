import User from "../Models/User.js"
import crypto from 'crypto'
export const requestLogin = async (req, res) => {
  try {
    const {email} = req.body

    if(!email) {
      return res.status(400).json({message: 'email is mandatory'})
    }

    const existingUser = await User.findOne({email})

    return res.status(200).json({
      success: true,
      message: 'if your email exists in our database, we will send an OTP to your email'
    })

  } catch (error) {
    console.error("Error in CheckEmail:", error);
    res.status(500).json({ message: "Server error" });  
  }
}
 

export const verifyOTP = async (req, res) => {
  const {email, otp} = req.body

  const existingUser = await User.findOne({email})

  if(!existingUser) {
    return res.status(400).json({message: "No otp found or Invalid otp"})
  }

  if(existingUser.expiresAt < new Date()) {
    return res.status(400).json({message: "OTP has expired. Please request a new one."})
  }

  const hashedOtp = crypto
    .createHash('sha256')
    .update(otp)
    .digest('hex')

    if(hashedOtp !== existingUser.otp) {
      return res.status(400).json({message: "invalid otp"})
    }

    existingUser.otp = null
    existingUser.expiresAt = null
    await existingUser.save()

    const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
    res.json({ token })
}

 

export const requestOTP = async (req, res) => {
  const { email } = req.body;

  const otp = generateOTP();
  const hashedOtp = crypto
    .createHash("sha256")
    .update(otp)
    .digest("hex");

  const expiry = Date.now() + 5 * 60 * 1000;  

  let existingUser = await User.findOne({ email });

  if (!existingUser) {
    existingUser = await User.create({ email });
  }

  existingUser.otp = hashedOtp;
  existingUser.otpExpiresAt = expiry;
  await existingUser.save();

 
  console.log("OTP:", otp);  

  res.json({ message: "OTP sent" });
};
