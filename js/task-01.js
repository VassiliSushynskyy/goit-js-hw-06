const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories:`,itemsEl.length);
itemsEl.forEach(item => {
    console.log(`Category:${item.querySelector('h2').textContent}
   Elements:${item.querySelectorAll('li').length}`)
})