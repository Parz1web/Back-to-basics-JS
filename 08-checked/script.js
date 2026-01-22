const myCheckbox = document.getElementById("myCheckbox");
const sberBtn = document.getElementById("SberpayBtn");
const yooKassaBtn = document.getElementById("YouKassaBtn");
const yooMoneyBtn = document.getElementById("YooMoneyBtn");
const mySubmit = document.getElementById("mySubmit");
const checkResult = document.getElementById("checkResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = () => {
  if (myCheckbox.checked) {
    checkResult.textContent = "Чекбокс отмечен!";
  } else {
    checkResult.textContent = "Чекбокс не отмечен!";
  }

  if (sberBtn.checked) {
    paymentResult.textContent = "🟢Вы выбрали оплату Сбер!";
  } else if (yooKassaBtn.checked) {
    paymentResult.textContent = "🟢Вы выбрали оплату ЮКасса!";
  } else if (yooMoneyBtn.checked) {
    paymentResult.textContent = "🟢Вы выбрали оплату ЮMoney!";
  } else {
    paymentResult.textContent = "🟢Выберите способ оплаты!";
  }
};
