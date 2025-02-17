let title = (functionName) => {
    console.log("")
    console.log("=================")
    console.log(functionName)
    console.log("=================")
}

//1 - logBetween
// Define a function logBetween(lowNum, highNum) that will return an array
// from lowNum to highNum, inclusive. Inclusive means that the range includes
// lowNum and highNum.

title("logBetween");

let logBetween = (num1, num2) => {
    let arr = new Array
    for (let i = num1; i <= num2; i++) {
        arr.push(i);
    }
    return arr;
}

//Examples:
console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
console.log(logBetween(14, 6));  // => []
console.log(logBetween(4, 6));  // => [4, 5, 6]


// 2 - logBetweenStepper
// Write a function logBetweenStepper(min, max, step) that takes in
// three numbers as parameters. The function should return an array
// of numbers between min and max at step intervals.

// Examples:

title("logBetweenStepper");

let logBetweenStepper = (num1, num2, step) => {
    let arr = new Array;
    for (let i = num1; i <= num2; i+=step) {
        arr.push(i);
    }
    return arr;
}

console.log(logBetweenStepper(5, 9, 1))// => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)) // => [-10, -5, 0, 5, 10, 15]


// 3 - printReverse
// Write a function printReverse(min, max) that returns an array of all numbers
// from max to min (exclusive), in reverse order.

// Examples:

title("printReverse")

let printReverse = (min, max) => {
    let arr = new Array;
    for (let i = max-1; i > min; i--) {
        arr.push(i);
    }
    return arr;
}
console.log(printReverse(13, 18)) // => [17, 16, 15, 14]
console.log(printReverse(90, 94)) // => [93, 92, 91]

// 4 - fizzBuzz
// Define a function fizzBuzz(max) that takes a number and
// returns an array of every number from 0 to max that is
// divisible by either 3 or 5, but not both.

// Examples:

title("fizzBuzz")

let fizzBuzz = (num) => {
    let arr = new Array;

    for (let i = 1; i < num; i++) {
        if (((i % 5 === 0) || (i % 3 === 0)) && !((i % 5 === 0) && (i % 3 === 0))) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]


// 5 - isPrime
// Define a function isPrime(number) that returns true if number is prime.
// Otherwise, false. Assume number is a positive integer.

title("isPrime");

let isPrime = (num) => {
    if (num === 1) return false

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Examples:
console.log(isPrime(2));  // => true
console.log(isPrime(10));  // => false
console.log(isPrime(11));  // => true
console.log(isPrime(9));  // => false
console.log(isPrime(2017));  // => true

// 6 - maxValue
// Write a function maxValue(array) that returns the
// largest value in array. Assume array is an array of numbers.

title("maxValue");

let maxValue = (arr) => {
    let val = null;
    for (let i = 0; i < arr.length; i++) {
        if (val === null || arr[i] > val) val = arr[i]
    }
    return val;
}

// Examples:
console.log(maxValue([12, 6, 43, 2]));  // => 43
console.log(maxValue([]));  // => null
console.log(maxValue([-4, -10, 0.43]));  // => 0.43

// 7 - myIndexOf
// Write a function myIndexOf(array, target) that takes in an
// array of numbers and a target number as arguments. It should return
// the index value of the target if it is present in the array
// or -1 if it is not present.
// CONSTRAINT: Do not use the indexOf or includes method

title("myIndexOf")

let myIndexOf = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            return i;
        }
    }
    return -1;
}

// Examples:
console.log(myIndexOf([1,2,3,4],4)); // => 3
console.log(myIndexOf([5,6,7,8],2)); // => -1

//8 - factorArray
// Write a function factorArray(array, number) that takes in an array of numbers and a number and returns an array of all the factors.

// Examples:

title("factorArray")

let factorArray = (arr,num) => {
    return arr.filter((val) => {
        return num % val === 0;
    })
}


console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]
console.log(factorArray([2,3,4,5,6],35)) // => [5]
console.log(factorArray([10,15,20,25],5)) // => []

//9 - oddRange
// Write a function oddRange(end) that takes in a number and returns an array containing all positive odd numbers up to end.

// Examples:

title("oddRange")

let oddRange = (num) => {
    let arr = new Array;
    for (let i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));  // => [ 1, 3, 5 ]

//10 - reverseHyphenString
// Write a function reverseHyphenString(string) that takes in a hyphenated string and returns a the hyphenated string reversed.

title("reverseHyphenString")

let reverseHyphenString = (string) => {
    return string.split("-").reverse().join("-");
}

// Examples:
console.log(reverseHyphenString("Go-to-the-store")) // => "store-the-to-Go"
console.log(reverseHyphenString("Jump,-jump-for-joy")) // => "joy-for-jump-Jump,"


//11 - intersect
// Write a function intersect(arr1, arr2) that takes in two arrays and
// returns a new array containing the elements common to both arr1 and arr2.
title('intersect');
let intersect = (arr1, arr2) => {
    return arr1.filter( (val) => {
        return arr2.includes(val);
    });
}

// Examples:
console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])) // => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])) // => []

//12 - mirrorArray
// Write a function mirrorArray(array) that takes in an array as an argument
// and returns a new array "mirrored" as shown in the examples:
title('mirrorArray');
let mirrorArray = (arr) => {
    let newArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return arr.concat(newArr);
}

// Examples:
console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

//13 - abbreviate
// Write a function abbreviate(sentence) that takes in a sentence string and
// returns a new sentence where words longer than 4 characters have their vowels removed.
// Assume the sentence has all lowercase characters. Feel free to use the array
// below in your solution: const vowels = ['a', 'e', 'i', 'o', 'u'];
title('abbreviate');

let abbreviate = (sentence) => {
    const vowels = ['a','e','i','o','u']

    let removeVowels = (word) => {
        let wordNoVowels = ""
        for (let i = 0; i < word.length; i++) {
            if (!vowels.includes(word[i])) {
                wordNoVowels += word[i];
            }
        }
        return wordNoVowels
    }

    let sentenceArr = sentence.split(" ");

    sentenceArr = sentenceArr.map((word) => {
        if (word.length >= 5) {
            return removeVowels(word);
        } else {
            return word;
        }
    });

    return sentenceArr.join(" ");
}

// Examples:
console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'

//14 - adults
// Write a function adults(people) that takes in an array of person objects.
// The function should return an array containing the names of those who
// have an age of 18 or higher.

// Example:

title('adults');
let adults = (adultArr) => {
    let filteredArr = adultArr.filter((adultObj) => {
        return adultObj.age >= 18;
    })

    return filteredArr.map((adultObj) => {
        return adultObj.name;
    })
}

const ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

console.log(adults(ppl)); // => [ 'John', 'Jane' ]

// 15 - countScores
// Write a function countScores(people) that takes in an array of score objects,
// people, as its input. A score object, people, has two key-value pairs:
// a name (string) and a score (number). countScores(people) should return
// an object that has key-value pairs where each name is a key and the
// value is their total score.

title('countScores');
let countScores = (arr) => {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].name
        let val = arr[i].score
        obj[name] = (obj[name] || 0) + val;
    }
    return obj
}

// // Example 1:
const ppl2 = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score : 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 }
  ];
  console.log(countScores(ppl2)); // => { Anthony: 2, Fred: 10, Winnie: 12 }

  // // Example 2
  const peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 }
  ];

console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }


// 16 - firstNPrimes
// Using the isPrime function you made, write a function firstNPrimes(n)
// that returns an array of the first n prime numbers.

// Examples:
let firstNPrimes = (num) => {
    let arr = [];
    let val = 1;
    while (arr.length < num) {
        if (isPrime(val)) {
            arr.push(val);
        }
        val++;
    }
    return arr;
}

title('firstNPrimes')
console.log(firstNPrimes(0));  // => []
console.log(firstNPrimes(1));  // => [2]
console.log(firstNPrimes(4));  // => [2, 3, 5, 7]

// 17 - peakFinder
// Write a function peakFinder(array) that takes in an array of numbers.
// It should return an array containing the indices of all the peaks.
// A peak is an element that is greater than both of its neighbors.
// If it is the first or last element, it is a peak if it is greater than its one neighbor.
// Assume the array has a length of at least 2.

// Examples:
title('peakFinder')
let peakFinder = (array) => {
    let peaks = [];
    for (let i = 0; i < array.length; i++) {
        if ((i === 0) && (array[i] > array[i+1])) {
            peaks.push(i);
        } else if ((i === array.length - 1) && (array[i] > array[i-1])) {
            peaks.push(i);
        } else {
            if ((array[i] > array[i-1]) && (array[i] > array[i+1])) {
                peaks.push(i);
            }
        }
    }
    return peaks;
}

console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]


// 18 - divisibleByThreePairSum
// Write a function divisibleByThreePairSum(array) that takes an array of numbers.
// It should return an array of all the pairs of indices, whose elements sum to a multiple of three.

// Examples:

title('divisibleByThreePairSum')

let divisibleByThreePairSum = (array) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if ((array[i] + array[j]) % 3 === 0)  {
                newArr.push([i,j]);
            }
        }
    }
    return newArr;
}

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]); // arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]); // arr2 // => [[1, 3]]
console.log(arr1);
console.log(arr2);


// 19 - zipArray
// Write a function zipArray(arr1, arr2) that takes in two arrays and "zips" them together
// by returning a single 2D-array. Assume that both input arrays have the same length.
title('zipArray');
let newArray = [];
let zipArray = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        newArray.push( [array1[i], array2[i]] )
    }
    return newArray;
}

// Examples:
const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
console.log(result);
// result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]


// 20 - twoDimensionalTotal
// Write a function twoDimensionalTotal(array) that takes in a 2D array
// of numbers and returns the total sum of all elements. Examples:

title('twoDimensionalTotal');
let twoDimensionalTotal = (array) => {
    let sum = 0;
    array.forEach((subArray) => {
        subArray.forEach( (val) => {
            sum += val;
        });
    });
    return sum;
}

const arr1_2dtotal = [
  [5, 2, 5, 3],
  [12, 13],
];

console.log(twoDimensionalTotal(arr1_2dtotal));  // => 40

const arr2_2dtotal = [
  [2],
  [1, 9],
  [1, 1, 1]
]

console.log(twoDimensionalTotal(arr2_2dtotal));  // => 15


// 21 - countInnerElement
// Write a function countInnerElement(arr) that takes in a 2-D array of elements.
// Each element of arr is a sub array that contains multiple elements.
// The number of elements contained in each sub array are not the same.
// You can assume each sub array contains at least one element.
// You should return an object that counts how many times each element in each sub array repeats.

// Examples:

title('countInnerElement')
let countInnerElement = (array) => {
    let obj = {}
    array.forEach((subArray) => {
        subArray.forEach((val) => {
            obj[val] = (obj[val] || 0) + 1;
        });
    });
    return obj
}

const arr1_countInnerElement = [
  [1, 2, 4, 5],
  [2, 7, 4],
  [1, 4, 5, 2, 7]
]

console.log(countInnerElement(arr1_countInnerElement))  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

const arr2_countInnerElement = [
  ['a','b','c','d'],
  ['a','b'],
  ['a','c','d','a']
]

console.log(countInnerElement(arr2_countInnerElement))  // => {a: 4, b: 2, c: 2, d: 2}

// 22 - twoDiff
// Write a function twoDiff(array), given an array of numbers, return a 2-D array,
// where each of the sub array are indices of the two numbers such that their difference is 2.
// If there are no such numbers, return an empty array.

// NOTE: The pairs are unique. HINT: Account for negative difference too!

title('twoDiff')
let twoDiff = (array) => {
    newArr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j< array.length; j++) {
            if (Math.abs(array[i] - array[j]) === 2) {
                newArr.push([i,j]);
            }
        }
    }
    return newArr;
}


// Examples:
console.log(twoDiff([2, 3, 4, 6, 1, 7]))  // => [[0, 2], [1, 4], [2, 3]]
console.log(twoDiff([0, 2, 4, 3, 5]))  // => [[0, 1], [1, 2], [3,4]]
console.log(twoDiff([]))  // => []


// 23 - arrayDiff
// Write a function arrayDiff(arr1, arr2) that takes in two arrays.
// The function should return a new array, containing the elements of arr1 that are not also in arr2.
// Note: Assume both arrays have unique elements.

title('arrayDiff')
let arrayDiff = (array1, array2) => {
    return array1.filter((val) => {
        return !array2.includes(val);
    });
}

// Examples:
const array1 = [1, 23, 2, 43, 3, 4]
const array2 = [3, 23]
console.log(arrayDiff(array1, array2))  // => [1, 2, 43 ,4]

const array3 = ['a', 'ab', 'c', 'd', 'c']
const array4 = ['d']
console.log(arrayDiff(array3, array4))  // => ['a', 'ab', 'c', 'c']


// 24 - valueCounter
// Write a function valueCounter(obj, val) that takes in an object and a value,
// the function should return the number of times val repeats as a value in obj.

// Examples:
title('valueCounter')
let valueCounter = (obj, val) => {
    let valArr = Object.values(obj);

    return valArr.reduce((acc, cur) => {
        if (val === cur) {
            acc += 1;
        }
        return acc;
    }, 0);
}

const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
console.log(valueCounter(obj1, 'Anne'))  // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
console.log(valueCounter(obj2, 88))  // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
console.log(valueCounter(pairs, 'Roman'))  // => 2


// 25 - elementCount
// Write a function elementCount(array) that returns a object.
// Each key corresponds to an element in the array and the value corresponds
// to how many times that element appears in the array.

title('elementCount')
let elementCount = (arr) => {
    let obj = {}
    arr.forEach( (val) => {
        obj[val] = (obj[val] || 0) + 1;
    });
    return obj;
}

// Example:

console.log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }

// 26 - nextTwoPrimes
// Write a function nextTwoPrimes(num) that takes in a number num and
// returns the next two prime numbers greater than num.

// Examples:
title('nextTwoPrimes')

let nextTwoPrimes = (num) => {
    nextTwo = [];

    while (nextTwo.length < 2) {
        num++;
        if (isPrime(num)) {
            nextTwo.push(num);
        }
    }
    return nextTwo;
}


console.log(nextTwoPrimes(2));  // => [ 3, 5 ]
console.log(nextTwoPrimes(3));  // => [ 5, 7 ]
console.log(nextTwoPrimes(7));  // => [ 11, 13 ]
console.log(nextTwoPrimes(8));  // => [ 11, 13 ]
console.log(nextTwoPrimes(20));  // => [ 23, 29 ]
console.log(nextTwoPrimes(97));  // => [ 101, 103 ]


// 27 - pairProduct
// Write a function pairProduct(arr, num) that accepts an array of numbers,
// arr, and a target number, num. It should return pairs of indices whose
// elements multiply to num. No pair should appear twice in the result.
// CONSTRAINT: Use only while loops. No for loops.

title('pairProduct')
let pairProduct = (array, num) => {
    let newArr = [];

    let i = 0;
    while (i < array.length) {
        let j = i+1;
        while (j < array.length) {
            if (array[i] * array[j] === num) {
                newArr.push([i,j]);
            }
            j++;
        }
        i++;
    }
    return newArr;
}

// Examples:
console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]

// 28 - twoDimensionalSize
// Write a function twoDimensionalSize(array) that takes in a 2D-array as an argument.
// The function should return the total number of elements in the 2D-array.

// Examples:
title('twoDimensionalSize')
let twoDimensionalSize = (array) => {
    let count = 0;
    array.forEach((subArray) => {
        count += subArray.length;
    });
    return count;
}

const arr1_twoDimensionalSize = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];
console.log(twoDimensionalSize(arr1_twoDimensionalSize));  // => 9

const arr2_twoDimensionalSize = [
  ['a'],
  ['b', 'c', 'd', 'e']
];
console.log(twoDimensionalSize(arr2_twoDimensionalSize));  // => 5

// 29 - longWordCount
// Write a function longWordCount(string) that takes in a
// string and returns the number of words longer than 7 characters.

title('longWordCount');
let longWordCount = (string) => {
    let wordArr = string.split(" ");
    let count = 0;
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length > 7) {
            count++;
        }
    }
    return count;
}

// Examples:

console.log(longWordCount(""));  // => 0
console.log(longWordCount("short words only"));  // => 0
console.log(longWordCount("one reallylong word"));  // => 1
console.log(longWordCount("two reallylong words inthisstring"));  // => 2
console.log(longWordCount("allwordword longwordword wordswordword"));  // => 3
console.log(longWordCount("seventy schfifty five"));  // => 1

// 30 - factorial
// Write a function factorial(n), that returns the factorial of the number n. For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24.

// Examples:
title('factorial');
let factorial = (num) => {
    if (num === 1) {
        return num;
    }

    return num * factorial(num - 1);
}


console.log(factorial(1));  // => 1
console.log(factorial(4));  // => 24
console.log(factorial(5));  // => 120
console.log(factorial(10));  // => 3628800

// 31 - lcm
// Write a function lcm(num1, num2) that returns the lowest number
// which is a multiple of both num1 and num2.

title('lcm')
let lcm = (num1, num2) => {
    let higher = (num1 > num2) ? num1 : num2;

    for (let i = higher; i <= num1*num2; i+=higher) {
        if ((i % num1 === 0) && (i % num2 === 0)) {
            return i;
        }
    }
}

// Examples:

console.log(lcm(2, 3));  // => 6
console.log(lcm(6, 10));  // => 30
console.log(lcm(24, 26));  // => 312

// 32 - hipsterfyWord
// Write a function hipsterfyWord(word) that takes takes in a string and
// returns the string with the last vowel removed. 'y' is not a vowel.

// Examples:
title('hipsterfyWord');

let hipsterfyWord = (word) => {
    let vowels = 'AEIOUaeiou';

    for (let i = word.length-1; i >= 0; i--) {
        let char = word[i];
        if (vowels.includes(char)) {
            return word.slice(0,i) + word.slice(i+1);
        }
    }
}

console.log(hipsterfyWord('proper')) // => 'propr'
console.log(hipsterfyWord('tonic')) // => 'tonc'
console.log(hipsterfyWord('PANTHER')) // => 'PANTHR'
console.log(hipsterfyWord('BACKWARDS')) // => 'BACKWRDS'

// 33 - hipsterfy
// Write a function hipsterfy(sentence) that takes takes a string containing
// several words as input. Remove the last vowel from each word.
// 'y' is not a vowel.

// Examples:

title('hipsterfy');

let hipsterfy = sentence => sentence.split(' ').map(word => hipsterfyWord(word)).join(" ");

console.log(hipsterfy("proper"));  // => "propr"
console.log(hipsterfy("proper tonic panther"));  // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana"));  // => "towl flickr banan"
console.log(hipsterfy("runner anaconda"));  // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries"));  // => "turtl cheeseburgr fris"

// 34 - objectToString
// Write a function objectToString(count) that takes in a char count
// object and returns a string representing the counts of each character.

title('objectToString');
let objectToString = (obj) => {
    let str = "";
    for (let key in obj) {
        let val = obj[key];
        for (let i = 1; i <= val; i++) {
            str += String(key);
        }
    }
    return str;
}


// Examples:
console.log(objectToString({ a : 2, b: 4, c: 1 })); // => 'aabbbbc'
console.log(objectToString({ b: 1, o: 2, t: 1 })); // => 'boot'


// 35 - shortestWord
// Write a function shortestWord(sentence) that returns the shortest word
// of a sentence. You can assume that the words of the sentence
// all have different lengths.

// Examples:

title('shortestWord');
let shortestWord = (sentence) => {
    let shortest;
    let wordArr = sentence.split(" ");
    wordArr.forEach( (word) => {
        if (shortest === undefined || word.length < shortest.length) {
            shortest = word;
        }
    })
    return shortest;
}

console.log(shortestWord('app academy is cool')) // => 'is'
console.log(shortestWord('programming bootcamp')) // => 'bootcamp'

// 36 - greatestCommonFactor
// Write a function greatestCommonFactor(num1, num2) that returns the
// largest number that is divides both num1 and num2.

// Examples:
title('greatestCommonFactor');
let greatestCommonFactor = (num1, num2) => {
    let lower = num1 < num2 ? num1 : num2;

    for (let i = lower; i >= 1; i--) {
        if ((num1 % i === 0) && (num2 % i === 0)) {
            return i;
        }
    }
}

console.log(greatestCommonFactor(15, 25)) // => 5
console.log(greatestCommonFactor(16, 24)) // => 8
console.log(greatestCommonFactor(7, 11))// => 1

// 37 - isPassing
// Write a function isPassing(assessments) that takes in an
// array of assessment objects. The function should return true
// if the average assessment score is at least 70.
// It should return false otherwise.

title('isPassing');
let isPassing = (assessments) => {
    let avg = assessments.reduce((acc, cur) => {
        return acc += cur.score;
    }, 0) / assessments.length;

    return avg >= 70;
}

// Examples:
const assessments1 = [
  { number: 1, score: 60 },
  { number: 2, score: 90 },
  { number: 3, score: 80 },
  { number: 4, score: 100 },
  { number: 5, score: 85 }
];

console.log(isPassing(assessments1)) // => true
const assessments2 = [
  { number: 1, score: 60 },
  { number: 2, score: 20 },
  { number: 3, score: 45 }
];

console.log(isPassing(assessments2)) // => false


// 38 - valueConcat
// Write a function valueConcat(array, obj) that takes in an array and object
// The function should return a new array where each element is concatenated
// with it's corresponding value from the object.


title('valueConcat');

let valueConcat = (arr, obj) => {
    return arr.map((val) => {
        return val = val + (obj[val] || "");
    })
}
// Examples:
const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
console.log(valueConcat(arr, obj)) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]
console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })) // => [ 'a', 'b2', 'c3' ]


// 39 - threeInARow
// Write a function threeInARow(arr) that takes in an array of numbers
// and returns true if the array contains 3 of the same number
// consecutively. The function should return false otherwise.
title('threeInARow')

let threeInARow = (arr) => {
    for (let i = 0; i < arr.length - 2; i++) {
        if ((arr[i] === arr[i+1]) && (arr[i] === arr[i+2])) {
            return true;
        }
    }
    return false;
}

// Examples:
console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));  // => true;
console.log(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;

// 40 - variableNameify
// Write a function variableNameify(words) that takes in an array of words.
// The function should return a string representing the variable name
// obtained by combining the words and captitalizing them in mixCased style.
title('variableNameify')

let variableNameify = (arr) => {
    let sanitize = (word) => {
        let chars = word.split("");

        return chars.map((char) => {
            return char.toLowerCase();
        }).join("");

    }

    let name = sanitize(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        let sanitized = sanitize(arr[i]);
        name += sanitized.slice(0,1).toUpperCase() + sanitized.slice(1);
    }

    return name;
};

// Examples:
console.log(variableNameify(['is', 'prime'])) // => 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel'])) // => 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE'])) // => 'maxValue'

// 41 - threeIncreasing
// Write a function threeIncreasing(arr) that takes in an array of numbers
// and returns true if the array contains 3 consecutive numbers in increasing order.
// The function should return false otherwise. Note that the 3 consecutive numbers
// should be increasing by 1, so the the second number is 1 greater than the first,
// and the third number is 1 greater than the second.

title('threeIncreasing')
let threeIncreasing = (arr) => {
    for (let i = 0; i < arr.length - 2; i++) {
        if ((arr[i+1] - arr[i] === 1) && (arr[i+2] - arr[i+1] === 1)) {
            return true;
        }
    }
    return false;
}

// Examples:
console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));  // => true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));  // => false


// 42 - reverse2D
// Write a function reverse2D(array) that takes in a 2D array of strings.
// The function should return a string representing the elements of the
// array in reverse order.

title("reverse2D");
let reverse2D = (array) => {
    let string = ""
    for (let i = array.length - 1; i >= 0; i--) {
        let subArray = array[i];
        for (let j = subArray.length-1; j >= 0; j--) {
            string += subArray[j];
        }
    }
    return string;
}

// Examples:
const arr1_reverse2D = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f'],
  ['g', 'h', 'i']
];

console.log(reverse2D(arr1_reverse2D)); // => 'ihgfedcba'
const arr2_reverse2D = [
  ['Julian', 'Matt', 'Mike'],
  ['Oscar', 'Patrick']
];
console.log(reverse2D(arr2_reverse2D)) // => 'PatrickOscarMikeMattJulian'


// 43 - reverb
// Write a function reverb(word) that takes in a word string and
// returns the word with all characters after the last vowel repeated.
title('reverb');
let reverb = (word) => {
    for (let i = word.length-1; i >= 0; i--) {
        if ("AEIOUaieou".includes(word[i])) {
            return word + word.slice(i);
        }
    }
    return word;
}

// Examples:
console.log(reverb('running'));  // => 'runninging'
console.log(reverb('wild'));  // => 'wildild'
console.log(reverb('debugged'));  // => 'debuggeded'
console.log(reverb('my'));  // => 'my'

// 44 - countRepeats
// Write a function countRepeats(string) that takes in a string and
// returns the number of letters that appear more than once in the string.
// You may assume the string contains only lowercase letters.
// Count the number of letters that repeat, not the number of times
// they repeat in the string.
title('countRepeats');
let countRepeats = (word) => {
    let obj = {};
    word.split("").forEach((char) => {
        obj[char] = (obj[char]|| 0) + 1;
    });

    let count = 0;
    for (key in obj) {
        if (obj[key] > 1) {
            count++
        }
    }
    return count;
}

// Examples:
console.log(countRepeats('calvin')); // => 0
console.log(countRepeats('caaaalvin')); // => 1
console.log(countRepeats('pops')); // => 1
console.log(countRepeats('mississippi')); // => 3
console.log(countRepeats('hellobootcampprep')); // => 4

// 45 - pairsToString
// Write a function pairsToString(arr) that takes in an array of pairs.
// The function should return a string corresponding to the pairs.

title('pairsToString');
let pairsToString = (arr) => {
    let str = "";
    arr.forEach(( pair ) => {
        for (let i = pair[1]; i > 0; i--) {
            str += pair[0];
        }
    });
    return str;
}

// Examples:
const array1_pairsToString = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];
console.log(pairsToString(array1_pairsToString));  // => 'aaabcc'

const array2_pairsToString = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];
console.log(pairsToString(array2_pairsToString));  // => 'food!'


// 46 - countAdjacentSums
// Write the function countAdjacentSums(arr, n) that takes an array and number.
// It should count the number of times that two adjacent numbers in an array
// add up to n.

title('countAdjacentSums')

let countAdjacentSums = (array, val) => {
    let count = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] + array[i+1] === val) {
            count++;
        }
    }
    return count;
}

// Examples:
console.log(countAdjacentSums([1, 5, 1], 6)) // => 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)) // => 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)) // => 3

// 47 - signFlipCount
// Write a function signFlipCount(nums) that takes in an array of numbers
// as arguments. The function should return the number of times
// adjacent numbers in the array switch signs from positive to negative
// or vice versa. The number 0 is neither positive nor negative.

title('signFlipCount');
let signFlipCount = (array) => {
    let sign = "";
    let count = 0;
    array.forEach((val) => {
        if (val > 0 && sign !== 'p') {
            sign = "p";
            count++;
        }

        if (val < 0 && sign !== 'n') {
            sign = 'n'
            count++;
        }
    });

    return count-1;
}

// Examples:
console.log(signFlipCount([5, 6, 10, 3])); // => 0
console.log(signFlipCount([-12, 0, -3, -5])); // => 0
console.log(signFlipCount([-12, 10, -3, -5])); // => 2
console.log(signFlipCount([1, -2, -3, -4])); // => 1
console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3

// 48 - powerSequence
// Write a function powerSequence(base, length) that takes in two numbers,
// base and length. The function should return an array containing
// a power sequence with the given length. Assume that the length is at least 1.

// The first number of a power sequence begins with base.
// The second number of the sequence is the product between the
// first number and the base. The third number of the sequence is the
// product between the second number and the base...

title('powerSequence')
let powerSequence = (num1, num2) => {
    let arr = [num1];
    for (let i = 1; i < num2; i++) {
        arr.push(arr[i-1] * num1);
    }
    return arr;
}

// Examples:
console.log(powerSequence(3, 4));  // => [ 3, 9, 27, 81 ]
console.log(powerSequence(2, 6));  // => [ 2, 4, 8, 16, 32, 64 ]
console.log(powerSequence(8, 3));  // => [ 8, 64, 512 ]

// 49 - collapseString
// Write a function collapseString(str) that takes in a string as an
// argument. The function should return the string where 'streaks' of
// consecutive characters are collapsed to a single character.
// Hint: use the keyword continue

title('collapseString');
let collapseString = (str) => {
    let string = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i-1]) {
            continue
        } else {
            string+=str[i];
        }
    }
    return string;
}

// Examples:
console.log(collapseString('apple')); // => 'aple'
console.log(collapseString('AAAaalviiiiin!!!')); // => 'Aalvin!'
console.log(collapseString('hello   app academy')); // => 'helo ap academy'

// 50 - oddWordsOut
// Write a function oddWordsOut(sentence) that takes in a sentence string
// and returns the sentence where words with an odd number of characters are removed.
title('oddWordsOut');

let oddWordsOut = (sentence) => {
    return sentence.split(" ").filter( (word) => {
        return (word.length % 2 === 0);
    }).join(" ");
}

// Examples:
console.log(oddWordsOut('go to the store and buy milk'));  // => 'go to milk'
console.log(oddWordsOut('what is the answer'));  // => 'what is answer'

// 51 - mindPsAndQs
// Write a function mindPsAndQs(str) that accepts a string of uppercase letters.
// The function should return the length of the longest consecutive streak of the letters 'P' and 'Q'.

// Hint: Use two variables. One to track the length of the current streak and another to
// track the length of the longest streak so far. Think of using a strategy similar to maxValue.
// This can also be solved using a single loop!

// Nested loops not needed!

title('mindPsAndQs')
let mindPsAndQs = (word) => {
    let currentStreak = 0;
    let bestStreak = 0;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];

        if ((char === 'P') || (char === 'Q')) {
            currentStreak++;
            if (currentStreak > bestStreak) {
                bestStreak = currentStreak;
            }
        } else {
            currentStreak = 0;
        }
    }
    return bestStreak;
}

// Examples:
console.log(mindPsAndQs('BOOTCAMP'));  // => 1
console.log(mindPsAndQs('APCDQQPPC'));  // => 4
console.log(mindPsAndQs('PQPQ'));  // => 4
console.log(mindPsAndQs('PPPXQPPPQ'));  // => 5

// 52 - commonFactors
// Write a function commonFactors(num1, num2) that returns an array that
// contains the common factors between both numbers. A factor is a number that
// divides another number with no remainder.

title('commonFactors');
let commonFactors = (num1, num2) => {
    let lower = (num1 < num2) ? num1 : num2;
    let arr = [];
    for (let i = 1; i <= lower; i++) {
        if ((num1 % i === 0) && (num2 % i === 0)) {
            arr.push(i);
        }
    }
    return arr;
}

// Examples:
console.log(commonFactors(12, 50));  // => [ 1, 2 ]
console.log(commonFactors(6, 24));  // => [ 1, 2, 3, 6 ]
console.log(commonFactors(11, 22));  // => [ 1, 11 ]
console.log(commonFactors(45, 60));  // => [ 1, 3, 5, 15 ]

// 53 - commonPrimeFactors
// Write a function commonPrimeFactors(num1, num2) that takes in two
// numbers as arguments and returns an array of all prime factors that are
// common between the two numbers. A factor is a number that divides another
// number without resulting in a remainder.

title('commonPrimeFactors');
let commonPrimeFactors = (num1, num2) => {
    let commonFactorArray = commonFactors(num1, num2);

    return commonFactorArray.filter((val) => {
        return isPrime(val);
    });
}

// Examples:
console.log(commonPrimeFactors(12, 50));  // => [ 2 ]
console.log(commonPrimeFactors(6, 24));  // => [ 2, 3 ]
console.log(commonPrimeFactors(11,22));  // => [ 11 ]
console.log(commonPrimeFactors(45, 60));  // => [ 3, 5 ]

// 54 - splitHalfArray
// Write a function splitHalfArray(array) that takes in an array as an
// argument and returns two halves of that array split in the middle.
// If the array has an odd number of elements, then the middle element
// should be excluded.

title('splitHalfArray')
let splitHalfArray = (array) => {
    let len = array.length;

    if (len % 2 === 0) {
        return [array.slice(0, len/2), array.slice(len/2)]
    } else {
        return [array.slice(0, len/2), array.slice(len/2 + 1)]
    }
}

// Examples:
console.log(splitHalfArray([1, 2, 3, 4, 5]));
  // => [ [ 1, 2 ], [ 4, 5 ] ]

console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

// 55 - threeUniqueVowels
// Write a function threeUniqueVowels(string) that takes in a string
// and returns true if the string contains at least three different vowels.


title('threeUniqueVowels')
let threeUniqueVowels = (word) => {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    VOWELS.forEach((vowel) => {
        if (word.includes(vowel)) {
            count++;
        }
    })

    return count >= 3;
}

// Examples:
console.log(threeUniqueVowels('delicious'));  // => true
console.log(threeUniqueVowels('the bootcamp'));  // => true
console.log(threeUniqueVowels('bootcamp'));  // => false
console.log(threeUniqueVowels('dog'));  // => false
console.log(threeUniqueVowels('go home'));  // => false

// 56 - vowelShift
// Write a function vowelShift(sentence) that takes in a sentence string.
// The function should return a new sentence, where every vowel is
// replaced with the next vowel in the alphabet.

title('vowelShift')
let vowelShift = (text) => {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];

    let phrase = "";
    for (let i = 0; i < text.length; i++) {
        if (VOWELS.includes(text[i])) {
            phrase += VOWELS[(VOWELS.indexOf(text[i]) + 1) % VOWELS.length]
        } else {
            phrase += text[i];
        }
    }
    return phrase
}
// Examples:
console.log(vowelShift('bootcamp'));  // => 'buutcemp'
console.log(vowelShift('hello world'));  // => 'hillu wurld'
console.log(vowelShift('on the hunt'));  // => 'un thi hant'

// 57 - hasSymmetry
// Write a function hasSymmetry(array) that takes in an array.
// The function should return true if the array has symmetry,
// false otherwise. For an array to have symmetry, it should be the same
// forwards and backwards.

// TIP: In JavaScript, it is not possible to compare arrays for
// equality with ===. In other words, [1, 2, 3] === [1, 2, 3] evaluates to false.

title('hasSymmetry')
let hasSymmetry = (array) => {
    let mid = Math.round(array.length / 2);

    let reverseArr = [];
    for (let i = array.length-1; i >= mid-1; i--) {
        reverseArr.push(array[i]);
    }
    for (let j = 0; j < reverseArr.length; j++) {
        if (array[j] !== reverseArr[j]) {
            return false;
        }
    }
    return true;
}

// Examples:
console.log(hasSymmetry([1, 2, 3, 3, 2, 1])) // => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])) // => false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])) // => true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])) // => false

// 58 - evenSumArray
// Write a function evenSumArray(array) that takes in an array of
// numbers and returns a new array where each num is replaced with
// the sum of all even numbers less than or equal to that num.

title('evenSumArray');

let evenSumArray = (array) => {
   return array.map((val) => {
        let sum = 0;
        for (let i = val; i > 0; i--) {
            if (i % 2 === 0) {
                sum+=i;
            }
        }
        return sum;
    });
}

// Examples:
console.log(evenSumArray([6, 7, 5])) // => [ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5])) // => [ 2, 20, 2, 6 ]

// 59 - numsToWords
// Write a function numsToWords(numString) that takes in a
// string representing a number. The function should return a
// new string where each digit character is replaced with it's
// "word" representation. Assume the input string only contains numeric characters.

title('numsToWords');
let numsToWords = (str) => {
    const MAPPING = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
    }

    return str.split("").map((char) => {
        return MAPPING[Number(char)];
    }).join("");
}

// Examples:
console.log(numsToWords('42')) // => 'FourTwo'
console.log(numsToWords('123')) // => 'OneTwoThree'
console.log(numsToWords('159598')) // => 'OneFiveNineFiveNineEight'

// 60 - moreDotLessDash
// Write a function moreDotLessDash(str) that takes in a string and
// returns the true if the string contains more dots ('.')
// than dashes ('-'), false otherwise.

title('moreDotLessDash')
let moreDotLessDash = (str) => {
    let dots = 0;
    let dash = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ".") {
            dots++
        } else if (str[i] === "-") {
            dash++
        }
    }
    return dots > dash;
}

// Examples:
console.log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
console.log(moreDotLessDash('.-.-.'));  // => true
console.log(moreDotLessDash('.-'));  // => false
console.log(moreDotLessDash('..--'));  // => false
