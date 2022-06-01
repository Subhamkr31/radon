

function printDate() {
    return console.log("current Date is ", new Date());
}

function printMonth() {
    let d = new Date();
    let n = d.getMonth() + 1;
    return console.log("current month is", n);
}

function getBatchInfo() {
    return console.log(" batch name - Radon, week -3, Day- 3, the topic being taught today is ….. For example - ‘Radon, W3D1, the topic for today is Nodejs module system’");
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo