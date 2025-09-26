// import express, { request } from "express";
// import mongoose from "mongoose";
// import dotenv from 'dotenv'

const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const productRoute = require('./Routes/productRoute.js')
const Product = require('./Models/Product.models.js')
const cors = require('cors')

const app = express()
app.use(cors())
dotenv.config() 

app.use(express.json()) //Middleware
app.use(express.urlencoded({extended: false }))

app.use('/api/products', productRoute)

const PORT = process.env.PORT || 7000
const MONGO = process.env.MONGO_URL

app.post('/api/products', async (request, response) => {
    try {
        const product = await Product.create(request.body)
        response.status(201).json(product)
    } catch(error) {
        response.status(500).json({message: error.message})
    }
})

//controller
// app.get('/api/products', async (request, response) => {
//     try {
//         const product = await Product.find({})
//         response.status(200).json(product)
//     } catch(error) {
//         response.status(500).json({message: error.message})
//     }
// })
 
app.get('/api/product/id', async(request, response) => {
    try {
        const { id } = request.params
        const product = await Product.findById(id)
        response.status(200).json(product)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
})


app.put('/api/product/:id', async(request, response) => {
    try {
        const { id } = request.params

        const product = await Product.findByIdAndUpdate(id, request.body, { new: true })

        if(!product) {
            return response.status(404).json({ message: "Product not found"})
        }
    } catch (error) {
        const updateProduct = await Product.findById(id)
        response.status(201).json(updateProduct)
    }
})

 app.delete('/api/product/:id', async(request, response) => {
    try {
        const { id } = request.params

        const product = await Product.findByIdAndDelete(id)

        if(!product) {
            return response.status(404).json({ message: "Product not found" })
        }
        response.status(200).json({ message: "Product deleted successfully"})
        
    } catch (error) {
        response.status(500).json({message: error.message})
    }
 })


mongoose.connect(MONGO, {
    dbName: "ecommerce-db",
})
.then(() => {
    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}`)
    })
    app.get('/', (request, response) => {
        response.send('Hello From NODE API')
    })
}).catch((error) => {
    console.log('Database connection failed', error.message)
})