const display = document.querySelector(".display-value");

const actions = {
  increase() {
    display.textContent++;
  },
  reset() {
    display.textContent = 0;
  },
  decrease() {
    display.textContent -= display.textContent > 0;
  },
};

document
  .querySelector(".counter-pannel")
  .addEventListener("click", ({ target }) => {
    actions[target.classList[0]]?.();
  });
