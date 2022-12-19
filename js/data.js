import { getRandomElement, getRandomPositiveInteger, createID, createURL } from './util.js';

const PHOTO_COUNT = 25;
const LIKES_COUNT = {min: 15, max: 200};
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Полный восторг',
  'Прекрасно! Именно это мне было нужно',
  'Мой кот одобряет',
  'Собственно, что и требовалось доказать',
  'Довольно умно, стоит сказать',
  'Есть захотелось',
  'Интересная обстановка',
  '))) !!!!',
  '^0^~~'];
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

function generateComment () {
  return {
    id: getRandomPositiveInteger(1, 1000),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES)
  };
}

function generatePhotoObj () {
  return {
    id: createID(),
    url: `photos/${createURL()}.jpg`,
    description: getRandomElement(DESCRIPTION),
    likes: getRandomPositiveInteger(LIKES_COUNT.min , LIKES_COUNT.max),
    comments: generateListComments()
  };
}

//Пусть под каждой фотографией можно оставить от 1 до 25 комментариев
function generateListComments () {
  const commentArrayObj = Array.from({length: getRandomPositiveInteger(1, 25)}).map((value, index) => generateComment(index + 1));
  return commentArrayObj;
}

function generateDataDescription (photoNum) {
  const arrayObj = Array.from({length: photoNum}).map((value, index) => generatePhotoObj(index + 1));
  return arrayObj;
}

const dataDescription = () => generateDataDescription(PHOTO_COUNT);

export { dataDescription };
