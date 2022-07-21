/*                   */
// Exercise level 3 //
/*                 */

// 1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort();
console.log(ages);

// Find the median age(one middle item or two middle items divided by two)
const median = ages.length / 2 + 1;
console.log(ages[median]);

// Find the average age(all items divided by number of items)
let sum = 0;

for (let i = 0; i < ages.length; i++) {
  sum = sum + ages[i];
}

console.log("average age is ", sum / ages.length);

// Find the range of the ages(max minus min)
const arrMax = ages[ages.length - 1];
const arrMin = ages[0];
console.log(`min age is ${arrMin}`);
console.log(`max age is ${arrMax}`);

console.log("age range is ", arrMax - arrMin);
