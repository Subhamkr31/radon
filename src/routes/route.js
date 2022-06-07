const express = require('express');
const router = express.Router();
const AuthorModel = require("../models/authorModel")
const BookController= require("../controllers/bookController");
const bookModel = require('../models/bookModel');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createauthor", BookController.createauthor )

router.post("/createbook", BookController.createbook)

router.get("/getbook", BookController.getbook)

router.get("/gettwo", BookController.gettwo)

router.get("/fbook",BookController.fbook)
module.exports = router;