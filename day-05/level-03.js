/*                   */
// Exercise level 3 //
/*                 */

// 1. The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// // Sort the array and find the min and max age
// ages.sort();
// console.log(ages);

// // Find the median age(one middle item or two middle items divided by two)
// const median = ages.length / 2 + 1;
// console.log(ages[median]);

// // Find the average age(all items divided by number of items)
// let sum = 0;

// for (let i = 0; i < ages.length; i++) {
//   sum = sum + ages[i];
// }

// console.log("average age is ", sum / ages.length);

// // Find the range of the ages(max minus min)
// const arrMax = ages[ages.length - 1];
// const arrMin = ages[0];
// console.log(`min age is ${arrMin}`);
// console.log(`max age is ${arrMax}`);

// console.log("age range is ", arrMax - arrMin);

// 2. Find the middle country(ies) in the countries array
const middleCountries = countries.length / 2;

console.log(
  countries[Math.ceil(middleCountries)],
  countries[Math.floor(middleCountries)]
);

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
