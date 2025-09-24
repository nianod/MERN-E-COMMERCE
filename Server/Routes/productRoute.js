const express = require('express')
const router = express.Router()
const {getProducts, createProduct, getProduct,deleteProduct, updateProduct} = require('../Controllers/proController')

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
module.exports = router