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

export { renderPhotos };

// import {openBigPictureWindow} from './big-picture.js';

// const picturesContainerElement = document.querySelector('.pictures');
// const picturesTemplate = document.querySelector('#picture').content.querySelector('a');

// function renderSimilarList (similarPhotos) {
//   const similarListFragment = document.createDocumentFragment();

//   similarPhotos.forEach(({url, likes, comments, description}) => {
//     const photosElement = picturesTemplate.cloneNode(true);
//     photosElement.querySelector('img').setAttribute('src', url);
//     photosElement.querySelector('.picture__likes').textContent = likes;
//     photosElement.querySelector('.picture__comments').textContent = comments.length;
//     photosElement.querySelector('img').addEventListener('click', () => {
//       openBigPictureWindow({url, likes, comments, description});
//     });
//     similarListFragment.append(photosElement);
//   });

//   picturesContainerElement.append(similarListFragment);
// }

// export {renderSimilarList};


// import {dataDescription} from './data.js';
// import {openBigPictureWindow} from './big-picture.js';

// const picturesContainerElement = document.querySelector('.pictures');
// const picturesTemplate = document.querySelector('#picture').content.querySelector('a');

// const similarPhotos = dataDescription();

// const similarListFragment = document.createDocumentFragment();

// similarPhotos.forEach(({url, likes, comments, description}) => {
//   const photosElement = picturesTemplate.cloneNode(true);
//   photosElement.querySelector('img').setAttribute('src', url);
//   photosElement.querySelector('.picture__likes').textContent = likes;
//   photosElement.querySelector('.picture__comments').textContent = comments.length;
//   photosElement.querySelector('img').addEventListener('click', () => {
//     openBigPictureWindow({url, likes, comments, description});
//   });
//   similarListFragment.append(photosElement);
// });

// picturesContainerElement.append(similarListFragment);


// // import { openPhoto } from './big-picture.js';

// // const pictureTemplate = document.querySelector('#picture').content;
// // const newPictureTemplate = pictureTemplate.querySelector('.picture');
// // const photosContainer = document.querySelector('.pictures');

// // const getPhotoElement = function(photo) {
// //   const clonedPhoto = newPictureTemplate.cloneNode(true);
// //   clonedPhoto.querySelector('.picture__img').src = photo.url;
// //   clonedPhoto.querySelector('.picture__comments').textContent = photo.comments.length;
// //   clonedPhoto.querySelector('.picture__likes').textContent = photo.likes;
// //   clonedPhoto.addEventListener('click', () => {
// //     openPhoto(photo);
// //   });
// //   return clonedPhoto;
// // };

// // const renderPhotos = function (photos) {
// //   const fragment = document.createDocumentFragment();
// //   for (let i = 0; i < photos.length; i++) {
// //     fragment.appendChild(getPhotoElement(photos[i]));
// //   }
// //   photosContainer.appendChild(fragment);
// // };

// // export {renderPhotos};
