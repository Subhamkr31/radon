const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {


    name: String,
	balance:{
    type:Number,
    default: 100
    }, // Default balance at user registration is 100
	address:String,

                            // Allowed values are - “male”, “female”, “other”
	isFreeAppUser: {
        type : Boolean,
        default:false
    }, // Default false value.
    gender: {
        type: String,
        enum: ["male", "female", "other"] //"falana" will give an error
    },
    age: Number,

}, { timestamps: true });

module.exports = mongoose.model('middUser', userSchema) 


