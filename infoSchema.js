const mongoose = require("mongoose");

const infoSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim:true
    },
    Mail: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required:true
    },
    City: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    createdTime: {
        type: Date,
        default:Date.now
    }
})

module.exports = mongoose.model("info", infoSchema);