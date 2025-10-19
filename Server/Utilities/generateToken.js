import jwt from 'jsonwebtoken'

export const generateToken = (userId) => {
    return jwt.sign({ id: userId}, process.env.JSON_SECRET_KEY, {
        expiresIn: process.env.JSON_EXPIRY || "1d"
    })
}