const publisherModel = require("../models/publisherModel")

const createPublisher = async function(req,res){
let data = req.body
let savedata = await publisherModel.create(data)
res.send({msg:savedata})

}

module.exports.createPublisher =createPublisher