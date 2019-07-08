const time = new Date().toLocaleTimeString();
const hour1 = time.charAt(0);
const hour2 = time.charAt(1);
const hour = hour1 + hour2;
const minute1 = time.charAt(3);
const minute2 = time.charAt(4);
const minute = minute1 + minute2;
let isMorning;

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