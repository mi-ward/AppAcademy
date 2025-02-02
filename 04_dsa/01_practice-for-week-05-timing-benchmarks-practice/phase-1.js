// Adds up positive integers from 1-n
function addNums(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    count += i;
  }
  return count;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    count += addNums(i);
  }
  return count;
}



module.exports = [addNums, addManyNums];
