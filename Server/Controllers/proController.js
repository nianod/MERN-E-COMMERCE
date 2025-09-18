const Product = require('./Models.Product.model.js')

const getProducts = async (request, response) => {
        try {
        const product = await Product.find({})
        response.status(200).json(product)
    } catch(error) {
        response.status(500).json({message: error.message})
    }
}

const getProduct = async (request, response) => {
    try {
        const { id } = request.params
        const product = await Product.findById(id)
        response.status(200).json(product)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}
 
module.exports = {
    getProducts,
    getProduct
}