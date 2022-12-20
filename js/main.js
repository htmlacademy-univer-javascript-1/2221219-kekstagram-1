import { getData } from './api.js';
import { applyFilters, renderLoadError, renderThumbnails } from './thumbnail.js';
import { debounce } from './util.js';
import './form.js';

const RENDER_DELAY = 500;

getData((photos) => {
  renderThumbnails(photos);
  applyFilters(
    debounce(() => renderThumbnails(photos)),
    RENDER_DELAY
  );
},
() => {
  renderLoadError('Не удалось загрузить фотографии(');
});
