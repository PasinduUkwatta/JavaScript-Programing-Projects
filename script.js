'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(a, b, c);
// console.log(x, y, z);
// console.log(arr);

// //if we need to pass elements we should use empty space
// let [main, , secondry] = restaurant.categories;
// console.log(main, secondry);

// const temp = main;
// main = secondry;
// secondry = temp;
// console.log(main, secondry);

// // in this method we does not need any temp variable
// [main, secondry] = [secondry, main];

// console.log(main, secondry);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destucturing
// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;

// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values
// const [p = 2, q = 1, r = 1] = [8, 9];

// console.log(p, q, r);

//destructing the  object

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);

// console.log(a, b);

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

//------------------------------------------------------------------------
// const arr = [7, 8, 9];

// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

// console.log(badNewArray);

// const newArray = [1, 2, ...arr];

// console.log(newArray);

// // we can use this when we need the data individual
// console.log(...newArray);

// const newMenu = [...restaurant.mainMenu, 'Gnocci', 'sushi'];

// console.log(newMenu);

// //copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// console.log(mainMenuCopy);

// //join arrys

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menu);

// //iterables  :arrys ,strings,maps, Not objects

// const str = 'pasindu';

// const letters = [...str, '', 's'];
// console.log(letters);

// console.log(...str);

// function orderPasta(ing1, ing2, ing3) {
//   console.log(`THIS IS YOUR PASTA WITH ${ing1} ,${ing2},${ing3}`);
// }

// // const ingerdients = [
// //   prompt("Let 's make pasta ! ingeridients 1?"),
// //   prompt("Let 's make pasta ! ingeridients 2?"),
// //   prompt("Let 's make pasta ! ingeridients 3?"),
// // ];

// // console.log(ingerdients);
// // //calling the fucntion with the spred operator
// // orderPasta(...ingerdients);

// const newResturant = { ...restaurant, founder: 'pasindu ', founderYear: 1996 };

// console.log(newResturant);

// const resturantCopy = { ...restaurant };

// resturantCopy.name = 'returnata roma';

// console.log(restaurant.name);
// console.log(resturantCopy.name);
//-----------------------------------------------------------------------------

// //spread beacuse of the right side of the array
// const arr1 = [1, 2, ...[3, 4]];
// //rest, beacuse on the left side
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risato, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risato, otherFood);

// //objects

// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;

//   console.log(numbers);
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }

//   console.log(sum);
// };

// add(2, 3);

// add(5, 3, 7, 2);

// add(5, 3, 6, 5, 7, 5, 6, 2, 2, 2);

// const x = [23, 5, 7];
// add(...x);

// function orderPizza(mainIngredients, ...others) {
//   console.log(mainIngredients);
//   console.log(others);
// }

// orderPizza('Mashroom', 'chicken', 'tomatoes');

// //use any data type,return any datatype
// //short-curcuit
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);

// //any opertains on null return null
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || '23' || null);

// restaurant.numGuests = 23;

// //if the guest no =0 , this will not work
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests1);

// const gusets2 = restaurant.numGuests || 10;

// console.log(gusets2);

// console.log('----------------AND------------------');

// console.log(0 && 'jon');

// //and opertor retrun the final value
// console.log(1 && '10');

// console.log('hello' && 23 && null && 'jhn' && 12);

// if (orderPizza) {
//   orderPizza('mushroom', 'spinich');
// }

// orderPizza && orderPizza('chicken', 'cheese', 'butter');

//---------------------------------------------------------------------------------
//nullish operator

// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
// // -----------------------------------------------------

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const players1 = game.players[0];
// const players2 = game.players[1];

// console.log(players1);
// console.log(players2);

// const [gk, ...fieldPlayers] = players1;

// console.log(gk);
// console.log(fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// console.log(typeof allPlayers);

// const additonal = ['thiyago', 'cutinho', 'perstic'];
// const players1Final = [...players1, ...additonal];

// console.log(players1Final);

// // const team1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// const printGoals = function (...players) {
//   console.log(`${players.length} golas were scored`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');

// printGoals(...game.scored);

// team1 < team2 && console.log('team 1 likely to win');

// team1 > team2 && console.log('team 2 likely to win');
// //------------------------------------------------------------------

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }

// //-------------------------------------------------------------------

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const hours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurantUpdate = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //es6 enhnased literal objects
//   hours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// console.log(restaurantUpdate);

// //---------------------------------------------------------------------
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri);

// //without optional chainig
// // console.log(restaurant.openingHours.mon.open);

// //with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}.we are  ${open}`);
// }

// //optional chaining in methods

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// console.log(restaurant.orderRissotto?.(0, 1) ?? 'method does not exist');

// //Arrays

// const users = [{ name: 'pasindu', email: 'abc@gmail.com' }];
// // const users = [];
// console.log(users[0]?.name ?? 'user array empty');

//--------------------------------------------------------------------------
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const propeties = Object.keys(openingHours);
console.log(propeties);
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

console.log(`shop open for ${propeties.length} days`);
console.log(Object.values(openingHours));

const entriesShop = Object.entries(openingHours);

console.log(entriesShop);

for (const [key, { open, close }] of entriesShop) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

//------------------------------------------------------------------------

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

function printGoalPlayer(...players) {
  console.log(players);
  for (const player of players) {
    console.log(player);
    console.log(`${player}scored goal number ${player.length}`);
  }
}

printGoalPlayer(game.scored);

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1} --> player :${player}`);
}

let avarage = 0;
const odds = Object.values(game.odds);

for (const odd of odds) {
  avarage += odd;
  avarage /= odds.length;
  console.log(avarage);
}

for (const { team, odd } of Object.entries(game.odds)) {
  const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamString} ${odd}`);
}
