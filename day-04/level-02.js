/*                   */
// Exercise level 2 //
/*                 */

// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let input = prompt("enter the score to see the grade");
// let score = Number(input);

// switch (true) {
//   case score < 50:
//     console.log(`grade: F`);
//     break;
//   case score < 60:
//     console.log(`grade: D`);
//     break;
//   case score < 70:
//     console.log(`grade: C`);
//     break;
//   case score < 90:
//     console.log(`grade: B`);
//     break;
//   case score <= 100:
//     console.log(`grade: A`);
//     break;

//   default:
//     break;
// }

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// const month = prompt("fill in a month");

// switch (true) {
//   case month == "September" || month == "October" || month == "November":
//     console.log("It is autumn");
//     break;
//   case month == "December" || month == "January" || month == "February":
//     console.log("It is Winter");
//     break;
//   case month == "March" || month == "April" || month == "May":
//     console.log("It is Spring");
//     break;
//   case month == "June" || month == "July" || month == "August":
//     console.log("It is Summer");
//     break;
//   default:
//     break;
// }

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
const day = prompt("what day is it");
const lowerDay = day.toLowerCase();
switch (true) {
  case lowerDay == "monday" ||
    lowerDay == "tuesday" ||
    lowerDay == "wednesday" ||
    lowerDay == "thursday" ||
    lowerDay == "friday":
    console.log(
      lowerDay.charAt(0).toUpperCase() + lowerDay.slice(1),
      "is a workday"
    );
    break;
  case lowerDay == "saturday" || lowerDay == "sunday":
    console.log(
      lowerDay.charAt(0).toUpperCase() + lowerDay.slice(1),
      "is a weekend"
    );

  default:
    break;
}
