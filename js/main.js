// eslint-disable-next-line no-shadow
function getRandomIntInclusive(start, finish) {
  start = Math.ceil(start);
  finish = Math.floor(finish);
  return Math.floor(Math.random() * (finish - start + 1)) + start;
} //Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// eslint-disable-next-line no-shadow
function checkMaxLength(str, maxLen) {
  return str.length <= maxLen;
}

//Код ниже предназначен по большей части для ручной проверки
let start;
let finish;
let str;
let maxLen;

// eslint-disable-next-line no-console
console.log(getRandomIntInclusive(start, finish));
// eslint-disable-next-line no-console
console.log(checkMaxLength(str, maxLen));
