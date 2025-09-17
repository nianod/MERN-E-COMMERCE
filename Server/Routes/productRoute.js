const express = require('express')
const router = express.Router()
const Product = require('./models.Product.models.js')
const {getProduct} = require('./Routes.ProductRoute.js')

router.get('/', getProduct)
router.get('/')