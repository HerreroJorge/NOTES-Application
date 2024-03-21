const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Note', noteSchema)