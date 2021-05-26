const form = document.querySelector("[data-form]");
const input = document.querySelector("[data-input]");
const submit = document.querySelector("[data-submit]");
const error = document.querySelector(".error");
const error__mobile = document.querySelector(".error__mobile");



const testEmail = (event) => {
    event.preventDefault();
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexEmail.test(input.value))  {
        if(screen.width > 600) {
            error.classList.add('active');
        } else {
            error__mobile.classList.add('active');
        }
        input.classList.add('border__red__error');
    } else {
        error.classList.remove('active');
        input.classList.remove("border__red__error");
        error__mobile.remove('active');
    }
}

submit.addEventListener("click", testEmail);
