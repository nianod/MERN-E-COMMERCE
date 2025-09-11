// import express from "express";
// import mongoose from "mongoose";
// import dotenv from 'dotenv'

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const product = require('./models.product.model.js')

const app = express()
dotenv.config() 

app.use(express.json())

const PORT = process.env.PORT || 7000
const MONGO = process.env.MONGO_URL

app.post('/api/products', (request, response) => {
    // console.log(request.body)
    // response.send('Data received')
    try {

    } catch(error) {
        response.status(500).json({message: error.message})
    }
})

mongoose.connect(MONGO).then(() => {
    console.log('Database connected successfully')
    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}`)
    })
    app.get('/', (request, response) => {
        response.send('Hello From NODE API')
    })
}).catch((error) => {
    console.log('Database connection failed', error.message)
})