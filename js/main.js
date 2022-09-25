/**
 * Функция, возвращающая случайное целое число из переданного диапазона включительно.
 * Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {number} start - первое число диапазона
 * @param {number} finish - последнее число диапазона
 * @returns {number} - случайное число из заданного диапазона
 */
function getRandomIntInclusive(start, finish) {
  if (start < 0 || finish >= start) {
    throw {name : 'Invalid arguments', message : 'You pussed invalid arguments'};
  }

  start = Math.ceil(start);
  finish = Math.floor(finish);
  return Math.floor(Math.random() * (finish - start + 1)) + start;
}

getRandomIntInclusive(-1, 20);

/**
 * Функция для проверки максимальной длины строки.
 * @param {object} str - проверяемая строка
 * @param {number} maxLen - максимальная длина строки
 * @returns {boolean} - true - строка подходит по длине, false - не подходит
 */
function checkMaxLength(str, maxLen) {
  str = String(str);
  return str.length <= maxLen;
}

checkMaxLength('qwertyuiopasdfghjvb', 140);
