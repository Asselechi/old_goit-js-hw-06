
const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);


function formSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);
    
    formData.forEach((email, password) => {
        
    });
}
// дальше не знаю...

