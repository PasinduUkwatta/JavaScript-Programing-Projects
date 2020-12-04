'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉Correct Number';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumberGenerator = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

let secretNumber = secretNumberGenerator();

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  //No Number
  if (!guess) {
    // document.querySelector('.message').textContent = '😑 No Number 😅';
    displayMessage('😑 No Number 😅');
  }

  //Player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number🎊';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < secretNumber ? '😅too low😏' : '😯too high🥱';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥You lost the game😫';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Player Guess the bIG nUmber
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '😯too high🥱';
//     score = score - 1;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '😥You lost the game😫';
//     document.querySelector('.score').textContent = 0;
//   }
//   document.querySelector('.score').textContent = score;
// }

//player Guess Small Number
// else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '😅too low😏';
//     score = score - 1;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '😥You lost the game😫';
//     document.querySelector('.score').textContent = 0;
//   }
// }

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start Guessing';
  score = 20;
  document.querySelector('.score').textContent = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  let guess = Number((document.querySelector('.guess').value = ''));

  secretNumber = secretNumberGenerator();
});
