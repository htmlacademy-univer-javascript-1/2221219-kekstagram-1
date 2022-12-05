const bigPictureWindow = document.querySelector('.big-picture');
const closeButton = bigPictureWindow.querySelector('#picture-cancel');

const fillComments = (comments) => {
  const commentsList = bigPictureWindow.querySelector('.social__comments');
  const commentTemplate = bigPictureWindow.querySelector('.social__comment');
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const cloneComment = commentTemplate.cloneNode(true);
    const image = cloneComment.querySelector('.social__picture');
    image.src = comment.avatar;
    image.alt = comment.name;
    cloneComment.querySelector('.social__text').textContent = comment.message;
    fragment.appendChild(cloneComment);
  });
  commentsList.innerHTML = '';
  commentsList.append(fragment);
};

const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    document.body.classList.remove('modal-open');
    bigPictureWindow.classList.add('hidden');
    document.removeEventListener('keydown', () => closeByEscape);
  }
};

const closePhoto = () => {
  document.body.classList.remove('modal-open');
  bigPictureWindow.classList.add('hidden');
  document.removeEventListener('click', () => closeByEscape);
};

const openPhoto = (onePicture) => {
  document.body.classList.add('modal-open');
  bigPictureWindow.classList.remove('hidden');
  bigPictureWindow.querySelector('.big-picture__img img').src = onePicture.url;
  bigPictureWindow.querySelector('.likes-count').textContent = onePicture.likes;
  bigPictureWindow.querySelector('.comments-count').textContent = onePicture.comments.length;
  bigPictureWindow.querySelector('.social__caption').textContent = onePicture.description;
  fillComments(onePicture.comments);
  closeButton.addEventListener('click', closePhoto);
  document.addEventListener('keydown', closeByEscape);
};

export {openPhoto};
