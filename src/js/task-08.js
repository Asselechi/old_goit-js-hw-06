
const form = document.querySelector('.login-form');

const inputEl = document.querySelectorAll('input');
console.log(inputEl);

form.addEventListener('submit', formSubmit);


function formSubmit(event) {
    event.preventDefault();

    const elements = new FormData(event.currentTarget);
    console.log(elements);

    
    

};
//     inputEl.forEach(input => {
//     if (input.value === '') {
//         alert('All fields should be filled')
//     }
// });

 

