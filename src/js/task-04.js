
let counterValue = 0;
console.log(counterValue);
const display = document.querySelector('#value');

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener('click', offClick);
increment.addEventListener('click', onClick);


function offClick () {
    counterValue--;
    display.textContent = counterValue;
}

function onClick () {
    counterValue++;
    display.textContent = counterValue;
};