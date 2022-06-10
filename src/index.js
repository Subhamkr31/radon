const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Subham_1234:Subham1@cluster0.fzu3b.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use(
    function (req, res, next) {
        console.log("inside GLOBAL MW");
        next();
    }
);


function getThecurrentTimeString() {
    return new Date().toString();
}
app.use(
    function (req, res, next) {
        req.time = getThecurrentTimeString();
        console.log(req.time);
        next();
    }
)
app.use(
    function (req, res, next) {
        const parseIp = (req) =>
            req.headers['x-forwarded-for']?.split(',').shift()
            || req.socket?.remoteAddress
        console.log(parseIp(req))
        next();
    });

app.use(
    function (req, res, next) {

        console.dir(req.path) // '/new'

        next()
    })


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
