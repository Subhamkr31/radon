const mongoose = require('mongoose');





const bookSchema = new mongoose.Schema( {

    
    author_id:{
        type:String,
        require: true
    },
    
    name: String,
    price: Number,
    ratings:Number


}, { timestamps: true });


module.exports = mongoose.model('Book1', bookSchema) 


//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
