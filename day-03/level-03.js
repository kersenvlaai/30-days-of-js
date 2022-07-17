/*                   */
// Exercise level 3 //
/*                 */

// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

//YYYY-MM-DD HH:mm eg. 2012-01-02 07:05

const date_string = "2012-01-18T16:03";
const date = new Date();
const year = date.getFullYear();
const tempMonth = date.getMonth() + 1;
const tempDay = date.getDay();
const tempHour = date.getHours();
const tempMinute = date.getMinutes();

noSingleDigit = (param) => (param < 10 ? `0${param}` : param);

const month = noSingleDigit(tempMonth);
const day = noSingleDigit(tempDay);
const hour = noSingleDigit(tempHour);
const minute = noSingleDigit(tempMinute);

console.log(`${year}-${month}-${day} ${hour}:${minute}`);
