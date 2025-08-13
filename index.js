const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const customTipInput = document.getElementById("custom-tip");
const tipAmountDisplay = document.getElementById("tip-amount");
const TotalAmountDisplay = document.getElementById("total-amount");
const tipBtns = document.querySelectorAll(".tip-btn");

let bill = 0;
let tip = 0;
let people = 1;

function calculateTip() {
  if (bill === 0) return;

  const tipAmount = (bill * tip) / 100 / people;
  const totalAmount = tipAmount + bill;

  tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  TotalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
}

billInput.addEventListener("input", (e) => {
  bill = parseFloat(e.target.value) || 0;

  calculateTip();
});

peopleInput.addEventListener("input", (e) => {
  people = parseInt(e.target.value) || 1;

  calculateTip();
});

tipBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    tip = parseFloat(btn.dataset.tip) || 0;
    customTipInput.value = "";

    calculateTip();
  });
});

customTipInput.addEventListener("input", (e) => {
  tipBtns.forEach((b) => b.classList.remove("active"));
  tip = parseFloat(e.target.value) || 0;

  calculateTip();
});

// Reset functionality
document.getElementById("reset-btn").addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";
  tipAmountDisplay.textContent = "$0.00";
  TotalAmountDisplay.textContent = "$0.00";
  
  bill = 0;
  tip = 0;
  people = 1;

  tipBtns.forEach((b) => b.classList.remove("active"));
});