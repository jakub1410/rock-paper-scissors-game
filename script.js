'use strict';
//Rock Paper Scissor
// What we need to have?
//1. Function for computer to choose between r/p/s
//2. Input where we can choose our weapon
//3. How to implement what computer can choose? maybe math between 1-10?

// Computer move
let player = 0;
let pc = 0;
const computerMove = Math.floor(Math.random() * 3) + 1;
const computerPlay = function (n) {
  n = computerMove;
  if (n == 1) {
    return 'rock';
  } else if (n == 2) {
    return 'paper';
  } else if (n == 3) {
    return 'scissors';
  }
};
const playerSelection = '';
const playRound = function (playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = prompt('').toLowerCase();
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('BANG');
    return 'human';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('BANG');
    return 'human';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('BANG');
    return 'human';
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    console.log('BUZZ');
    return 'pc';
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    console.log('BUZZ');
    return 'pc';
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    console.log('BUZZ');
    return 'pc';
  } else {
    console.log('oops');
    return "It's a tie";
  }
};

//console.log(playRound(playerSelection, computerPlay));

const game = function (playRound) {
  playRound = playRound();
  if (playRound === 'human') {
    console.log('Human win!');
    player += 1;
    if (player == 3) {
      return console.log('End Game');
    }
  } else if (playRound === 'pc') {
    console.log('PC win!');
    pc += 1;
    if (pc == 3) {
      return console.log('End Game, you lost humanity');
    }
  }
};
for (let i = 0; i < 10; i++) {
  if (player === 3 || pc === 3) break;
  game(playRound);
}
