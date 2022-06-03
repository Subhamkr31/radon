const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/movies', function (req, res) {
   
    const arr = ['Rang de basanti', 'Iron man', 'Inception', 'Batman begins']
    res.send(arr)
});


const arr =[  'Rang de basanti','The shining','Lord of the rings', 'Batman begins']
router.get('/movies/:indexNumber', function(req,res){
    

    const a = arr.filter((x) =>  req.params.indexNumber).find((x) =>  req.params.indexNumber )
    // .find((x) =>x.length = req.params.indexNumber)
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log(a);
    
    
    // x.a = req.params.indexNumber
    res.send(a)
         
})

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason