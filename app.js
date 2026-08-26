const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const swapIcon = document.querySelector(".swap-icon-container");
const amountInput = document.querySelector(".amount input");
const form = document.querySelector("form");

swapIcon.setAttribute("role", "button");
swapIcon.setAttribute("tabindex", "0");
swapIcon.setAttribute("aria-label", "Swap currencies");

for (const select of dropdowns) {
  for (const currCode in countryList) {
    const newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = true;
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = true;
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  const amount = Number(amountInput.value);
  if (!Number.isFinite(amount) || amount <= 0) {
    msg.innerText = "Enter an amount greater than 0.";
    amountInput.focus();
    return;
  }

  msg.innerText = "Loading exchange rate...";
  btn.disabled = true;
  try {
    let rate = 1;
    if (fromCurr.value !== toCurr.value) {
      const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Currency API returned ${response.status}`);
      const data = await response.json();
      rate = data[fromCurr.value.toLowerCase()]?.[toCurr.value.toLowerCase()];
      if (!Number.isFinite(rate)) throw new Error("Exchange rate is unavailable");
    }
    msg.innerText = `${amount} ${fromCurr.value} = ${(amount * rate).toFixed(2)} ${toCurr.value}`;
  } catch (error) {
    msg.innerText = "Unable to load the exchange rate. Please try again.";
    console.error(error);
  } finally {
    btn.disabled = false;
  }
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

swapIcon.addEventListener("click", () => {
  let tempCode = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = tempCode;
  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});

swapIcon.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    swapIcon.click();
  }
});