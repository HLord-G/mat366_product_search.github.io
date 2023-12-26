let d = new Date();
let options = { timeZone: 'Asia/Manila' };
let philippinesTime = d.toLocaleString('en-US', options);

console.log('Philippines Time:', philippinesTime);


let date = d.getDate();
let months = d.getMonth() + 1;
let years = d.getFullYear();

let hours = d.getHours();
let mints = d.getMinutes();
let sec = d.getSeconds();

// Determine if it's AM or PM
let period = (hours < 12) ? "AM" : "PM";


// Convert to 12-hour format
hours = (hours % 12 === 0) ? 12 : hours % 12;




let monthInWords;
 

setInterval(() => {
d = new Date();
options = { timeZone: 'Asia/Manila' };
philippinesTime = d.toLocaleString('en-US', options);
date = d.getDate();
months = d.getMonth() + 1;
years = d.getFullYear();
hours = d.getHours();
mints = d.getMinutes();
sec = d.getSeconds();
period = (hours < 12) ? "AM" : "PM";
hours = (hours % 12 === 0) ? 12 : hours % 12;

switch (months) {
    case 1:
        monthInWords = 'Jan';
        break;
    case 2:
        monthInWords = 'Feb';
        break;
    case 3:
        monthInWords = 'Mar';
        break;
    case 4:
        monthInWords = 'Apr';
        break;
    case 5:
        monthInWords = 'May';
        break;
    case 6:
        monthInWords = 'Jun';
        break;
    case 7:
        monthInWords = 'Jul';
        break;
    case 8:
        monthInWords = 'Aug';
        break;
    case 9:
        monthInWords = 'Sep';
        break;
    case 10:
        monthInWords = 'Oct';
        break;
    case 11:
        monthInWords = 'Nov';
        break;
    case 12:
        monthInWords = 'Dec';
        break;
    default:
        monthInWords = 'Invalid month';
}
}, 10);


