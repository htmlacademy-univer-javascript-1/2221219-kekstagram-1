import { dataDescription } from './data.js';
import { renderPhotos } from './thumbnail.js';
import './form.js';
import './form-validate.js';

const arr = dataDescription();
renderPhotos(arr);
