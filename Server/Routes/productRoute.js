const express = require('express')
const router = express.Router()
const Product = require('./models.Product.models.js')
const {getProducts,getProduct} = require('./Routes.ProductRoute.js')

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)

module.exports = router