// 'use strict';
// // const bookings = [];
// // const createBooking = function (flightNum, numPassangers = 1, price = 199) {
// //   //ES5
// //   // numPassangers = numPassangers || 1;
// //   // price = price || 199;

// //   const booking = {
// //     flightNum,
// //     numPassangers,
// //     price,
// //   };

// //   console.log(booking);
// //   bookings.push(booking);
// // };

// // createBooking('LH123');
// // createBooking('LH1234', 3, 350);
// // createBooking('LH1234', undefined, 350);

// // const flightNumber = 'LH567';

// // const pasindu = {
// //   name: 'pasindu',
// //   passport: 3445235,
// // };

// // const checkIn = function (flightNum, passanger) {
// //   flightNum = 'LH9458';
// //   passanger.name = 'Mr.' + passanger.name;

// //   // if (passanger.passport === 3445235) {
// //   //   alert('check in');
// //   // } else {
// //   //   alert('wrong passport');
// //   // }
// // };

// // checkIn(flightNumber, pasindu);
// // console.log(flightNumber);
// // console.log(pasindu);

// // const newPassport = function (person) {
// //   person.passport = Math.trunc(Math.random() * 100000);
// // };

// // // newPassport(pasindu);

// // // checkIn(flightNumber, pasindu);

// // // console.log(pasindu);

// // const oneWord = function (str) {
// //   return str.replace(/ /g, '').toLowerCase();
// // };

// // const upperFirstWord = function (str) {
// //   const [firstWord, ...others] = str.split(' ');

// //   return [firstWord.toUpperCase(), ...others].join(' ');
// // };

// // //higer order function
// // const transformer = function (str, fn) {
// //   console.log(`Original String :${str}`);
// //   console.log(`Transformed String :${fn(str)}`);

// //   console.log(`Transforemd by :${fn.name} `);
// // };

// // transformer('JavaScript is the Best !', upperFirstWord);
// // transformer('JavaScript is the Best !', oneWord);

// // const high5 = function () {
// //   console.log('🤞  🏳 ');
// // };

// // document.body.addEventListener('click', high5);

// // ['pasindu', 'john', 'amla', 'kamal'].forEach(high5);

// // // const greet = function (greeting) {
// // //   return function (name) {
// // //     console.log(`${greeting} ${name}`);
// // //   };
// // // };

// // //using arrow function
// // const greet = greeting => name => console.log(`${greeting} ${name}`);

// // const greeterHay = greet('Hey');

// // greeterHay('Pasindu');
// // greeterHay('John');

// // greet('hello')('Kamal');
// // greet('Hi')('Amal');

// // const lufthansa = {
// //   airline: 'Lufthanaha',
// //   iataCode: 'LH',
// //   bookings: [],
// //   book(flightNum, name) {
// //     console.log(
// //       `${name} booked as seat on a ${this.airline} flight ${this.iataCode}${flightNum}`
// //     );

// //     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// //   },
// // };

// // lufthansa.book(239, 'Pasindu Thiwanka');
// // lufthansa.book(324, 'Deshan');
// // lufthansa.book(327, 'Amla ');
// // console.log(lufthansa);

// // const eurowings = {
// //   airline: 'Euro Wings',
// //   iataCode: 'EW',
// //   bookings: [],
// // };

// // const book = lufthansa.book;

// // // //not work
// // // book(23,"Sarah")

// // book.call(eurowings, 23, 'Sarah');

// // console.log(eurowings);

// // book.call(lufthansa, 3453, 'Mary Willoms');

// // console.log(lufthansa);

// // const swiss = {
// //   airline: 'Swiss Airlines',
// //   iataCode: 'SW',
// //   bookings: [],
// // };

// // book.call(swiss, 432, 'Alexa');
// // console.log(swiss);

// // //Apply method

// // const flightData = [832, 'George'];

// // book.apply(swiss, flightData);

// // console.log(swiss);

// // //bind method
// // // book.call(eurowings, 23, 'Sarah');

// // const bookEW = book.bind(eurowings);
// // const bookLH = book.bind(eurowings);
// // const bookSW = book.bind(eurowings);

// // bookEW(100, 'Stevan');
// // bookLH(100, 'Stevan');

// // console.log(eurowings);

// // const bookEW23 = book.bind(eurowings, 23);
// // bookEW23('Pasindu');
// // bookEW23('deshan');

// // console.log(eurowings);

// // //with event listenrs
// // lufthansa.planes = 300;

// // lufthansa.buyPlane = function () {
// //   console.log(this);
// //   this.planes++;
// //   console.log(this.planes);
// // };

// // document
// //   .querySelector('.buy')
// //   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // //partial application
// // const addTax = (rate, value) => value + value * rate;

// // console.log(addTax(0.1, 200));

// // const addVAT = addTax.bind(null, 0.23);

// // console.log(addVAT(176));

// // const VAT = function (vat) {
// //   return function (tax) {
// //     return (vat = vat + vat * tax);
// //   };
// // };

// // console.log(VAT(10)(100));

// // function VAT2(vat) {
// //   return function (tax) {
// //     return (vat = vat + vat * tax);
// //   };
// // }

// // console.log(VAT2(19)(200));

// // TEST DATA 1: [5, 2, 3];
// // TEST DATA 2: [1, 5, 3, 9, 6, 1];

// // const poll = {
// //   question: 'What is your favourite programming language?',
// //   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
// //   // This generates [0, 0, 0, 0]. More in the next section 😃
// //   answers: new Array(4).fill(0),
// //   registerAnswer() {
// //     const answer = Number(
// //     prompt(
// //       `${this.question}\n${this.options.join('\n')}\n(write the option number)`
// //     );
// //     )
// //     console.log(answer);
// // typeof answer === 'number' &&
// //   answer < this.answer.length &&
// //   this.answers[answer]++;

// // console.log(this.answers);
// //     }
// //   }

// // const runOnce = function () {
// //   console.log('can run only one time');
// // };

// // runOnce();

// // //imideiatly ivoke fuctions IIFE
// // (function () {
// //   console.log('This will never run again');
// // })();

// // (() => console.log('THIS WILL NOT RUN AGAIN ->ARROW FUNCTION'))();

// // {
// //   // const isPrivate = 23;
// //   var notPrivate = 24;
// //   // let letPrivate = 25;
// // }

// // // console.log(isPrivate);
// // console.log(notPrivate);
// // // console.log(letPrivate);

// const secureBooking = function () {
//   let passangerCount = 0;

//   return function () {
//     passangerCount++;
//     console.log(`${passangerCount} Passangers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();
// booker();

// console.dir(booker);

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 70;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// //reasign by h
// h();
// f();
// console.dir(f);

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`we are now boarding all ${n} passangers`);
//     console.log(`there are 3 groups ,each with ${perGroup} passangers`);
//   }, wait * 1000);
//   console.log(`will start boarding in ${wait} seconds`);
// };

// setTimeout(function () {
//   console.log('Timer');
// }, 1500);

// boardPassengers(180, 3);

// const perGroup = 1000;

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();
