// Write a function that takes in an array of numbers and returns the maximum number of consecutive 1s

//maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3]) returns 4

function maxConsecutiveOnes(array) {
  //save variable for the number one
  var one = 1;
  //create array
  var onesArray = [];
  //create counter variable
  var counter = 0;
  //iterate through array with a for loop
  for (var i =0; i < array.length; i++){
    //while element equals one, increment counter
    while(array[i] === 1){
    //then  push counter to array
    counter++
    }
    onesArray.push(counter);
  }
  // iterate through new array and return biggest number.
  for (var i = 0; i < onesArray.length; i++){
    var temp = onesArray[i]
    if(temp < onesArray[i++]){
      temp = onesArray[i++]
    }
  }

}
