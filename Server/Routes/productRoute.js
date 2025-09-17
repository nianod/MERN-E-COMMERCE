const express = require('express')
const router = express.Router()
const Product = require('./model.Product.model.js')

router.get('/', async (request, response) => {
        try {
        const product = await Product.find({})
        response.status(200).json(product)
    } catch(error) {
        response.status(500).json({message: error.message})
    }
})