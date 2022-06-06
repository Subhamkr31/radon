const { count } = require("console")
const { request } = require("http")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")


////---------------------01---------------------------------------------

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


////--------------------------02---------------------------------------------
const bookList= async function (req, res) {

let allBooks = await BookModel.find().select({bookName: 1, authorName: 1, _id: 0})

res.send({msg: allBooks})

}

////----------------------------03---------------------------------------------
const getBookInYear = async function (req,res){
    // let allyear = req.body.year
    let sbook = await BookModel.find({"year":2001})
    res.send({msg: sbook})

}

////------------------------04---------------------------------------------
const ParticularBooks = async function(req,res){
     let user = req.body.bookName
     

}


////------------------------05--------------------------------------------
const XINRBooks = async function(req,res){
// let inrBook = await BookModel.find({prices : { $in: ["100INR", "200INR","500INR"]}})
let inrBook = await BookModel.find({price: {  indianPrice:"100INR" }})
res.send({msg: inrBook})
}


////---------------------------06-------------------------------------------
const getRandomBooks = async function(req,res){

    let randomBooks = await BookModel.find({stockAvailable:true},{totalPages: { $gt:  500 } })
    res.send({msg: randomBooks})
}


module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBookInYear = getBookInYear
module.exports.getRandomBooks = getRandomBooks
module.exports.XINRBooks =XINRBooks
