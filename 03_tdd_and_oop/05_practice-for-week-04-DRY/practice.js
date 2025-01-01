function returnLargest(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else {
    return num2;
  }
}

function multiplyBiggerNumByTwo(num1, num2) {
  return (returnLargest(num1, num2) * 2);

}

function divideBiggerNumByThree(num1, num2) {
  return (returnLargest(num1, num2) / 3);
}

function eatMostTacos(sum1, sum2) {
  let tacos = returnLargest(sum1, sum2);
  return `I ate ${tacos} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  smallDog = returnLargest(weight1, weight2);
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
