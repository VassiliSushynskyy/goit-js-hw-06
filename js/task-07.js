const refs = {
    inputRef: document.querySelector('#font-size-control'),
    outputRef: document.querySelector('#text')
};
refs.inputRef.addEventListener('input', fontSizeModific);
function fontSizeModific(event) {
    const size = event.currentTarget.value
   refs.outputRef.style.fontSize = size + `px`;
    
};
refs.outputRef.style.fontSize = refs.inputRef.value + 'px';


