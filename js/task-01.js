const navEl = document.querySelector("#categories");

const navLinksEl = navEl.querySelectorAll(".item");
console.log(`В списке ${navLinksEl.length} категории`);

navLinksEl.forEach((caregory) => {
  console.log(`
		Категория: ${caregory.firstElementChild.textContent}
		Количество элементов: ${caregory.firstElementChild.nextElementSibling.children.length}
	`);
});
