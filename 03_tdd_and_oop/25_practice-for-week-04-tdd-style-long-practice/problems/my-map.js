function myMap(inputArray, callback) {
let arr = [];
inputArray.forEach((val) => {
  arr.push(callback(val));
})
return arr;
}

module.exports = myMap;
