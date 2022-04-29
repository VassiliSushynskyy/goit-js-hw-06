function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.querySelector('body'),
  spanEl: document.querySelector('.color'),
  buttonChangeColor: document.querySelector('.change-color')
}
refs.buttonChangeColor.addEventListener('click', chengeColorBody);

function chengeColorBody() {
  const color = getRandomHexColor();
  refs.spanEl.textContent = color;
  refs.body.style.backgroundColor = color;
};
