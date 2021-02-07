// console.log("welcome to hash tables");

// let user = {
//   age: 54,
//   name: "pasindu",
//   magic: true,
//   scream: function () {
//     console.log("Im Screaming");
//   },
// };

// console.log(user.age);

// user.spell = "wingardian";

// console.log(user); //o(1) always takes constant time

// function set(key, value) {
//   //o(1) no for loops
//   let address = this._hash(key);
//   if (!this.data[address]) {
//     this.data[address] = [];
//   }
//   this.data[address].push([key, value]);
//   return this.data;
// }

// function get(key) {
//   //o(1) -->but can different if the list get bigger
//   let address = this._hash(key);
//   const currentBucket = this.data[address];
//   console.log(currentBucket);
//   if (currentBucket) {
//     for (let i = 0; i < currentBucket.length; i++) {
//       {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//   }

//   return undefined;
// }

// function keys() {
//   const keys = [];
//   for (let i = 0; i < this.data.length; i++) {
//     if (this.data[i]) {
//       console.log(this.data[i][0][0]);
//       keysArray.push(this.data[i][0][0]);
//     }
//   }
//   return keysArray;
// }

// //in has table to find the indexes we need to loop thorugh the whole hash table
// //no ordering ,randlomly place

let num1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
let num2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];

function selectNumber(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; i < arr.length - 1; j++) {
      if (arr[i] === arr[j]) {
        return arr[j];
      }
    }
  }
  return undefined;
}

selectNumber([1, 2, 3, 1]);

function firstRecurrent(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  console.log(map);
  return undefined;
}

console.log(firstRecurrent(num1));
