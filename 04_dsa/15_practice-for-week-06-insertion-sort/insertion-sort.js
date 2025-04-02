// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here

  let toSort = [...arr]
  let sortedArray = [];

  while (toSort.length > 0) {
    console.log(sortedArray.join(',')) 
   let sortVal = toSort.pop();

   if (sortedArray.length === 0) {
    sortedArray.push(sortVal);
   } else if (sortVal < sortedArray[0]) {
    sortedArray = [sortVal].concat(sortedArray);
   } else if (sortVal > sortedArray[sortedArray.length - 1]) {
    sortedArray = sortedArray.concat(sortVal);
   } else {
    for (let i = sortedArray.length; i >= 0; i--) {
      if (sortVal > sortedArray[i]) {
        sortedArray = sortedArray.slice(0, i+1).concat(sortVal).concat(sortedArray.slice(i+1));
        break
      }
    }
   }
  }
  return sortedArray
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

for (let i = 1; i < arr.length; i++) {
  let curr = arr[i]
  let prev = i - 1

  while (arr[prev] > curr) {
    arr[j]


  }
}
}

module.exports = [insertionSort, insertionSortInPlace];