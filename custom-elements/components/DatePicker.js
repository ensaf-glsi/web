export default class DatePicker extends HTMLInputElement {
  // constructor() {
  //     super();
  // }
  connectedCallback() {
    this.calendar = flatpickr(this);
  }
  disconnectedCallback() {
    this.calendar.destroy();
  }
}
