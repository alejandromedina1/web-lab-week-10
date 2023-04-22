/*import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
//nimport { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/
import "./components/calculator/calculator";
import {
  updateAttribute
} from "./functions";
import { operate } from "./functions";

const calculator = document.createElement('calculator-container')
const app = document.querySelector('#app')
updateAttribute(calculator, 'result', 0)
console.log(calculator)
app.append(calculator)

let operationResult = 0;

const firstInput = calculator.shadowRoot.getElementById('first-input')
const secondInput = calculator.shadowRoot.getElementById('second-input')

const operators = calculator.shadowRoot.querySelectorAll(".operation-button")
console.log(operators)

operate(operationResult, operators, firstInput, secondInput, calculator);