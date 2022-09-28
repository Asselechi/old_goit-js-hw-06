const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputElText);

function inputElText(event) {
    console.log(event.currentTarget.value);
    outputEl.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
        outputEl.textContent = 'Anonymous';
    }
};
 



