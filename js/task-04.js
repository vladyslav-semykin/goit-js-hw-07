let counterValue = 0;

const decrementBtnEl = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const incrementBtnEl = document.querySelector(
  '#counter button[data-action="increment"]',
);
const counterEl = document.querySelector('#counter #value')

const onClickDecrement = () => {
	counterValue--;
	counterEl.textContent = counterValue;
};
const onClickIncrement = () => {
	counterValue++;
	counterEl.textContent = counterValue;
};

decrementBtnEl.addEventListener('click', onClickDecrement);

incrementBtnEl.addEventListener('click', onClickIncrement);