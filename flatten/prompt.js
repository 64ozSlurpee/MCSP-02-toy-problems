//Create a function that takes in an array with array elements
//Your function should return a single array with non-array elements
// Example:
// flatten([1,['a', 2, [8, true], 7]]) returns [1, 'a', 2, 8, true, 7]

function flatten(arrays) {
    //create results varisble
    var result = [];
    //iterate through arrays of the array
    for (var i = 0; i < arrays.length; i++) {
      //if element is not an array, push to results
      if (!Array.isArray(arrays[i])) {
        result.push(arrays[i]);
      } else {
        //if element is an array, re-assign result to current result concatenated with return of calling flatten on current element
        result = result.concat(flatten(arrays[i]));
      }
    }
    //return result array
    return result;
  }
  