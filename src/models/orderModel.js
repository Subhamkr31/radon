const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId: {
       type: ObjectId,
       ref: "middUser"
    },
	productId: {
       type: ObjectId,
       ref:'product'
    },
	amount: 0,

	date: Date




}, { timestamps: true });


module.exports = mongoose.model('order', orderSchema) //users
