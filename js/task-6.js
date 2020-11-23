const inputVal = document.querySelector('input#validation-input');
inputVal.addEventListener('blur', e => {
    if (e.target.value.length < inputVal.dataset.length || e.target.value.length > inputVal.dataset.length) {
        inputVal.classList.add('invalid');
        inputVal.classList.remove('valid');
    }
    else {
        inputVal.classList.add('valid');
        inputVal.classList.remove('invalid');
    }
}
)