// import modules
import "./components/calculator/calculator";
import {
  updateAttribute
} from "./functions";
import { operate } from "./functions";


let operationResult = 0

export const calculator = document.createElement('calculator-container')
updateAttribute(calculator, 'result', 0)
console.log(calculator)

const app = document.querySelector('#app')
app.append(calculator)

const operators = calculator.shadowRoot.querySelectorAll(".operation-button")
console.log(operators)

const firstInput = calculator.shadowRoot.getElementById('first-input')
const secondInput = calculator.shadowRoot.getElementById('second-input')


for (const operator of operators) {
  operator.addEventListener('click', () => {
    let a = parseInt(firstInput.value)
    let b = parseInt(secondInput.value)
    operationResult = operate(operator.value, a, b);
    updateAttribute(calculator, 'result', operationResult)
  })
}





