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

const secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '😑 No Number 😅';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number🎊';
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😯too high🥱';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥You lost the game😫';
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😅too low😏';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥You lost the game😫';
      document.querySelector('.score').textContent = 0;
    }
  }
});
