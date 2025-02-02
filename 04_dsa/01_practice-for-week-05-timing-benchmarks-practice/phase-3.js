const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  console.time("addNums");

    let arr = [];
    for (let i = increment; i <= 10 * increment; i+= increment) {
      startTime = Date.now();
      arr.push(addNums(i));
      endTime = Date.now()
      console.log(`${endTime - startTime}`);
      //console.timeLog("addNums");
    }
    console.timeEnd("addNums");
    return arr;
}


function addManyNums10Timing(increment) {
  console.time("addNums");
  let arr = [];
  for (let i = increment; i <= 10 * increment; i+= increment) {
    startTime = Date.now();
    arr.push(addManyNums(i));
    endTime = Date.now()
    console.log(`${endTime - startTime}`);
    //console.timeLog("addNums");
  }
  console.timeEnd("addNums")
  return arr;
}

function addNums100Timing(increment) {
  console.time("addNums");

    let arr = [];
    for (let i = increment; i <= 100 * increment; i+= increment) {
      startTime = Date.now();
      arr.push(addNums(i));
      endTime = Date.now()
      console.log(`${endTime - startTime}`);
      //console.timeLog("addNums");
    }
    console.timeEnd("addNums");
    return arr;
}

function addManyNums100Timing(increment) {
  console.time("addNums");
  let arr = [];
  for (let i = increment; i <= 100 * increment; i+= increment) {
    startTime = Date.now();
    arr.push(addManyNums(i));
    endTime = Date.now()
    console.log(`${endTime - startTime}`);
    //console.timeLog("addNums");
  }
  console.timeEnd("addNums")
  return arr;
}

n = 1000000
// console.log(`addNums(${n}): `);
// addNums10Timing(1000000);

// console.log("\n***********\n");

// n = 100
// console.log(`addManyNums(${n}): `);
// addManyNums10Timing(5000);

// console.log(`addNums(${n}): `);
// addNums100Timing(1000000);

n = 100
console.log(`addManyNums(${n}): `);
addManyNums100Timing(1000);
