// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  let num = 0;
  let reverseStr = "";
  let base16 = {"a": 10,
                "b": 11,
                "c": 12,
                "d": 13,
                "e": 14,
                "f": 15}

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  if (str.startsWith("0b")) {
    for (let i = 0; i < reverseStr.length; i++) {
      if (reverseStr[i] === 'b') {
        return num
      } else {
        num += ((2 ** i) * Number(reverseStr[i]));
      }
    }
  }

  if (str.startsWith("0x")) {
    for (let i = 0; i < reverseStr.length; i++) {
      if(reverseStr[i] === 'x') {
        return num;
      } else {
        let val = ""
        if (reverseStr[i] in base16) {
          val = base16[reverseStr[i]];
        } else {
          val = Number(reverseStr[i])
        }
        num += ((16 ** i) * val);
      }
    }

  }
};

/******************************************************************************/

// console.log(convertToBase10('0b1100')); // 12
// console.log(convertToBase10('0b0101')); // 5
// console.log(convertToBase10('0b1000')); // 8
// console.log(convertToBase10('0b0111')); // 7

// console.log('––––––');

// console.log(convertToBase10('0b10100101')); // 165
// console.log(convertToBase10('0b11111111')); // 255
// console.log(convertToBase10('0b01010101')); // 85
// console.log(convertToBase10('0b00110011')); // 51

// console.log('––––––');

// console.log(convertToBase10('0xf')); // 15
// console.log(convertToBase10('0xfa')); // 250
// console.log(convertToBase10('0x1234')); // 4660
// console.log(convertToBase10('0xc9a1')); // 51617
// console.log(convertToBase10('0xbf12')); // 48914

module.exports = convertToBase10;
