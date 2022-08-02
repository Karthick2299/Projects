const showNumber = document.getElementById("show-number");

let count = 0;

showNumber.innerHTML = 0;

function increase() {
  let increment = ++count;
  showNumber.innerHTML = increment;
}

function decrease() {
  let decrement = --count;
  showNumber.innerHTML = decrement;
}

function reset() {
  count = 0;
  showNumber.innerHTML = 0;
}
