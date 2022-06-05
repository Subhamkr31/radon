const express = require('express');
const router = express.Router();
// const bookModel= require("../models/bookModel")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createnewbook", bookController.createNewbook  )

router.get("/getallbookinfo", bookController.getBookinfo)

module.exports = router;