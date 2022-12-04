// Случайное число в диапазоне [a, b], при b > a
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const randomId = function() {
  let newIdElement = 0;
  const arr = [];
  let i = 0;
  while(i <= 25) {
    newIdElement = getRandomPositiveInteger(1, 25);
    if (!arr.includes(newIdElement)) {
      arr.push(newIdElement);
    }
    i = arr.length;
  }
  return arr;
};

const getRandomElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];

export { getRandomElement, getRandomPositiveInteger, randomId };
