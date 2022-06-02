

function trim() {
    return console.log('   functionUp  ')
}

const b = "Call toLowerCase on a hardcoded string";
console.log(b.toLowerCase());


const sent = "Call toUpperCase on a hardcoded string"

console.log(sent.toUpperCase());

module.exports.trim = trim
module.exports.b = b
module.exports.sent = sent