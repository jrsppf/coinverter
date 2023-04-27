const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const curernecyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  function calculateFiatToFiat() {
    const currency_one = currencyEl_one.value;
    const currency_two = curernecyEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then((res) => res.json())
      .then((data) => {
        const rate = data.rates[currency_two];

        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
      });
  }
}

currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
curernecyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = curernecyEl_two.value;
  curernecyEl_two.value = temp;
  calculate();
});
