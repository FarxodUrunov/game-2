'use strict';

let rondom = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const bg = document.querySelector('body');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
let s = 20;
let h = 0;
const again = document.querySelector('.again');

let record = [];

function init() {
  number.textContent = '?';
  bg.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  s = 20;
  h = 0;
  score.textContent = 20;
  highscore.textContent = 0;
  guess.value = '';
  check.value = '';
  rondom = Math.trunc(Math.random() * 20) + 1;
}

function myFun() {
  console.log(rondom);

  if (guess.value == rondom) {
    message.innerHTML = 'ok';
    bg.style.backgroundColor = 'green';
    number.innerHTML = guess.value;
    s = s - 1;
    score.textContent = s;
    h = h + 1;
    highscore.textContent = h;

    //   localStorage
    record.push(+highscore.textContent);
  } else if (guess.value > rondom) {
    message.innerHTML = 'katta';
    s = s - 1;
    score.textContent = s;
    h = h + 1;
    highscore.textContent = h;
  } else if (guess.value < rondom) {
    message.innerHTML = 'kichik';
    s = s - 1;
    score.textContent = s;
    h = h + 1;
    highscore.textContent = h;
  }
}

check.addEventListener('click', myFun);
document.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    myFun();
  }
});

const label = (document.querySelector('.label-highscore').style.marginBottom =
  '30px');
let records = document.querySelector('.record');

again.addEventListener('click', function () {
  init();
  records.innerHTML = Math.min(...record);
});
