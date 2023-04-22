class Calculator extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })
        //attributes
        this.result = this.getAttribute('result')
    }
    static get observedAttributes() {
        return ['result']
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "./components/calculator/style.css">
        <h1> Calculator </h1>
        <h2> ${this.result} </h2>
        <div id="calculator-container">
            <div id="input-container">
                <input type="text" placeholder="enter a number" class="calculator-input" id = "first-input">
                <input type="text" placeholder="enter a number" class="calculator-input" id = "second-input">
            </div>
            <div id="operations-container">
                <button value="/" type = "button" class = "operation-button"> / </button>
                <button value="*" type = "button" class = "operation-button"> x </button>
                <button value="+" type = "button" class = "operation-button"> + </button>
                <button value="-" type = "button" class = "operation-button"> - </button>
            </div>
        </div>
        `
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render()
        console.log(`attr ${propName} changed`)
    }
}

customElements.define('calculator-container', Calculator)
export default Calculator