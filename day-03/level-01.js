/*                   */
// Exercise level 1 //
/*                 */

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = "Sonny";
const lastName = "Luu";
const country = "The Netherlands";
const city = "Eindhoven";
const age = 28;
const isMarried = false;
const year = new Date();
const currentYear = year.getFullYear();

console.log(typeof firstName === Boolean);
console.log(typeof lastName === Number);
console.log(typeof country === null);
console.log(typeof city === Array);
console.log(typeof age === String);
console.log(typeof isMarried === String);
console.log(typeof currentYear);

// 2. Check if type of '10' is equal to 10
const ten = "10";
console.log(typeof ten === 10);

// 3. Check if parseInt('9.8') is equal to 10
const grav = "9.8";
console.log(parseInt(grav) === 10);

// 4. Boolean value is either true or false.
console.log(firstName === "Sonny");
console.log(city === "Eindhoven");
console.log(isMarried === false);

let hyper;
console.log(hyper);
console.log(city === "Helmond");
console.log(0);

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log("5.");
console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != "4"); //false
console.log(4 == "4"); //true
console.log(4 === "4"); // false

const python = "python";
const jargon = "jargon";

console.log(python.length != jargon.length);

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log("6.");
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === "4")); //true

const dragon = "dragon";
console.log(!dragon.includes("on") && !python.includes("on"));

// 7. Use the Date object to do the following activities
const date = new Date();
console.log("7.");
console.log("todays year is ", date.getFullYear());
console.log("todays month in number is ", date.getMonth());
console.log(`today's date is ${date.getDate()}`);
console.log(`today is day as a number: ${date.getDay()}`);
console.log(`right now the hour is: ${date.getHours()}`);
console.log(`right now minute is ${date.getMinutes()}`);
console.log(`amount of seconds since january 1, 1970 is ${date.getTime()}`);
