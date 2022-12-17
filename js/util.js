// Случайное число в диапазоне [a, b], при a > b
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];
//const checkStringLength = (string, maxLength) => string.length <= maxLength;

let idPhoto = 1;
function createID () {
  return idPhoto++;
}

let url = 1;
function createURL () {
  return url++;
}

const isEscapeKey = (evt) => evt.keyCode === 27;

function checkForRepeats (list) {
  const containerForСomparison = {};
  for (const element of list) {
    if (containerForСomparison[element]) {
      return true;
    }
    containerForСomparison[element] = 1;
  }
  return false;
}

export { getRandomElement, getRandomPositiveInteger, createID, createURL, isEscapeKey, checkForRepeats };
