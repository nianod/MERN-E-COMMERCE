import mongoose from "mongoose"

const schema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
     otp: {type: String},
     expiresAt: {type: Date},
    role: {type: String, enum: ['user', 'admin'], default: 'user'}
})

const User = mongoose.model("User", schema)  

export default User