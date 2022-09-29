function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
console.log(bodyEl);

const buttonEl = document.querySelector('button.change-color');
console.log(buttonEl);

const spanEl = document.querySelector('span.color');
console.log(spanEl);

buttonEl.addEventListener('click', changeColor);

function changeColor () {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
}