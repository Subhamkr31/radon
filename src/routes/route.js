const express = require('express');
const router = express.Router();

const publisherModel = require("../controllers/publisherController")
const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createBook", bookController.createBook )

router.post("/createPublisher", publisherModel.createPublisher)




router.get("/getBooksWithAuthorPublisherDetails", bookController.getBooksWithAuthorPublisherDetails)


// router.get("/isHapperup",bookController.isHapperup)

// router.put("/upprice", bookController.upprice)

module.exports = router;