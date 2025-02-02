// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
  const divideBy2 = num => {
    if (num === 0) {
      return ""
    }
    if (num % 2 === 0) {
      return divideBy2(num/2) + "0"
    }
    if (num % 2 === 1) {
      return divideBy2(Math.floor(num/2)) + "1"
    }
  }

  if (element === 0) {
    return "0b00"
  } else if (element === 1) {
    return "0b01"
  } else {
    return "0b" + divideBy2(element);
  }
};

/******************************************************************************/

// console.log(convertToBase2(0)); // 0b0
// console.log(convertToBase2(1)); // 0b1
// console.log(convertToBase2(2)); // 0b10
// console.log(convertToBase2(3)); // 0b11
// console.log(convertToBase2(4)); // 0b100
// console.log(convertToBase2(65)); // 0b1000001
// console.log(convertToBase2(256)); // 0b100000000
// console.log(convertToBase2(123)); // 0b1111011
// console.log(convertToBase2(1000)); // 0b1111101000

// console.log('––––––');

// console.log(convertToBase2('0xf')); // 0b1111
// console.log(convertToBase2('0xfa')); // 0b11111010
// console.log(convertToBase2('0x1234')); // 0b1001000110100
// console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
// console.log(convertToBase2('0xbf12')); // 0b1011111100010010

module.exports = convertToBase2;
