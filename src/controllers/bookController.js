
const bookModel= require("../models/bookModel")

const createNewbook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBookinfo= async function (req, res) {
    let bookUsers= await bookModel.find()
    res.send({msg: bookUsers})
}

module.exports.createNewbook= createNewbook
module.exports.getBookinfo = getBookinfo