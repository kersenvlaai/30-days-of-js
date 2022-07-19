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

// 1. Declare an empty array;
const arr = [];

// 2. Declare an array with more than 5 number of elements
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3. Find the length of your array
console.log(number.length);

// 4. Get the first item, the middle item and the last item of the array
console.log(number[0], number[4], number[9]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1, "one", "fruit", true, 5];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
// console.log(itCompanies.length);

// 9. Print the first company, middle and last company
// console.log(itCompanies[0], itCompanies[3], itCompanies[6]);

// 10. Print out each company
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray(itCompanies);

// 11. Change each company name to uppercase one by one and print them out
let newArray = [];
function uppercaseArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i].toUpperCase());
  }
}

uppercaseArray(itCompanies);

printArray(newArray);

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.

// const amazon = itCompanies[6];
// console.log(amazon);

// const itCompaniesWithoutAmazon = itCompanies.pop();
// console.log(itCompaniesWithoutAmazon);
// const stringArr = itCompanies.join(", ");

// console.log(
//   `${stringArr} and ${itCompaniesWithoutAmazon} are big IT companies `
// );

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// const x = "Cap";

// itCompanies.includes(x)
//   ? console.log(`${x} exists in the array`)
//   : console.log(`${x} is not found in the array`);

// 14. Filter out companies which have more than one 'o' without the filter method
// itCompanies.forEach((element) => {
//   console.log(element);
//   console.log(!/(.).\1/.test(element));
//   if (/(o).\1/.test(element)) {
//     console.log(`${element} contains more than one 'O'`);
//   } else {
//     console.log(`${element} doesn't contain more than one 'O'`);
//   }
// });

// 15. Sort the array using sort() method
// console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method
// console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0, 3));

// 18. Slice out the last 3 companies from the array
// console.log(itCompanies.slice(4));

// 19. Slice out the middle IT company or companies from the array
// console.log(itCompanies.length / 2);

// 20. Remove the first IT company from the array
// itCompanies.shift();
// console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array

// 22. Remove the last IT company from the array
// itCompanies.pop();
// console.log(itCompanies);

// 23. Remove all IT companies
itCompanies.shift();
console.log(itCompanies.splice());
