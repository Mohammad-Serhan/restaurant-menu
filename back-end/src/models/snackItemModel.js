const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// how the Menu Item looks
const itemSchema = new Schema({
    // id: {
    //     type: Number,
    //     require: true,
    //     unique: true
    // },
    title: {
        type: String,
        require: true,
        min: 4
    },
    category: {
        type: String,
        require: true,
        min: 4
    },
    ingrediants: {
        type: [String],
        require: true,
        min: 4
    },
    img: {
        type: String,
        require: true,
        min: 4
    },
    price: {
        type: Number,
        require: true,
        min: 1
    },
})


//  every time admin creates a new item
//  we are going to save it in this collection  --items--
//      based on this schema  -- itemSchema -- 
module.exports = mongoose.model("items", itemSchema)