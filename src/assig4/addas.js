
const { functions } = require('lodash');
const _ = require('lodash')

const arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


const newArr = function (){
  const d =  _.chunk(arr,4)
return console.log(d);
}


const arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

const newArr2 = function(){
   const c =  _.tail(arr1)

  return console.log(c);
}

const arra =[1,2,3]
const arrb =[2,6,8,1]
const arrc =[8,1,3]
const arrd = [11,9,8,6,]
const arre =[1,2]
const arrf = [6,7,3]
const newArr3 = function(){
    const e = _.union(arra,arrb,arrc,arrd,arre,arrf)
    return console.log(e);
}

const arr3 =  ([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']])

const newArr4 = function(){
    const f = _.fromPairs(arr3)
    return console.log(f)
}

module.exports.newArr =  newArr
module.exports.newArr2 = newArr2
module.exports.newArr3 = newArr3
module.exports.newArr4 = newArr4
