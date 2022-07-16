/*                   */
// Exercise level 2 //
/*                 */

// 1. Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(
  `'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);

// 2. Using console.log() print out the following quote by Mother Teresa:
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof "10");
console.log(typeof Number("10"));

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat(9.8));
console.log(Math.ceil(parseFloat(9.8)));

// 5. Check if 'on' is found in both python and jargon
console.log("python".includes("on"), "jargon".includes("on"));

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("I hope this course is not full of jargon.".includes("jargon"));

// 7. Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));

// 8. Generate a random number between 50 and 100 inclusively.
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRndInteger(50, 100));

// 9. Generate a random number between 0 and 255 inclusively.
console.log(getRndInteger(0, 255));

// 10. Access the 'JavaScript' string characters using a random number.
const js = "JavaScript";
const randomJsIndex = getRndInteger(0, js.length);
console.log(js.charAt(randomJsIndex));

// 11. Use console.log() and escape characters to print the following pattern.
console.log("1 ".repeat(5));
console.log("2\t1\t2\t4\t8");

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence =
  "You cannot end a sentence with because because because is a conjunction";

console.log(sentence.replace(" because because because", ""));
