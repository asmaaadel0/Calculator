const resultBox = document.getElementById("result");
const numberFieldElements = document.querySelectorAll("#calc-box li");
let firstNum, secondNum, operation, result;
const calcData = [
  ["ac", "del", "/"],
  [1, 2, 3, "*"],
  [4, 5, 6, "+"],
  [7, 8, 9, "-"],
  [".", "=", '0'],
];

for (const fieldElement of numberFieldElements) {
  fieldElement.addEventListener("click", selectNumberField);
}
