import { dataDescription } from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const photosContainer = document.querySelector('.pictures');

const getPhotoElement = function({url, likes, comments}) {
  const clonedPhoto = newPictureTemplate.cloneNode(true);
  clonedPhoto.querySelector('.picture__img').src = url;
  clonedPhoto.querySelector('.picture__comments').textContent = comments.length;
  clonedPhoto.querySelector('.picture__likes').textContent = likes;

  return clonedPhoto;
};

const renderPhotos = function (photos) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < photos.length; i++) {
    fragment.appendChild(getPhotoElement(photos[i]));
  }
  photosContainer.appendChild(fragment);
};

renderPhotos(dataDescription);
export {renderPhotos};
