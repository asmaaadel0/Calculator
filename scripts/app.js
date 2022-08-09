const resultBox = document.getElementById("result");
const numberFieldElements = document.querySelectorAll("#calc-box li");
let firstNum, secondNum, operation,result;
const calcData = [

  [
    {
      id: "ac",
      value: 0,
    },
    { id: "del", value: 0 },
    { id: "/", value: 0 },
  ],
  [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: "*", value: 0 },
  ],
  [
    { id: 4, value: 0 },
    { id: 5, value: 0 },
    { id: 6, value: 0 },
    { id: "+", value: 0 },
  ],
  [
    { id: 7, value: 0 },
    { id: 8, value: 0 },
    { id: 9, value: 0 },
    { id: "-", value: 0 },
  ],
  [
    { id: ".", value: 0 },
    { id: "=", value: 0 },
    { id: 0, value: 0 },
  ],
];
for (const fieldElement of numberFieldElements) {
  fieldElement.addEventListener("click", selectNumberField);
}

cancel.addEventListener("click", offName);
