// const nemo = ["nemo"];
// const everyone = [
//   "nemo",
//   "pasindu",
//   "shark",
//   "gold",
//   "silver",
//   "tutrle",
//   "nigel",
// ];

// const large = new Array(1000).fill("nemo");

// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("Found Nemo");
//     }
//   }
//   let t1 = performance.now();
//   console.log(`call to find nemo took  ${t1 - t0}`);
// }

// findNemo(nemo); // o(n) -->linear time  o(1)
// findNemo(everyone); //o(10)
// findNemo(large); //o(1000 )

// function compressBoxes(boxes) {
//   console.log(boxes[0]);
// }

// compressBoxes([1, 2, 3, 4]); //0(1) -->constant time

// function logFirstTwoBoxes(box) {
//   console.log(box[0]); //o(1)
//   console.log(box[1]); //o(1)
// }

// logFirstTwoBoxes([23, 4, 54, 25, 21, 4, 1]); //o(2)

const boxes = ["a", "b", "c", "d", "e"];

// for (let i = 0; i < boxes.length; i++) {
//   for (let j = 0; j < boxes.length; j++) {
//     if (!(boxes[i] === boxes[j])) {
//       console.log(boxes[i], boxes[j]);
//     }
//   }
// }

//o(n*n)-->o(n^2 )

// function boo(n) {
//   for (let i = 0; i < n.length; i++) {
//     console.log(`Boo ${i}`);
//   }
// }

// boo([1, 3, 41, 43, 3, 15, 45]); //space complexity -->o(1)

// function arrayOfTimes(n) {
//   let hiArray = [];
//   for (let i = 0; i < n; i++) {
//     hiArray[i] = "hi";
//   }

//   return hiArray;
// }

// console.log(arrayOfTimes(5)); //o(n)

// const array = ["hi", "my", "today"];

// array[0]; //o(1)
// array[array.length - 1]; //o(1)

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "i"];
// const array3 = ["a", "b", "c", "x"];
// const array4 = ["z", "y", "x"];

// function checkChar(array1, array2) {
//   for (let i = 0; i <= array1.length - 1; i++) {
//     console.log(i);
//     for (let j = 0; j <= array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         console.log(array1[i], array2[j]);
//       } else {
//         console.log(array1[i], array2[j]);
//       }
//     }
//   }
// }

// console.log(checkChar(array1, array2));
// console.log(checkChar(array3, array4));

// console.log(array1);

// for (let i = 0; i <= array1.length - 1; i++) {
//   for (let j = 0; j <= array2.length - 1; j++) {
//     console.log(array1[i], array2[j]);
//     if (array1[i] === array2[j]) {
//       console.log("value matched");
//     } else {
//       console.log("not matched");
//     }
//   }
// }

// for (let i = 0; i <= array3.length - 1; i++) {
//   for (let j = 0; j <= array4.length - 1; j++) {
//     console.log(array3[i], array4[j]);
//     if (array3[i] === array4[j]) {
//       console.log("value matched");
//     } else {
//       console.log("not matched");
//     }
//   }
// }

// function matchChar(arr1, arr2) {
//   for (let i = 0; i <= arr1.length - 1; i++) {
//     for (let j = 0; j <= arr2.length - 1; j++) {
//       if (arr1[i] === arr2[j]) {
//         console.log("value matched");
//         return true;
//       } else {
//         console.log("not matched");
//       }
//     }
//   }
//   return false;
// }

// //o(a*b)

// console.log(matchChar(array1, array2));
// console.log(matchChar(array3, array4));
