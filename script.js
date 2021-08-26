// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const x = 23;

if (x == 23) {
  console.log("Hello world");
}

console.log(x + 10);
console.log(x + 10);
console.log(x + 10);
console.log(x + 10);
console.log(x + 100);

const temptatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const newTemp = [];

for (let i = 0; i <= temptatures.length - 1; i++) {
  if (temptatures[i] !== "error") {
    console.log(temptatures[i]);
    newTemp.push(temptatures[i]);
  }
}

console.log(newTemp);

const maxTemp = Math.max(...newTemp);
const minTemp = Math.min(...newTemp);

console.log(maxTemp);
console.log(minTemp);
console.log(`Teamprature  Amplitutde is ${maxTemp - minTemp}`);

let tempAmp = [];

for (let i = 0; i <= newTemp.length - 1; i++) {
  tempAmp.push(maxTemp - newTemp[i]);
}

console.log(tempAmp);
*/

/*
console.log("pasindu");
console.warn("pasindu");
console.error("pasindu");
console.table("pasindu");
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const sentence = ["..."];

function printForecast(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    sentence.push(`${arr[i]} in ${i + 1} days...`);
  }
}

//printForecast(data1);
printForecast(data2);
console.log(sentence.toString());
console.log(sentence.join(""));

var testarray = new Array("a", "b", "c");
console.log(testarray.join(""));
