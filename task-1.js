const findItem = document.querySelectorAll('.item')
console.log(`В списке ${findItem.length} категории`)
findItem.forEach(value =>
    console.log(`Категория: ${value.firstElementChild.textContent},`,
    `Количество элементов: ${value.querySelectorAll('li').length}`
    ))