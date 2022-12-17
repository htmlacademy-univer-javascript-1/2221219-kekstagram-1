import { isEscapeKey } from './util.js';

const form = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const loadImgButtonElement = form.querySelector('#upload-file');
const editingWindow = form.querySelector('.img-upload__overlay');
const editingCloseButtonElement = editingWindow.querySelector('#upload-cancel');
const submitButtonElement = form.querySelector('.img-upload__submit');
const hashtagsInputElement = form.querySelector('input[name="hashtags"]');
const descriptionInputElement = form.querySelector('textarea[name="description"]');


loadImgButtonElement.addEventListener('input', openEditingWindow);

const buttonClickHandler = () => closeEditingWindow();

function buttonKeydownHandler (evt) {
  if (isEscapeKey(evt)) {
    closeEditingWindow();
  }
}

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
}, true);

function validateForm () {
  if (pristine.validate()) {
    submitButtonElement.disabled = false;
  } else {
    submitButtonElement.disabled = true;
  }
}

function closeEditingWindow () {
  editingWindow.classList.add('hidden');
  body.classList.remove('modal-open');

  editingCloseButtonElement.removeEventListener('click', buttonClickHandler);
  document.removeEventListener('keydown', buttonKeydownHandler);
  hashtagsInputElement.removeEventListener('input', validateForm);
  descriptionInputElement.removeEventListener('input', validateForm);
}

function openEditingWindow () {
  editingWindow.classList.remove('hidden');
  body.classList.add('modal-open');

  editingCloseButtonElement.addEventListener('click', buttonClickHandler);
  document.addEventListener('keydown', buttonKeydownHandler);
  hashtagsInputElement.addEventListener('input', validateForm);
  descriptionInputElement.addEventListener('input', validateForm);
}

export { pristine, hashtagsInputElement, descriptionInputElement };
