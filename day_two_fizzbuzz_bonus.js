for(var i = 1; i <= 100; i++) {
console.log(!(i%3) ? !(i%5) ? "FizzBuzz" : "Fizz" : !(i%5) ? "Buzz" : i)
}

//Below I commented out the evolution of my solution.


// for(var i = 0; i <= 100; i++) {
//
//     if((i%3 === 0) && (i%5 === 0)) {
//       console.log("FizzBuzz");
//
//   } else if(i%3 === 0) {
//     console.log("Fizz");
//
//   } else if(i%5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// In my next attempt I eliminated a lot of the console.logs by creating the
// result variable.

// for(var i = 1; i <= 100; i++) {
//
// var result = ""
//
// if((i%3 === 0) && (i%5 === 0)) {result += "FizzBuzz"}
// else if(i%3 === 0) {result += "Fizz"}
// else if(i%5 === 0) {result += "Buzz"}
// console.log(result || i)
// }

// for(var i = 1; i <= 100; i++) {
// console.log(i%3 === 0 ? i%5 === 0 ? "FizzBuzz" : "Fizz" : i%5 === 0 ? "Buzz" : i)
// }

//From here I implemented the ternary operators and ended up with the above solution
