/*                   */
// Exercise level 1 //
/*                 */

// 1. et user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// const inputAge = Number(prompt("Enter birthyear"));
// const date = new Date();
// const year = date.getFullYear();

// const age = year - inputAge;

// age > 18
//   ? console.log(`You are ${age}. You are old enough to drive`)
//   : console.log(
//       `You are ${age}. You will be allowed to drive after ${18 - age} years`
//     );

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// const myAge = 28;
// const yourAge = Number(prompt("Enter your age"));

// myAge > yourAge
//   ? console.log(`I am ${myAge - yourAge} years older than you`)
//   : console.log(`You are ${yourAge - myAge} older than me.`);

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

let a = 4;
let b = 3;

if (a > b) {
  console.log(`a is greater than b`);
} else {
  console.log(`a is less than b`);
}

a > b ? console.log(`a is greater than b`) : console.log(`a is less than b`);

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const number = Number(prompt("enter a number to see if its even or not"));

number % 2 == 0 ? console.log("number is even") : console.log("number is odd");
