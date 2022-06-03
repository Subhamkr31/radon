const express = require('express');
const router = express.Router();

// router.get('/students/:name', function (req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })


let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]




router.post("/players", function (req, res) {
    let newArr = [req.body.name, req.body.dob, req.body.gender,req.body.city,req.body.sports]

    if(players.push(newArr)== req.body.name){
        res.send({msg : req.body.name + "that already exists in the data"})
    }

    res.send({ msg: players, status: true })
})


module.exports = router;