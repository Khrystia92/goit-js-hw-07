const addText = {
    inputText: document.querySelector('input#name-input'),
    spanText: document.querySelector('span#name-output')
};
addText.inputText.addEventListener('input', getTextInput);
function getTextInput(event) {
    addText.inputText.value
        ? addText.spanText.textContent = event.target.value
        : addText.spanText.textContent = 'незнакомец';
};
