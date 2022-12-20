// Случайное число в диапазоне [a, b], при a > b
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

function checkForRepeats (list) {
  const containerForСomparison = {};
  for (const element of list) {
    if (containerForСomparison[element]) {
      return true;
    }
    containerForСomparison[element] = 1;
  }
  return false;
}

const closeModal = (modal, parent) => {
  modal.classList.add('hidden');
  parent.classList.remove('modal-open');
};

const openModal = (modal, parent) => {
  modal.classList.remove('hidden');
  parent.classList.add('modal-open');
};

export { getRandomInteger, openModal, closeModal, checkForRepeats };
