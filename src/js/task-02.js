const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newLi = document.createElement('li');
console.log(newLi);
newLi.textContent = ingredients;
newLi.classList.add('item');

const elemUl = document.querySelector('ul#ingredients');
elemUl.appendChild(newLi);