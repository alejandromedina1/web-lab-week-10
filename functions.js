export function updateAttribute(item, key, value) {
  item[key], value
  item.setAttribute(key, value)
}
let result = 0;

export function operate(operatorValue, a, b) {
  switch (operatorValue) {
    case '/':
      result = divide(a, b)
      break;
    case '*':
      result = multiply(a, b)
      break;
    case '+':
      result = add(a, b)
      break;
    case '-':
      result = substract(a, b)
      break;
  }
  return result
}

export function add(a, b) {
  return a + b
}

export function substract(a, b) {
  return a - b
}

export function multiply(a, b) {
  return a * b
}

export function divide(a, b) {
  return a / b
}