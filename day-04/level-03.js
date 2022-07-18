/*                   */
// Exercise level 3 //
/*                 */

// 1. Write a program which tells the number of days in a month.
const capitalMonth = (mon) => mon.charAt(0).toUpperCase() + mon.slice(1);

const year = Number(prompt("enter year"));
const inputMonth = prompt("enter month");
const month = inputMonth.toLowerCase();

switch (true) {
  case month == "january":
    console.log(`${capitalMonth(month)} has 31 days.`);
    break;
  case month == "february" && year % 4 == 0:
    console.log(`${capitalMonth(month)} has 29 days.`);
    break;
  case month == "february":
    console.log(`${capitalMonth(month)} has 28 days.`);
    break;
  case month == "march":
    console.log(`${capitalMonth(month)} has 31 days.`);
    break;
  case month == "april":
    console.log(`${capitalMonth(month)} has 30 days.`);
    break;
  case month == "may":
    console.log(`${capitalMonth(month)} has 31 days.`);
    break;
  case month == "june":
    console.log(`${capitalMonth(month)} has 30 days.`);
    break;
  case month == "july":
    console.log(`${capitalMonth(month)} has 31 days.`);
    break;
  case month == "august":
    console.log(`${capitalMonth(month)} has 31 days.`);
    break;
  case month == "september":
    console.log(`${capitalMonth(month)} has 30 days.`);
    break;
  case month == "october":
    console.log(`${capitalMonth(month)} has 31 days.`);
    break;
  case month == "november":
    console.log(`${capitalMonth(month)} has 30 days.`);
    break;
  case month == "december":
    console.log(`${capitalMonth(month)} has 31 days.`);
    break;

  default:
    console.log("check your typo");
    break;
}
