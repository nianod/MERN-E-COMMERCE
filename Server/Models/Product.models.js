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
    }
)