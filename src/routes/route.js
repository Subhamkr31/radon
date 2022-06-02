const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/movies', function (req, res) {
   
    const arr = ['Rang de basanti', 'Iron man', 'Inception', 'Batman begins']
    res.send(arr)
});

router.get('/movies/:indexNumber', function(req,res){
    const arr =['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let mov = arr.length

    const a = arr.find((x) => req.params.indexNumber)
    res.send(a)
    // for(let i=0;i < arr.length;i++){
    //     // console.log('The request objects is '+ JSON.stringify(req.params))

    //     if(arr[i]=== req.params.indexNumber){
    //         res.send(arr[i])
    //     }else{
    //         res.send("movie not found")
    //     }
    }

})

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason