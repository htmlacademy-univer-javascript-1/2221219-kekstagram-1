import { openPhoto } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');
const photosContainer = document.querySelector('.pictures');

const getPhotoElement = function(photo) {
  const clonedPhoto = newPictureTemplate.cloneNode(true);
  clonedPhoto.querySelector('.picture__img').src = photo.url;
  clonedPhoto.querySelector('.picture__comments').textContent = photo.comments.length;
  clonedPhoto.querySelector('.picture__likes').textContent = photo.likes;
  clonedPhoto.addEventListener('click', () => {
    openPhoto(photo);
  });
  return clonedPhoto;
};

const renderPhotos = function (photos) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < photos.length; i++) {
    fragment.appendChild(getPhotoElement(photos[i]));
  }
  photosContainer.appendChild(fragment);
};

export {renderPhotos};
