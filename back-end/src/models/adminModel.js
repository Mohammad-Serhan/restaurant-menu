const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema -- how the admin looks
const adminSchema = new Schema({
    email: {
        type: String,
        require: true,
        min: 8,
        unique: true
    },
    password : {
        type: String,
        required: true,
        min: 8
    }
})

module.exports = mongoose.model("admins", adminSchema);