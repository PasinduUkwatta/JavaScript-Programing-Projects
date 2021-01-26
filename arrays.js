// console.log("welcome to the array coding");

// class Player {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   introduce() {
//     console.log(`Hello im ${this.name}, my type is ${this.type}`);
//   }
// }

// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type);
//     console.log("wizard", this);
//   }

//   play() {
//     console.log(`im ${this.type}`);
//   }
// }

// const wizard1 = new Wizard("Pasindu", "Attack");
// const wizard2 = new Wizard("Thiwanka", "Medic");

// wizard1.introduce();
// wizard2.introduce();
// wizard1.play();
// wizard2.play();

// const a = [4, 5, 3, 9, 0, 1];
// console.log(a.sort());

// class myArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }

//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//   }

//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }

//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new myArray();
// console.log(newArray.get[0]);
// newArray.push("hi");
// newArray.push("you");
// console.log(newArray);

// newArray.pop();
// console.log(newArray);

// newArray.delete(1);
// newArray.push("call");
// newArray.push("me");

// console.log(newArray);

// //reverse a string

// function reverseString(str) {
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return "Please enter corret input";
//   } else {
//     const backwards = [];
//     const totalItems = str.length - 1;

//     for (let i = totalItems; i >= 0; i--) {
//       backwards.push(str[i]);
//     }
//     console.log(backwards);

//     return backwards.join("");
//   }
// }

// console.log(reverseString("Hi my name is pasindu"));

// function reverse2(str) {
//   return str.split("").reverse().join("");
// }

// const reverse3 = (str) => [...str].reverse().join("");

// console.log(reverse2("HI my name is thiwnaka"));

// console.log(reverse3("HI my name is deshan"));

let array1 = [0, 3, 4, 31];
let array2 = [4, 6, 30];

// function mergeSoratedArray(arr1, arr2) {
//   let sortArr1 = arr1.sort();
//   let sortArr2 = arr2.sort();

//   while (
//     sortArr1Index === arr1.length - 1 &&
//     sortArr2Index === arr2.length - 1
//   ) {
//     let sortArr1Index = 0;
//     let sortArr2Index = 0;
//     let mergeArray = [];
//     if (sortArr1Index > sortArr2Index) {
//       mergeArray.push(sortArr2[sortArr2Index]);
//       sortArr2Index++;
//       console.log(sortArr2Index);
//     } else if (sortArr1Index < sortArr2Index) {
//       mergeArray.push(sortArr1[sortArr1Index]);
//       sortArr1Index++;
//       console.log(sortArr1Index);
//     }
//     console.log(mergeArray);
//   }
// }

// mergeSoratedArray(array1, array2);

function meargeSortedArray(arr1, arr2) {
  let sortArr1 = arr1.sort();
  let sortArr2 = arr2.sort();
  let meargeArray = [];
  let arr1Index = 0;
  let arr1Length = sortArr1.length - 1;
  let arr2Index = 0;
  let arr2Length = sortArr2.length - 1;
  while (arr1Index === arr1Length && arr2Index === arr2Length) {
    if (sortArr1[arr1Index] > sortArr2[arr2Index]) {
      meargeArray.push(sortArr2[arr2Index]);
      arr2Index++;
    } else {
      meargeArray.push(sortArr1[arr1Index]);
      arr1Index++;
    }

    console.log(meargeArray);
  }
}

meargeSortedArray(array1, array2);
