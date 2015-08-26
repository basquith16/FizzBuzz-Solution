for(var i = 1; i <= 100; i++) {
console.log(i%3 === 0 ? i%5 === 0 ? "FizzBuzz" : "Fizz" : i%5 === 0 ? "Buzz" : i)
}

// Chong taught me and Nick about ternary operators, shorthand, and a few other
// things. I went home and tinkered for a few hours and this is what I came up
// with. Below I commented out the evolution of my solution.


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

//From here I implemented the ternary operators. I remembered Chong telling me
// to use !, but I could not grasp/remember why exactly. I remembered enough syntax
// to come up with the solution, but was not comfortable with my understanding of it.

// for(var i = 1; i <= 100; i++) {
// console.log(!(i%3) ? !(i%5) ? "FizzBuzz" : "Fizz" : !(i%5) ? "Buzz" : i)
// }

//Therefore, I redid it in a little bit longer of a way, but in a way I could
//understand and be comfortable handing in, which is what you see at the top.
