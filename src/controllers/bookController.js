const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
let ObjectId = require('mongoose').Types.ObjectId


////----------------------------------------------------------------------
const createBook= async function (req, res) {
    let book = req.body
    let authId = book.author_id
    let publisId = book. publisher_id


    if(!authId ){res.send({msg: "INSERT author Id" })}
    if(!publisId){res.send({msg:"INSERT Publisher Id"})}
   
    if(!ObjectId.isValid(authId)) {
        res.send({msg:"Author's Objetid is not valid"})
    }
    if(!ObjectId.isValid(publisId)){
        res.send({msg:"Publisher's Ojectid is not valid"})
    }

    let cc = await authorModel.findOne({_id:authId}).select({_id:1})
    cc = cc._id.toString()
    // console.log(cc);
    // console.log(authid);
    if(authId !== cc){
        // console.log(typeof authid);
        // console.log(typeof cc);
        res.send({msg:"author is not present."})
    }

    let aa = await  publisherModel.findOne({_id:publisId}).select({_id:1})
    aa = aa._id.toString()
    if(publisId !== aa){
        res.send({msg:"publisher is not present."})
    }

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

////-------------------------------------------------------------------------------------------
const getBooksWithAuthorPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find({}).populate("author_id").populate("publisher_id")
    console.log(specificBook);
    res.send({data: specificBook})

}


//------------------------new problem 5--------------------------------------------------

// const isHapperup = async function(req,res){

//     let allBooks= await bookModel.updateMany( 
//         { name: "harry poter"} , //condition
//         { $set: {isHardCover: { default: false}} }, //update in data
//         { new: true } ,
//      )
//      res.send({msg:allBooks})
// }


//----------------------------------------------------------------------------
// const upprice = async function(req,res){

//     const price = await authorModel.findOneAndUpdate({ratings: {$gt:3.5},select( price:{$set : })
//     res.send({data: price})
// }



module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorPublisherDetails = getBooksWithAuthorPublisherDetails

// module.exports.isHapperup = isHapperup

// module.exports.upprice =upprice