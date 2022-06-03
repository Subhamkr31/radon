const express = require('express');
const underscore = require('underscore')

const router = express.Router();

///-------------------------01-------------------------------------------
router.get('/movies', function (req, res) {
   
    const arr = ['Rang de basanti', 'Iron man', 'Inception', 'Batman begins']
    res.send(arr)
});

///-------------------------------02 and 03-------------------------------------
router.get('/movies/:indexNumber', function(req,res){
    
    const arr =[  'Rang de basanti','The shining','Lord of the rings', 'Batman begins']
 const index = req.params.indexNumber
 if(index < arr.length){
     movie = arr[index];
 }else{
     movie = ("enter valid index number");
 }
    
    res.send(movie)
         
})

///-----------------------------04-----------------------------------------
let arr2 =[ { id: 1, name: 'The Shining' }, {id: 2, name: 'Incendies' }, { id: 3,
name: 'Rang de Basanti'}, {id: 4, name: 'Finding Nemo' }]
   
router.get('/film',function(req, res){

    res.send( arr2)

})


///------------------------------05------------------------------------------
router.get( '/films/:filmId', function(req,res){
    
    let arr2 =[ {id: 1,name: 'The Shining'}, {id: 2,name: 'Incendies' }, {id: 3, name: 'Rang de Basanti' },
    {id: 4, name: 'Finding Nemo' }]

let ind = req.params.filmId

for (let i =0; i < arr2.length; i++){
   if(arr2[i].id === ind){
    res.send(arr2[i])
   }else{
    res.send('No movie exists with this id')
   }
 } 

})

module.exports = router;
// adding this comment for no reason