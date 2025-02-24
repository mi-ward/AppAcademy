
function bubbleSort(arr) {

    
    let sorted = false;
    while (!sorted) {
      sorted = true;
      
      // Iterate through the array
      for (let i = 0; i < arr.length; i++) {

        // If the current value is greater than its neighbor to the right
        if (arr[i] > arr[i+1]) {

          
          // Swap those values
          let temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          // Do not move this console.log
          console.log(arr.join(","));

          // Otherwise, repeat from the beginning
          sorted = false;
        }
      }   
    }
    // If you get to the end of the array and no swaps have occurred, return
      return arr;
}

module.exports = bubbleSort;