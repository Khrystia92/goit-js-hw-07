const counterValue = document.querySelector("#value");
const buttons = {
    buttonDec: document.querySelector('button[data-action="decrement"]'),
    buttonInc: document.querySelector('button[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
    currentValue: 0,
}
function increment(){
    buttons.currentValue += 1;
    getValue();
}
 function decrement(){
    buttons.currentValue -= 1;
    getValue();
}
function getValue() {
    buttons.counterValue.textContent = buttons.currentValue;
}
buttons.buttonInc.addEventListener('click', increment);
buttons.buttonDec.addEventListener('click', decrement);