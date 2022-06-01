const express = require('express');
const externalModule = require('../logger/logger')
const helperModule = require('../util/helper.js')
const validatorModule = require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {

    externalModule.welcome()
    helperModule.printDate()
    helperModule.printMonth()
    helperModule.getBatchInfo()
    validatorModule.trim()
    validatorModule.b
    validatorModule.sent
    res.send('My first ever api!')

});


module.exports = router;
// adding this comment for no reason