//determine days passed
let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let mo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
let D = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let Y = 2022;
const ms = 60;
const sec = ms * 60;
const min = sec * 60;
const hr = min * 60;
const day = hr * 24;
const month = day * 30;
const year = month * 12;
let dateCurrent = new Date();
let datePassed = Date(M / D / Y);

let monthAndYearDifference = (((dateCurrent.month - datePassed.month) * 155520000) + ((dateCurrent.year - datePassed.year) * 1866240000));
let hourAndDayDifference = (((dateCurrent.hour - datePassed.hour) * 216000) + ((dateCurrent.day - datePassed.day) * 5184000));
let secondsAndMinsDifference = (((dateCurrent.seconds - datePassed.seconds) * 60) + ((dateCurrent.minutes - datePassed.minutes) * 3600));
let milsecsDifference = (dateCurrent.milliseconds - datePassed.milliseconds);



let timeStamped = "weekDays" + "M" + D + Y + hr + min + sec + ms;




function numDaysPassed(timeLapsed) {
    for (let i = 0; timeLapsed = true; i--) {


        console.log()
    }

}