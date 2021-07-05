const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const navEl = document.getElementById('ingredients');

const arr = [];
ingredients.forEach( value => {
  const linkEl = document.createElement('li');
  linkEl.textContent = value;
  arr.push(linkEl.outerHTML);
});
const stringLinks = arr.join('');
navEl.insertAdjacentHTML('afterbegin', stringLinks);