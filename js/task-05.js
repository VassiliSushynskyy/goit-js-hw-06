const refs = {
    inputText: document.querySelector('#name-input'),
    outputText: document.querySelector('#name-output')
};
refs.inputText.addEventListener('input',inputChenge)
function inputChenge(ev) {
    const isFull = ev.currentTarget.value;
  refs.outputText.textContent = isFull ? isFull : "Anonymous";
}