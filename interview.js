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

for (let i = 0; i < boxes.length; i++) {
  for (let j = 0; j < boxes.length; j++) {
    if (!(boxes[i] === boxes[j])) {
      console.log(boxes[i], boxes[j]);
    }
  }
}

//o(n*n)-->o(n^2 )
