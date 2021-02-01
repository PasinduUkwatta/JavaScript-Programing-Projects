// 'use strict';

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;
//   printAge();

//   function printAge() {
//     let output = `${firstName}, you are ${age} years old & born in ${birthYear} `;
//     console.log(output);
//   }

//   if (birthYear >= 1981 && birthYear <= 1996) {
//     const firstName = 'deshan';
//     const str = `you are a millanal, ${firstName}`;
//     console.log(str);
//     console.log(firstName);

//     function add(a, b) {
//       console.log(a + b);
//       return a + b;
//     }
//   }

//   return age;
// }

// const firstName = 'pasindu';
// calcAge(1996);

// console.log(firstName);

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'pasindu';
// let job = 'student';
// const year = 1996;

// console.log(addDecl(5, 6));

// // console.log(addExp(4, 6));

// // console.log(addArrow(7, 8));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExp = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// //example
// console.log(numProduct);

// if (!numProduct) {
//   deleteShoppingCart();
// }

// var numProduct = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;

// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);
// console.log(window.x);

// console.log(this);

// const calcAge1 = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAge1(1996);

// const calcAgeArrow = birthYear => {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1996);

// const pasinduTdu = {
//   year: 1996,
//   calcAge2: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//   },
// };

// pasinduTdu.calcAge2();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = pasinduTdu.calcAge2;
// matilda.calcAge();

// const f = pasinduTdu.calcAge2;
// f();

// var firstName = 'thiwanka';

// //this is object literal
// const pasinduTdu = {
//   year: 1996,
//   firstName: 'pasindu',
//   calcAge2: function () {
//     // console.log(this);
//     console.log(2021 - this.year);

//     //solution 1
//     //   const self = this; //self or that
//     //   const isMillenial = function () {
//     //     console.log(self);
//     //     console.log(self.year >= 1981 && self.year <= 1996);
//     //   };
//     //   isMillenial();
//     // },

//     //solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: function () {
//     console.log(`hey ${this.firstName}`);
//   },
// };

// pasinduTdu.greet(); //arrow function does not have any this keyword

// //in here arrow fucntion acces the global scopr varibale -->var firstname
// console.log(this.firstName);
// console.log(window);

// //Arguments keyword
// // var addExp = function (a, b) {
// //   console.log(arguments);
// //   return a + b;
// // };

// // addExp(2, 5);
// // addExp(2, 5, 8, 12);
// // var addArrow = (a, b) => {
// //   console.log(arguments);
// //   return a + b;
// // };

// // //arguments keywords is not support in arrow fucntions
// // addArrow(2, 5);

// let age = 30;
// let oldAge = age;

// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'pasindu',
//   age: 24,
// };

// const friend = me;
// console.log(me);
// friend.age = 25;
// friend.lastname = 'deshan';

// console.log(me);
// console.log(friend);

// let lastName = 'thiwanka';
// let oldLastName = lastName;

// lastName = 'deshan';

// console.log(lastName, oldLastName);

// const shan = {
//   firstName: 'thiwanka',
//   lastName: 'deshan',
//   age: 25,
// };

// const marriedShan = shan;

// marriedShan.lastName = 'ukwatta';

// console.log(shan);
// console.log(marriedShan);

// //we cannot change the value in the stack
// //becuse the stack address cannot chnage
// // marriedShan = {};

//copying objects

const shan2 = {
  firstName: 'thiwanka',
  lastName: 'deshan',
  age: 25,
  marks: [34, 45, 23, 2, 35, 28],
};

const shanCopy = Object.assign({}, shan2);

shanCopy.lastName = 'pasi';
shanCopy.marks.push(48);
shanCopy.marks.push(98);

console.log(shanCopy);
console.log(shan2);
