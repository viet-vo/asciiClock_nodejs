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

`)
console.log(minute);