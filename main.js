const time = new Date().toLocaleTimeString();
let hour1 = time.charAt(0);
let hour2 = time.charAt(1);
const hour = hour1 + hour2;
const minute1 = time.charAt(3);
const minute2 = time.charAt(4);
const minute = minute1 + minute2;
let isMorning;
let topLine = "";
let midLine = "";
let botLine = "";

if (hour <= 12) {
  dayHalf = true;
} else {
  dayHalf = false;
}

console.log(
  `
 _   _     _   _
|_| |_| * |_| |_|
|_| |_| * |_| |_|

 _      _  _       _   _  _   _   _
| |  |  _| _| |_| |_  |_   | |_| |_|
|_|  | |_  _|   |  _| |_|  | |_|   |

`
);

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
      topLine = topLine + " _ ";
      midLine = midLine + "| |";
      botLine = botLine + "|_|";
      break;
    case "1":
      topLine = topLine + "   ";
      midLine = midLine + "  |";
      botLine = botLine + "  |";
      break;
    case "2":
      topLine = topLine + " _ ";
      midLine = midLine + " _|";
      botLine = botLine + "|_ ";
      break;
    case "3":
      topLine = topLine + " _ ";
      midLine = midLine + " _|";
      botLine = botLine + " _|";
      break;
    case "4":
      topLine = topLine + "   ";
      midLine = midLine + "|_|";
      botLine = botLine + "  |";
      break;
    case "5":
      topLine = topLine + " _ ";
      midLine = midLine + "|_ ";
      botLine = botLine + " _|";
      break;
    case "6":
      topLine = topLine + "   ";
      midLine = midLine + "|_ ";
      botLine = botLine + "|_|";
      break;
    case "7":
      topLine = topLine + " _ ";
      midLine = midLine + "  |";
      botLine = botLine + "  |";
      break;
    case "8":
      topLine = topLine + " _ ";
      midLine = midLine + "|_|";
      botLine = botLine + "|_|";
      break;
    case "9":
      topLine = topLine + " _ ";
      midLine = midLine + "|_|";
      botLine = botLine + "  |";
      break;
    case "blank":
      topLine = topLine + "   ";
      midLine = midLine + "   ";
      botLine = botLine + "   ";
      break;
    case "a":
      topLine = topLine + " _ ";
      midLine = midLine + "|_|";
      botLine = botLine + "| |";
      break;
    case "p":
      topLine = topLine + " _ ";
      midLine = midLine + "|_|";
      botLine = botLine + "|  ";
      break;
    case "m":
      topLine = topLine + "   ";
      midLine = midLine + "|V|";
      botLine = botLine + "| |";
      break;
    default:
      topLine = topLine + "   ";
      midLine = midLine + " * ";
      botLine = botLine + " * ";
  }
}

// Building hh:mm then log
if (parseInt(hour, 10) > 12) {
    hour1 = parseInt(hour1, 10) - 1 + "";
    hour2 = parseInt(hour2, 10) - 2 + "";
}
if (hour1 === "0") {
  numCreate("blank");
} else {
  numCreate(hour1);
}
numCreate(hour2);
numCreate("asterisk");
numCreate(minute1);
numCreate(minute2);
numCreate("blank");
if (hour <= 12) {
  numCreate("a");
} else {
  numCreate("p");
}
numCreate("m");
console.log(topLine);
console.log(midLine);
console.log(botLine);
