import { DomBuilder } from "./DomBuilder.js";
import { Card } from "./Card.js";
import { MemoryGame } from "./MemoryGame.js";

// const span = DomBuilder.createElement("span", "col");
// span.append("text span");

// const col = DomBuilder.createElement("div", "col");
// col.append("text test", span);

const game = document.getElementById("game1");

// game.append(new Card("1").element);
// game.append(new Card("2").element);
// game.append(new Card("3").element);
// game.append(new Card("4").element);

game.append(new MemoryGame(6).element);

document.getElementById("game2").append(new MemoryGame(4).element);
