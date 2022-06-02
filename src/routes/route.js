const express = require('express');
// const externalModule = require('./logger')

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('The constant in logger route has a value '+externalModule.endpoint)
//     console.log('The current batch is '+externalModule.batch)
//     externalModule.log()
//     res.send('My first ever api!')
// });

router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let missingNumber

    ///LOGIC WILL GO HERE 
    res.send(  { data: "missingNumber"  }  );
});




module.exports = router;
// adding this comment for no reason