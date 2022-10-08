// Случайное число в диапазоне [a, b), при a > b
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};
const getRandomElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];
//const checkStringLength = (string, maxLength) => string.length <= maxLength;

const photoNumber = 25;
const likesNumber = {min: 15, max: 200};
//const commentMaxLength = 140;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Alexandr S.', 'Jadzia D.', 'Кекс', 'Джулиан', 'Ким', 'Елена', 'Вика', 'Odo', 'Арсений', 'Дмитрий'];
const DESCRIPTION = [
  'Хотелось бы пожелать доброго утра, но когда утро было добрым',
  'Да, да! В это зеркало я буду фоткаться до тех пор, пока не состарюсь',
  'Почему бы в такой прекрасный день не поделиться своим фото… Как будто я так редко это делаю',
  'Work, then work harder.',
  'Одна голова хорошо, а две тоже ничего придумать не могут',
  'No matter what I do, I like everything',
  'Ещё один день. Ещё одно фото',
  'Только ты — рыба моей мечты <3',
  'Это про.. ну вы поняли',
  ':/ (Экономим буквы - реагируем смайликами)'];

function generateComment(id) {
  return {
    id: getRandomPositiveInteger(1, 1000),
    avatar: `img/avatar-${id}.svg`,
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES)
  };
}

function generatePhotoObj(id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomElement(DESCRIPTION),
    likes: getRandomPositiveInteger(likesNumber.min , likesNumber.max),
    comments: generateListComments()
  };
}

//Пусть под каждой фотографией можно оставить от 1 до 5 комментариев
function generateListComments() {
  const commentArrayObj = Array.from({length: getRandomPositiveInteger(1, 5)}).map((value, index) => generateComment(index + 1));
  return commentArrayObj;
}

function generateDataDescription(photoNum) {
  const arrayObj = Array.from({length: photoNum}).map((value, index) => generatePhotoObj(index + 1));
  return arrayObj;
}

const dataDescription = generateDataDescription(photoNumber);
// eslint-disable-next-line no-console
console.log(dataDescription);
