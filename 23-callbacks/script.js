function cookSoup(callback) {
  console.log("Ставим воду на плиту...");

  setTimeout(() => {
    console.log("Вода закипела");
    const items = ["Морковь", "Лук", "Чеснок"];
    callback(items);
  }, 2000);
}

function addVegetables(vegetables) {
  console.log(`Добавляем овощи: ${vegetables.join(", ")}`);
}

// cookSoup(addVegetables);

// Практическое задание

const start = document.querySelector("#startBtn");
const messageParagraph = document.querySelector("#message");

function waitAndShow(callback) {
  messageParagraph.textContent = "Ждем";
  setTimeout(() => {
    callback();
  }, 2000);
}

function showDone() {
  messageParagraph.textContent = "Готово";
}
start.addEventListener("click", () => {
  waitAndShow(showDone);
});

//Функция для загрузки постов с API

const loadBtn = document.getElementById("downloadBtn");
const output = document.getElementById("output");

function getPosts(callback) {
  console.log("Запрашиваем посты...");
  document.getElementById("output").textContent = "Загружаем...";

  fetch("https://agragregra.github.io/api/data-simple.json")
    .then((response) => {
      if (!response.ok) throw new Error("Ошибка загрузки");
      return response.json();
    })
    .then((data) => {
      callback(data.posts);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function showPosts(posts) {
  if (posts.length === 0) {
    output.textContent = "Посты не найдены!";
    return;
  }
  console.log(posts);
  const html = `
  ${posts
    .map((element) => {
      return `<div class='item'>
        <h2>${element.title}</h2>
        <p>${element.body}</p>
        <img src="${element.image}" alt="${element.title}">
    </div>`;
    })
    .join("")}
  `;

  output.innerHTML = html;

  posts.forEach((post) => {
    console.log(
      `ID: ${post.id} \n Title: ${post.title} \n Текст: ${post.body} \nImageUrl: ${post.image}`,
    );
  });
}

loadBtn.addEventListener("click", () => getPosts(showPosts));
