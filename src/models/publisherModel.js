const mongoose = require("mongoose")
const { stringify } = require("nodemon/lib/utils")

const publisherSchema = new mongoose.Schema({
 
    name:{
        type: String,
        required: true
    },
    headQuarter: String
},{ timestamps: true })

module.exports = mongoose.model('newPublisher', publisherSchema)