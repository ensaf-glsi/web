export default class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "closed" });
    this.shadow.innerHTML = `
    <style>
    :host {
        --bg: black;
    }
    button {
        border: none;
        background-color: var(--bg);
        color: white;
        border-radius: 3px;
        padding: 3px 10px;
      }
      </style>
      <slot name="out" />
      <button><slot name="in" /></button>
      `;
  }
}
