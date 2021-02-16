const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

let ingrRef = ingredients.map((value) =>
{
  let item = document.createElement('li');
  item.textContent = value;
  return item;
});
const getNodeRefToString = function (nodesRef) {
return nodesRef.map(element => element.outerHTML).join('');
}    
document.querySelector("#ingredients").insertAdjacentHTML('afterbegin',getNodeRefToString(ingrRef));
