const root = document.getElementById("root");

//Получаем элементы страницы
// const createPrompt = (rootElement) => {
//   let userName = window.prompt("Как Вас зовут?", "Ян");
//   const resultMessage = document.createElement("p");

//   if (userName !== null) {
//     resultMessage.textContent = `Ваше имя: ${userName}`;
//   } else {
//     resultMessage.textContent = `Вы отменили ввод`;
//   }
//   rootElement.appendChild(resultMessage);
// };

// createPrompt(root);

const formEl = document.querySelector("#userForm");
const resetEl = document.querySelector("#reset");

const resultEl = document.querySelector("#result");
const headingName = document.querySelector("h2 span");

//Функции для обработки
const formSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get("name");

  if (!name) {
    alert("Введите имя!");
    return;
  }

  let newParagraph = document.createElement("p");

  newParagraph.textContent = name;
  resultEl.prepend(newParagraph);

  headingName.textContent = ` (${name})`;

  e.target.reset();

  console.log("Форма отправлена");
};

const appReset = () => {
  resultEl.textContent = "";

  console.clear();

  console.log("Форма очищена");
  console.log("Консоль очищена");
};

//Накидываем события
formEl.addEventListener("submit", formSubmit);

resetEl.addEventListener("click", appReset);
