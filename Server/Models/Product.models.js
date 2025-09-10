const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name : {
            type: String,
            required: [true, "Please enter Product Name"]
        }, 
        quantity : {
            type: Number,
            required: true,
            default: 0
        },
        price : {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: true
        }
    },
    {
        Timestamp: true
    }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product