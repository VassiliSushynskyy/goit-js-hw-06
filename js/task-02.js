const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients')

const markEl = ingredients.map(ingredient => {
  
  const ingredientItem = document.createElement('li');
ingredientItem.classList.add('item');
  ingredientItem.textContent = ingredient
  return ingredientItem;
})
listRef.append(...markEl);