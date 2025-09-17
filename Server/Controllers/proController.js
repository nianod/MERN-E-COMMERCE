const Product = require('./Models.Product.model.js')

const getProduct = async (request, response) => {
        try {
        const product = await Product.find({})
        response.status(200).json(product)
    } catch(error) {
        response.status(500).json({message: error.message})
    }
}

module.exports = {
    getProduct
}