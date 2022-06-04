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
    let newPlayer = req.body

    for (let i = 0; i < players.length; i++) {
        if (players[i].name === req.body.name) {

            res.send("This player was already added!")

        } else {
            players.push(newPlayer)
            res.send(players)

        }
    }
})


module.exports = router;