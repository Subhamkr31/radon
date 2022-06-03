const express = require('express');
var bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', route);

////////////////////////////// Question 1 ////////////////////////////////////////////////////////

// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
 // Your route code will look like this
 app.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
   let total = 0

    for(let i =0; i< arr.length; i++){
        total = total +arr[i]
    }
    let lastDigit = arr.pop()
    let consecutive = lastDigit*(lastDigit+1)/2
    let missingNumber = consecutive- total
    console.log(missingNumber,total);

    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
});



////////////////////////////// Question 2 ////////////////////////////////////////////////////////


 // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
 // Your route code will look like this
 app.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let len = arr.length

    let total =0
    for (let i in arr){
        total +=arr[i]
    }

    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let consecutiveSum = (len+1)*(firstDigit +lastDigit)/2
    let missingNumber = consecutiveSum -total

    console.log(total);
    ///LOGIC WILL GO HERE 

    res.send(  { data: missingNumber  }  );
});

 
app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
