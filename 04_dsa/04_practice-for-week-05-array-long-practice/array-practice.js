const findMinimum = arr => {
  //Time: O(n), Space: O(1)
  if (arr.length === 0) {return undefined}

  return arr.reduce((acc, cur) => (cur < acc) ? cur : acc);
};

const runningSum = arr => {
  //Time: n, Space: n
  let count = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(count + arr[i])
    count += arr[i];
  }

  return newArr;
};

const evenNumOfChars = arr => {
  //Time: n, Space: n
  return arr.filter(item => item.length % 2 === 0).length;
};

const smallerThanCurr = arr => {
  //Time: n^2, Space: n
  return arr.map(item => arr.filter(toCheck => item > toCheck).length)
};

const twoSum = (arr, target) => {
  //Time: n^2, Space: O(1)
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (target === sum) {return true}
    }
  }
  return false;
};

const secondLargest = arr => {
  //Time: n^2, Space: O(1)
  if (arr.length < 2) {return undefined}

  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length; j++) {
      let a = arr[i];
      let b = arr[j];

      if (a > b) {
        [arr[i], arr[j]] = [b, a]
      }
    }

  }
  return arr[arr.length - 2];
};

const shuffle = (arr) => {
  //Time: n^2 Space: O(n)
  let newArr = [];

  arr.forEach(element => {
    let randomVal = Math.floor(Math.random() * 2);
    randomVal === 1 ? newArr.push(element) : newArr.unshift(element)
  });

  return newArr;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
