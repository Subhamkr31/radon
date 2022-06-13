// const { count } = require("console")
const productrModel= require("../models/productModel")


const createProduct = async function (req,res){

    let data = req.body 
    let product1 = await productrModel.create(data)
    res.send({data: product1})
}


module.exports.createProduct =createProduct



