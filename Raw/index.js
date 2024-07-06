const tipsBtn = document.querySelectorAll(".tip-btn");
const tipValue = document.querySelector(".tip-value");
const totalValue = document.querySelector(".total-value");
const reset = document.querySelector(".reset-btn");
let tipSelected = "";
let bill = "";
let numberOfPeople = "";

function tipSelector(ele) {
  tipSelected = ele.value;
  for (let i = 0; i < tipsBtn.length; i++) {
    tipsBtn[i].classList.remove("active");
  }
  ele.classList.add("active");
}

window.tipSelector = tipSelector; // Ensure the function is accessible globally

function customTip(ele) {
  customT = prompt("Enter the tip you want to give: ");
  tipSelected = customT;
}

function billValue(val) {
  bill = val;
}

function people(val) {
  numberOfPeople = val;
}

function calculate() {
  let tip =
    (parseInt(tipSelected) * parseFloat(bill)) /
    (parseInt(numberOfPeople) * 100).toPrecision(4);
  let total = ((tip + parseFloat(bill)) / parseInt(numberOfPeople)).toPrecision(
    4
  );
  console.log(tip);
  tipValue.innerHTML = `${tip}`;
  totalValue.innerHTML = `${total}`;
}

reset.addEventListener("click", () => {
  location.reload();
});
