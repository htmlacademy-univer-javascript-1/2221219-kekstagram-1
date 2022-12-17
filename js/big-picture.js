import { isEscapeKey } from './util.js';

const MAX_COMMENTS_COUNT = 5;

const bigPictureWindow = document.querySelector('.big-picture');
const closeButton = bigPictureWindow.querySelector('#picture-cancel');
const loadCommentsButton = bigPictureWindow.querySelector('.social__comments-loader');
const commentsList = bigPictureWindow.querySelector('.social__comments');
const commentTemplate = bigPictureWindow.querySelector('.social__comment');
const currentCommentsCount = bigPictureWindow.querySelector('.social__comment-count');

let commentsCounter = 0;

const fillComments = (comments) => {
  comments.slice(commentsCounter, commentsCounter + MAX_COMMENTS_COUNT).forEach((comment) => {
    const thisComment = commentTemplate.cloneNode(true);
    const image = thisComment.querySelector('.social__picture');
    image.src = comment.avatar;
    image.alt = comment.name;
    thisComment.querySelector('.social__text').textContent = comment.message;
    commentsList.append(thisComment);
    commentsCounter++;
  });
  currentCommentsCount.innerHTML = `${commentsCounter} из <span class="comments-count">${comments.length}</span> комментариев`;
  if (commentsCounter === comments.length) {
    loadCommentsButton.classList.add('hidden');
  }
  else {
    loadCommentsButton.classList.remove('hidden');
  }
};

const renderPhoto = (onePicture) => {
  bigPictureWindow.querySelector('.big-picture__img img').src = onePicture.url;
  bigPictureWindow.querySelector('.social__caption').textContent = onePicture.description;
  bigPictureWindow.querySelector('.likes-count').textContent = onePicture.likes;
  commentsList.innerHTML = '';
  fillComments(onePicture.comments);
  loadCommentsButton.onclick = () => fillComments(onePicture.comments);
};

const closeByEscape = (evt) => {
  if (isEscapeKey(evt)){
    document.body.classList.remove('modal-open');
    bigPictureWindow.classList.add('hidden');
    document.removeEventListener('keydown', () => closeByEscape);
    commentsCounter = 0;
  }
};

const closePhoto = () => {
  document.body.classList.remove('modal-open');
  bigPictureWindow.classList.add('hidden');
  document.removeEventListener('keydown', closeByEscape);
  commentsCounter = 0;
};

const openPhoto = (photo) => {
  document.body.classList.add('modal-open');
  bigPictureWindow.classList.remove('hidden');
  renderPhoto(photo);
  closeButton.addEventListener('click', closePhoto);
  document.addEventListener('keydown', closeByEscape);
};

export { openPhoto };
