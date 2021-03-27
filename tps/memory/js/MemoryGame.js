import { Card } from "./Card.js";
import { DomBuilder } from "./DomBuilder.js";

export class MemoryGame {
  // level 4 : 8
  // level 6 : 12
  constructor(level) {
    this.element = DomBuilder.createElement("div", "row row-cols-4 g-3");
    this.game = {};
    this.cards = [];
    for (let i = 0; i < level; i++) {
      this.cards.push(new Card(i, this.game));
      this.cards.push(new Card(i, this.game));
    }
    this.cards = _.shuffle(this.cards);
    this.cards.forEach((card) => {
      this.element.append(card.element);
    });
  }
}
