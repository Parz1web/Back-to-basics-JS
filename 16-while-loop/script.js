//Практические примеры

function startProcessing() {
  //Получаем элементы страницы
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  const resultText = document.getElementById("result");

  //Создаем массив чисел
  const items = [...Array(21).keys()].slice(1);

  let proceed = 0;
  const total = items.length;

  function processBatch() {
    const batchSize = 1;
    let counter = 0;

    while (counter < batchSize && proceed < total) {
      let item = items[proceed];
      try {
        processItem(item);

        proceed++;
        counter++;

        let resultPercentage = Math.floor((proceed / total) * 100);
        progressBar.value = resultPercentage;
        progressText.textContent = `${resultPercentage}%`;
      } catch (error) {
        console.log(`Ошбика при обработке элемента: ${item}`, error);
        proceed++;
      }
    }
    if (proceed < total) {
      setTimeout(processBatch, 50);
    }
  }

  processBatch();
}

async function processItem(item) {
  await new Promise((resolve) => {
    setTimeout(resolve, 50);
  });
  console.log(`Обработан элемент: ${item}`);
}

//Пример с do while

do {
  number = prompt("Введите число");
} while (number <= 0 || isNaN(number));
