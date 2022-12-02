import { dataDescription } from './data.js';
import { createPhotos } from './thumbnail.js';

const arrPhotos = dataDescription();
createPhotos(arrPhotos);
