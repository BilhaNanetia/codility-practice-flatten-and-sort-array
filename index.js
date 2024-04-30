  function flattenAndSort(arr) {
    //Filter out  empty sub-array
    const nonEmptyArrays = arr.filter(subArr => subArr.length > 0);
   
    //Flatten the non-empty sub-arrays by concatenating them
    const flattenedArray = nonEmptyArrays.reduce((acc, val) => acc.concat(val), []);
    
    //sort the flattened array in ascending order
     return flattenedArray.sort((a, b) => a - b);

 }

 // Test case
 const inputArray = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
 const flattenedSortedArray = flattenAndSort(inputArray);
 console.log(flattenedSortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]