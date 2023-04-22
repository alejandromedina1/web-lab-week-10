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
        <div class="card">
            <div class="tools">
                <div class="circle">
                    <span class="red box"></span>
                </div>
                <div class="circle">
                    <span class="yellow box"></span>
                </div>
                <div class="circle">
                    <span class="green box"></span>
                </div>
            </div>
            <div class="card__content">
                <div id = "result"> 
                    <h2> ${this.result} </h2>
                </div>
                <div id="calculator-container">
                    <div id="input-container">
                        <input type="text" placeholder="number" class="calculator-input" id = "first-input">
                        <input type="text" placeholder="number" class="calculator-input" id = "second-input">
                    </div>
                    <div id="operations-container">
                        <button value="/" class = "operation-button"> / </button>
                        <button value="*" class = "operation-button"> x </button>
                        <button value="+" class = "operation-button"> + </button>
                        <button value="-" class = "operation-button"> - </button>
                    </div>
                </div>
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