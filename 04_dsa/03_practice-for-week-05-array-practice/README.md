# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)
Space complexity: O(1)
Justification: It pushes it onto the end of the array.

[push on MDN][push]


## `arr.pop()`

Time complexity: O(1)
Space complexity: O(1)
Justification: It pops off the back, array length is in metadata.

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: It pulls it off the front and shifts every other element.

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: It adds to the front and shifts every other element.

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Splice iterates through array and might generate a new array.

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Navigates through the array and generates at most a full array again.

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Navigates through the array and generates a value.

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Runs through array and maybe creates a new array.

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: Runs through array and maybe creates a new array.

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Runs through array but does not create a new array.

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Runs through array and stores in-place.

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: Assigns every index in the array after going through the whole array.

[spread on MDN][spread]

[push]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexOf]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
