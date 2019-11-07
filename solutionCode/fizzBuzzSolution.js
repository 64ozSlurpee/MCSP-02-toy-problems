// The Problem:
// Write a program that prints the numbers from 1 to 100.
// For multiples of three print “Fizz” instead of the number
// For the multiples of five print “Buzz” instead of the number
// For numbers which are multiples of both three and five print “FizzBuzz”

function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();