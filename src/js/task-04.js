
const counterValue = document.querySelector('#value');
console.log(counterValue);


const decrement = document.querySelector('#counter').firstElementChild;
console.log(decrement);
const increment = document.querySelector('#counter').lastElementChild;
console.log(increment);

decrement.addEventListener('click', offClick);
increment.addEventListener('click', onClick);

function onClick (event) {
    counterValue
};
function offClick (event) {
    
}
// let valueEl = Number(document.querySelector('#value').textContent);

// let counterValue = document.querySelector('#value');

// const dekrBtn = document.querySelector('#counter').firstElementChild;
// const inkrBtn = document.querySelector('#counter').lastElementChild;

// inkrBtn.addEventListener('click', event => {
//   // console.log("Вешаю слушателя события на целевую кнопку");
//   valueEl += 1;

//   counterValue.innerText = valueEl;
// });

// dekrBtn.addEventListener('click', event => {
//   // console.log("Снимаю слушателя события с целевой кнопки");
//   valueEl -= 1;

//   counterValue.innerText = valueEl;
//   // console.log("counterValue", counterValue);
// });
