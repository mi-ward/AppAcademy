let addNums = (num) => {
  let count = 0;
  for (let i = 0; i <= num; i++) {
    count += num;
  }
}

// console.time("addNums")
// addNums(1000000)
// console.timeEnd("addNums")

function addFirstAndLast(nums) {

  const firstNum = nums[0];
  const lastNum = nums[nums.length - 1];

  return firstNum + lastNum;
}

const twoNums = [999999999999, 999999999999];
const millionNums = [];
const twoMillionNums = [];

for (let i = 0 ; i < 1000000 ; i++) {
  millionNums.push(999999999999);
}

for (let i = 0 ; i < 2000000 ; i++) {
  twoMillionNums.push(999999999999);
}

startTime2 = Date.now();
addFirstAndLast(twoNums);
endTime2 = Date.now();

startTime1m = Date.now();
addFirstAndLast(millionNums);
endTime1m = Date.now();

startTime2m = Date.now();
addFirstAndLast(twoMillionNums);
endTime2m = Date.now();

console.log(`${endTime2  - startTime2 }`);   // 2ms
console.log(`${endTime1m - startTime1m}`);   // 1ms
console.log(`${endTime2m - startTime2m}`);   // 2ms
