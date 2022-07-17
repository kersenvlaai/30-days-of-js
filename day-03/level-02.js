/*                   */
// Exercise level 2 //
/*                 */

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// const base = Number(prompt("Enter base:"));
// const height = Number(prompt("Enter height: "));
// console.log(`the area of the triangle is ${0.5 * (base * height)}`);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// const a = Number(prompt("enter side a:"));
// const b = Number(prompt("enter side b:"));
// const c = Number(prompt("enter side c:"));
// console.log(`the perimeter of the triangle is: ${a + b + c}`);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// const length = Number(prompt("Length: "));
// const width = Number(prompt("width: "));
// console.log(`area = ${length * width}, perimeter = ${2 * (length * width)}`);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const Pi = Math.PI;
// const r = Number(prompt("what is the radius?"));
// console.log(
//   `area of the circle is ${Pi * r * r}, and the circumference is ${2 * Pi * r}`
// );

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// const x = Number(prompt("x intercept"));
// console.log(`slope is ${2 * x - 2}`);

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// const m = console.log(`m = ${(2 - 2) / (10 - 6)}`);

// 7. Compare the slope of above two questions.
// console.log(x == m);

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
const x = -1.125;
console.log(`y = ${x * 2 + 6 * x + 9}`);

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// const hours = Number(prompt("enter hours"));
// const rate = Number(prompt("enter rate per hour"));
// console.log(`your weekly earning is ${hours * rate}`);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
const firstName = "Sonny";
firstName.length < 8
  ? console.log("Name is short")
  : console.log("Name is long");

// 11. Compare your first name length and your family name length and you should get this output.
const lastName = "Luu";
firstName.length > lastName.length
  ? console.log(
      `Your first name, ${firstName} is longer than your family name, ${lastName}`
    )
  : console.log(
      `Your first name, ${firstName} is shorter than your family name, ${lastName}`
    );

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;

console.log(`I am ${myAge - yourAge} years older than you`);

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// const inputAge = Number(prompt("Enter birthyear"));
// const date = new Date();
// const year = date.getFullYear();

// const age = year - inputAge;

// age > 18
//   ? console.log(`You are ${age}. You are old enough to drive`)
//   : console.log(
//       `You are ${age}. You will be allowed to drive after ${18 - age} years`
//     );

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// const yearsLived = Number(prompt("Enter years alived"));
// console.log(`You lived ${yearsLived * 365 * 24 * 60 * 60} seconds`);

// 15. Create a human readable time format using the Date time object
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const minute = date.getMinutes();

console.log(`${year}-${month}-${day} ${hour}:${minute}`);
console.log(`${day}-${month}-${year} ${hour}:${minute}`);
console.log(`${day}/${month}/${year} ${hour}:${minute}`);
