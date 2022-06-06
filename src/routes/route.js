const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController");
const bookModel = require('../models/bookModel');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookController.bookList)

router.get("/getBookInYear", BookController.getBookInYear)

router.get("/getRandomBooks",BookController.getRandomBooks)

router.get('/XINRBooks',BookController.XINRBooks)

module.exports = router;