const inputFontSize = document.querySelector('input#font-size-control');
const textSize = document.querySelector('span#text');

inputFontSize.addEventListener('input', e => textSize.style.fontSize = e.currentTarget.value + 'px');