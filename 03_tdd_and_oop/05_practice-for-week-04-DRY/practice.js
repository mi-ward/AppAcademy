function orderSmallestToLargest(num1, num2) {
  if (num1 > num2) {
    return [num2, num1];
  }
  else {
    return [num1, num2];
  }
}

function multiplyBiggerNumByTwo(num1, num2) {
  let largest = orderSmallestToLargest(num1, num2)[1]
  return ( largest * 2);

}

function divideBiggerNumByThree(num1, num2) {
  return (orderSmallestToLargest(num1, num2)[1] / 3);
}

function eatMostTacos(sum1, sum2) {
  let tacos = orderSmallestToLargest(sum1, sum2)[1];
  return `I ate ${tacos} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  smallDog = orderSmallestToLargest(weight1, weight2)[0];
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
