export default class SecondTimer extends HTMLElement {
  static get observedAttributes() {
    return ["label"];
  }
  constructor() {
    super();
    this.i = 0;
    this.label = document.createElement("span");

    this.span = document.createElement("span");
    this.span.classList.add("badge", "badge-secondary");
    this.span.innerHTML = this.i;
    this.appendChild(this.label);
    this.appendChild(this.span);
  }
  connectedCallback() {
    this.timer = window.setInterval(() => {
      console.log("interval");
      this.i++;
      this.span.innerHTML = this.i;
    }, 1000);
  }
  disconnectedCallback() {
    clearInterval(this.timer);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log("args", arguments);
    if (oldValue !== newValue && name === "label") {
      this.label.innerHTML = newValue + " : ";
    }
  }
}
