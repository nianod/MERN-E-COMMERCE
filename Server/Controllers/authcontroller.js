import User from "../Models/User.js"
import crypto from 'crypto'
import jwt from  'jsonwebtoken'

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export const checkIfUserExists = async(req, res) => {
  const {email} = req.body

  const existingUser = await User.findOne({email})

  res.json({
    exists: !!existingUser
  })
}


export const updateUser = async(req, res) => {
  try{
    const userId = req.user.id
    const { firstName, lastName, mobileNumber} = req.body

     

    

    const user = await User.findOneAndUpdate(
      {userId},
      {
      firstName,
      lastName,
      mobileNumber
      },
      {new: true}
    )

    if(!user) {
      return res.status(404).json({message: "User not found"})
    }

    res.status(201).json({
      message: "User updated",
      userId: user._id
    })
  } catch(err) {
    console.log('there is an error', err.message)
    return res.status(500).json({message: "server error"})
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
  const { email } = req.body

  const user = await User.findOne({ email })
  if (!user) {
    return res.status(404).json({ message: "User not found" })
  }

  const otp = generateOTP()
  const hashedOtp = crypto
    .createHash("sha256")
    .update(otp)
    .digest("hex")

  user.otp = hashedOtp
  user.expiresAt = Date.now() + 5 * 60 * 1000
  await user.save()

  console.log("OTP:", otp)  

  res.json({ message: "OTP sent" })
}
