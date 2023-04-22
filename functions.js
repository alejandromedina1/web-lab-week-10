export function updateAttribute(item, key, value) {
  item[key], value
  item.setAttribute(key, value)
}

export function operate(result, operators, firstInput, secondInput, calculator) {
  for (const operator of operators) {
    operator.addEventListener('click', () => {
      switch (operator.value) {
        case '/':
          result =  parseInt(firstInput.value) / parseInt(secondInput.value)
          break;
        case '*':
          result = parseInt(firstInput.value) * parseInt(secondInput.value)
          break;
        case '+':
          result = parseInt(firstInput.value) + parseInt(secondInput.value)
          break;
        case '-':
          result = parseInt(firstInput.value) - parseInt(secondInput.value)
          break;
        }
        console.log(result)
        updateAttribute(calculator, 'result', result)
      })
  }
}
