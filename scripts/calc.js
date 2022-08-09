function calcResult() {
    let firstNum,secondNum;

    switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      }
}

function selectNumberField(event) {
  if (event.target.tagName != "LI") return;
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;
  if (calcData[selectedRow][selectedColumn].id === "ac") {
    for(let i = 0; i < 3; i++){
        console.log(calcData[0][i].id)
        calcData[0][i].value = 0;
    }
    for (let i = 1; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            console.log(calcData[i][j].id)
          calcData[i][j].value = 0;
        }
      }
      for(let i = 0; i < 3; i++){
        console.log(calcData[4][i].id)
        calcData[4][i].value = 0;
    }
    resultBox.textContent = "";
    return;
  } else if (calcData[selectedRow][selectedColumn].id === "del") {
    calcData[selectedRow][selectedColumn].value=1;
    const delResultBoxChar = resultBox.textContent.slice(0, -1);
    resultBox.textContent = delResultBoxChar;
  } else if (calcData[selectedRow][selectedColumn] === "=") {
    calcData[selectedRow][selectedColumn].value=1;
    resultBox.textContent = calcResult();
  } else {
    let firstNum,secondNum,operation;
    switch (calcData[selectedRow][selectedColumn].id) {
        case '+':
            firstNum=resultBox.textContent
            operation='+'
          break
        case '-':
            firstNum=resultBox.textContent
            operation='-'
          break
        case '*':
            firstNum=resultBox.textContent
            operation='*'
          break
        case '/':
            firstNum=resultBox.textContent
            operation='/'
          break
      }
    calcData[selectedRow][selectedColumn].value=1;
    resultBox.textContent += calcData[selectedRow][selectedColumn].id;
  }
}
