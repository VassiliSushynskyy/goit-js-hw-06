
  const  inputRef= document.querySelector("#validation-input") 
function inputValider(ev) {
    const inputLength = ev.currentTarget.value.length;
    const dataLength = Number(inputRef.dataset.length);
if (inputLength === dataLength) {
    inputRef.setAttribute('class', 'valid');
  } else {
    inputRef.setAttribute('class', 'invalid');
  }
     
};

inputRef.addEventListener('blur', inputValider);



