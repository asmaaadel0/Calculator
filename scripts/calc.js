function calcResult() {
  switch (operation) {
    case "+":
      result =  parseFloat (firstNum) + parseFloat(secondNum);
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
  if (calcData[selectedRow][selectedColumn].id === "ac") {
    for (let i = 0; i < 3; i++) {
      console.log(calcData[0][i].id);
      calcData[0][i].value = 0;
    }
    for (let i = 1; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        console.log(calcData[i][j].id);
        calcData[i][j].value = 0;
      }
    }
    for (let i = 0; i < 3; i++) {
      console.log(calcData[4][i].id);
      calcData[4][i].value = 0;
    }
    resultBox.textContent = "";
    return;
  } else if (calcData[selectedRow][selectedColumn].id === "del") {
    calcData[selectedRow][selectedColumn].value = 1;
    const delResultBoxChar = resultBox.textContent.slice(0, -1);
    resultBox.textContent = delResultBoxChar;
  } else if (calcData[selectedRow][selectedColumn].id === "=") {
    calcData[selectedRow][selectedColumn].value = 1;
    secondNum = resultBox.textContent;
    calcResult();
    // resultBox.textContent = "";
  } else if (
    calcData[selectedRow][selectedColumn].id === "+" ||
    calcData[selectedRow][selectedColumn].id === "-" ||
    calcData[selectedRow][selectedColumn].id === "*" ||
    calcData[selectedRow][selectedColumn].id === "/"
  ) {
    switch (calcData[selectedRow][selectedColumn].id) {
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
    resultBox.textContent += calcData[selectedRow][selectedColumn].id;
  }
}
