const express = require('express');
const _ = require('lodash')
// const externalModule = require('../logger/logger')
// const helperModule = require('../util/helper.js')
// const validatorModule = require('../validator/formatter.js')
const addasModule =require('../assig4/addas')

const router = express.Router();

// router.get('/test-me', function (req, res) {

//     externalModule.welcome()
//     helperModule.printDate()
//     helperModule.printMonth()
//     helperModule.getBatchInfo()
//     validatorModule.trim()
//     validatorModule.b
//     validatorModule.sent
//     res.send('My first ever api!')

// });

router.get('/hello', function (req, res) {

    addasModule.newArr()
    addasModule.newArr2()
    addasModule.newArr3()
    addasModule.newArr4()
    res.send('Hello ,welcome to Nodejs -intro')

});

module.exports = router;
// adding this comment for no reason