const express = require('express')
const router = express.Router()
const Product = require('./models.Product.models.js')
const {getProducts, createProduct, getProduct,deleteProduct, updateProduct} = require('./Routes.ProductRoute.js')

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
module.exports = router