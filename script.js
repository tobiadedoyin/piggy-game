'use strict';
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = 0;

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document
    .querySelector('.player--${activePlayer}')
    .classList.toggle('player--active');
  document
    .querySelector('.player--${activePlayer}')
    .classList.toggle('player--active ');
};

btnRoll.addEventListener('click', () => {
  const dice = Math.ceil(Math.random() * 6);
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to player two
    switchPlayer();
  }
});

btnHold.addEventListener('click', () => {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 10) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    //switch player
    switchPlayer();
  }
});
