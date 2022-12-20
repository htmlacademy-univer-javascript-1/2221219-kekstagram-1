import { getData } from './api.js';
import { renderLoadError } from './thumbnail.js';
import { renderThumbnails } from './thumbnail.js';
import './form.js';

getData((photos) => {
  renderThumbnails(photos);
},
() => {
  renderLoadError('Не удалось загрузить фотографии(');
});
