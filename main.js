const time = new Date().toLocaleTimeString();
const hour1 = time.charAt(0);
const hour2 = time.charAt(1);
const hour = hour1 + hour2;
const minute1 = time.charAt(3);
const minute2 = time.charAt(4);
const minute = minute1 + minute2;
let isMorning,
    topLine,
    midLine,
    botLine;

if (hour <= 12) {
    dayHalf = true;
} else {
    dayHalf = false
};

console.log(
    `
 _   _     _   _
|_| |_| * |_| |_|
|_| |_| * |_| |_|

 _      _  _       _   _  _   _   _
| |  |  _| _| |_| |_  |_   | |_| |_|
|_|  | |_  _|   |  _| |_|  | |_|   |

`);

// From practicing making ascii numbers, makes me realize that numbers are made with 3 layers
// Therefore, building out the clock display will involve structuring underscrore and pipe characters
// ATM, it seems that building out with three arrays made with the top, mid, and bot pattern for each number will be the solution
// i.e.
// four() {
//   topLine.concat('   ');
//   midLine.concat('|_|');
//   botLine.concat('  |');
// };

function numCreate(number) {
    switch (number) {
        case "0":
            topLine.concat(' _ ');
            midLine.concat('| |');
            botLine.concat('|_|');
            break;
        case "1":
            topLine.concat('   ');
            midLine.concat('  |');
            botLine.concat('  |');
            break;
        case "2":
            topLine.concat(' _ ');
            midLine.concat(' _|');
            botLine.concat('|_');
            break;
        case "3":
            topLine.concat(' _ ');
            midLine.concat(' _|');
            botLine.concat(' _|');
            break;
        case "4":
            topLine.concat('   ');
            midLine.concat('|_|');
            botLine.concat('  |');
            break;
        case "5":
            topLine.concat(' _ ');
            midLine.concat('|_ ');
            botLine.concat(' _|');
            break;
        case "6":
            topLine.concat('   ');
            midLine.concat('|_ ');
            botLine.concat('|_|');
            break;
        case "7":
            topLine.concat(' _ ');
            midLine.concat('  |');
            botLine.concat('  |');
            break;
        case "8":
            topLine.concat(' _ ');
            midLine.concat('|_|');
            botLine.concat('|_|');
            break;
        case "9":
            topLine.concat(' _ ');
            midLine.concat('|_|');
            botLine.concat('  |');
            break;
    };
};