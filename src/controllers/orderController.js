const { count } = require("console")
const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
let ObjectId = require('mongoose').Types.ObjectId


const createorder = async function (req, res) {
    let data = req.data

    let a = req.body.userId
    let b = req.body.productId

    if (!ObjectId.isValid(a)) {
        res.send({ msg: "user Objetid is not valid" })
    }
    if (!ObjectId.isValid(b)) {
        res.send({ msg: "product Objetid is not valid" })
    }

    let c = await userModel.findOne({ $in: { _id: a } }).select({ _id: 1, balance: 1 })
    if (!c) res.send({ msg: "user is not present" })
    console.log(c.balance)

    let d = await productModel.findOne({ $in: { _id: b } }).select({ _id: 1, price: 1 })
    if (!d) res.send({ msg: "product is not present" })
    console.log(d)



    let takeheader = req.headers.isfreeappuser
    if (takeheader == "false") {
        if (c.balance > d.price) {

            c.balance = c.balance - d.price
        // let all= await orderModel.findOneAndUpdate(   
        // {  amount: c.balance  }) //condition
    //    res.send({msg: all})
        

            console.log(c.balance);
        }else if(d.price > c.balance ){
            console.log("user doesn't have enough balance")
        }

    }else if(takeheader == "true"){
        console.log(" isFreeAppUser is free")
    }

  //Set an attribute in request object
     req.isfreeappuser = "true"


let savedata = await orderModel.create(data)
res.send({ data: savedata })

}


module.exports.createorder = createorder






