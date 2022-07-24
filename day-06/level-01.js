/*                   */
// Exercise level 1 //
/*                 */

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let y = 0;
// while (y <= 10) {
//   console.log(y);
//   y++;
// }

// let z = 0;
// do {
//   console.log(z);
//   z++;
// } while (z <= 10);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let y = 10;
// while (y >= 0) {
//   console.log(y);
//   y--;
// }

// let z = 10;
// do {
//   console.log(z);
//   z--;
// } while (z >= 0);

// 3. Iterate 0 to n using for loop

// const n = 20;
// for (i = 0; i <= n; i++) {
//   console.log(i);
// }

// 4. Write a loop that makes the following pattern using console.log():

// for (let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i));
// }

// 5. Use loop to print the following pattern:
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }

// 6. Using loop print the following pattern
// console.log(`i  i^2  i^3`);
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
// }

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

// let isPrime = true;

// function isPrimeNumber(num) {
//   if (num === 1) {
//     isPrime = false;
//   } else if (num > 1) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//   }
//   return isPrime;
// }

// for (let z = 1; z <= 100; z++) {
//   if (isPrimeNumber(z) == true) {
//     console.log(z);
//   }
//   isPrime = true;
// }

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum = 0;

// for (i = 0; i <= 100; i++) {
//   sum = sum + i;
// }

// console.log(`the sum of all numbers from 0 to 100 is ${sum}`);

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
