'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// Implementation of aagin

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👌 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Implementing highscore functionality

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // end of highscore implementation

    document.querySelector('.number').textContent = secretNumber;

    // When number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🙀 Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🙀 Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
