
const navEl = document.querySelector('#categories');

const navLinksEl = navEl.querySelectorAll('.item');
console.log(`В списке ${navLinksEl.length} категории`);

for (let i = 0; i < navLinksEl.length; i++) {
  const titleEl = navLinksEl[i].firstElementChild;
  const itemsAnimallEl = titleEl.nextElementSibling.children.length;
  console.log(`
		Категория: ${titleEl.innerText}
		Количество элементов: ${itemsAnimallEl}
	`);
}