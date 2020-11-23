const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
const listRef = document.querySelector('#ingredients');
const newElement = ingredients.forEach((elm) => 
{const element = document.createElement('li');
element.textContent = elm;
listRef.append(element)
}
    )