import mongoose from "mongoose"

const schema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['user', 'admin'], default: 'user'}
})

const user = mongoose.model("user", schema)

export default user