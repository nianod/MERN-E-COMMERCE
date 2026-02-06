                                                                                                                                                                                                                                                                import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    otp: {
      type: String,
      default: null
    },

    expiresAt: {
      type: Date,
      default: null
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    }
  },
  { timestamps: true }
)

const User = mongoose.model("User", userSchema)
export default User
