export class DomBuilder {
  static createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
  }
}
