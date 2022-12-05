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

export { getRandomElement, getRandomPositiveInteger, createID, createURL };
