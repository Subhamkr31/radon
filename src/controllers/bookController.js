const { count } = require("console")
const req = require("express/lib/request")
const { get } = require("express/lib/response")
const { request } = require("http")
const AuthorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")



////---------------------------------------------------------
const createauthor= async (req, res) => {
    const data = req.body
    const show = await AuthorModel.create(data)
    res.send({ msg : show})
}

////----------------------------------------------------------
const createbook = async (req, res) => {
    const data1 = req.body
    const show1 = await BookModel.create(data1)
    res.send({ msg : show1})
}

////----------------------------------------------------------
const getbook = async function(req,res){
    const some = await AuthorModel.find({author_name: "chetan bhagat"}).select({ author_id:1, _id:0})
    const datasave = await BookModel.find({author_id:some[0].author_id}).select({name:1, _id:0})
    console.log(datasave);
    res.send({msg: datasave})
}

////----------------------------------------------------------
const gettwo = async function(req,res){

    const  auth = await BookModel.findOneAndUpdate({name : "Two States"},{$set:{price:100}},{new:true})
    const savedata = await AuthorModel.find({author_id:auth.author_id}).select({author_name:1,_id:0})
    console.log(savedata);
    res.send({msg: savedata})
}

////----------------------------------------------------------
const fbook = async function (req,res){
const cost = await BookModel.find({ price: {$gte: 50, $lte: 100}}).select({author_id:1})
const data = await AuthorModel.find({ $or:[{author_id: cost[0].author_id},{author_id: cost[5].author_id}]}).select({author_name:1,author_id:1, _id:0})

const authName = data.map((x) => x.author_name )
// .forEach(x => {cost.author_id})
console.log(cost);
console.log(data);
res.send({msg:authName})
}

module.exports.createauthor = createauthor
module.exports.createbook = createbook
module.exports.getbook =getbook
module.exports.gettwo = gettwo
module.exports.fbook =fbook






