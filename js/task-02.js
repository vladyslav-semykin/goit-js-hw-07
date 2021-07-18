const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const navEl = document.getElementById("ingredients");

ingredients.map((value) => {
  const newArr = [];
  const linkEl = document.createElement("li");
  linkEl.textContent = value;
  newArr.push(linkEl);
  navEl.append(...newArr);
});
