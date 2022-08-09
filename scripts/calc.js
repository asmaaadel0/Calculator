function calcResult() {
  switch (operation) {
    case "+":
      result = parseFloat(firstNum) + parseFloat(secondNum);
      break;
    case "-":
      result = parseFloat(firstNum) - parseFloat(secondNum);
      break;
    case "*":
      result = parseFloat(firstNum) * parseFloat(secondNum);
      break;
    case "/":
      result = parseFloat(firstNum) / parseFloat(secondNum);
      break;
    default:
  }
  resultBox.textContent = result;
  console.log(firstNum + " " + secondNum + " " + result);
}

function selectNumberField(event) {
  if (event.target.tagName != "LI") return;
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;
  console.log(selectedColumn + " " + selectedColumn);
  if (calcData[selectedRow][selectedColumn] === "ac") {
    resultBox.textContent = "";
    return;
  } else if (calcData[selectedRow][selectedColumn] === "del") {
    const delResultBoxChar = resultBox.textContent.slice(0, -1);
    resultBox.textContent = delResultBoxChar;
  } else if (calcData[selectedRow][selectedColumn] === "=") {
    secondNum = resultBox.textContent;
    calcResult();
    // resultBox.textContent = "";
  } else if (
    calcData[selectedRow][selectedColumn] === "+" ||
    calcData[selectedRow][selectedColumn] === "-" ||
    calcData[selectedRow][selectedColumn] === "*" ||
    calcData[selectedRow][selectedColumn] === "/"
  ) {
    switch (calcData[selectedRow][selectedColumn]) {
      case "+":
        firstNum = resultBox.textContent;
        resultBox.textContent = "";
        operation = "+";
        break;
      case "-":
        firstNum = resultBox.textContent;
        resultBox.textContent = "";
        operation = "-";
        break;
      case "*":
        firstNum = resultBox.textContent;
        resultBox.textContent = "";
        operation = "*";
        break;
      case "/":
        firstNum = resultBox.textContent;
        resultBox.textContent = "";
        operation = "/";
        break;
    }
  } else {
    console.log(calcData[selectedRow][selectedColumn]);
    resultBox.textContent += calcData[selectedRow][selectedColumn];
  }
}
