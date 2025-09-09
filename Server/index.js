import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

const app = express()
dotenv.config() 

const PORT = process.env.PORT || 7000
const MONGO = process.env.MONGO_URL

mongoose.connect(MONGO).then(() => {
    console.log('Database connected successfully')
    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}`)
    })
})