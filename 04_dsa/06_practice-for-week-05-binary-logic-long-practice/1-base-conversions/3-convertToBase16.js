// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {

  b16 = { 0:  '0',
          1:  '1',
          2:  '2',
          3:  '3',
          4:  '4',
          5:  '5',
          6:  '6',
          7:  '7',
          8:  '8',
          9:  '9',
          10: 'a',
          11: 'b',
          12: 'c',
          13: 'd',
          14: 'e',
          15: 'f',
  }

  const divideBy16 = (num) => {
    let root = num / 16
    let remainder = num % 16

    if (num === 0 ) {
      return ""
    } else if (num in b16) {
      return b16[num]
    } else {
      return divideBy16(Math.floor(num / 16)) + b16[Math.floor(num % 16)]
    }
  }

  if (element === 0) {
    return "0x0"
  } else {
    return "0x" + divideBy16(element);
  }
}

/******************************************************************************/

console.log(convertToBase16(0)); // 0x0
console.log(convertToBase16(1)); // 0x1
console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8
console.log(convertToBase16(4165)); // 0x1045

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
