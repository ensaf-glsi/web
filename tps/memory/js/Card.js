import { DomBuilder } from "./DomBuilder.js";

const HIDDEN = 0;
const VISIBLE = 1;
const WINNED = 2;

export class Card {
  /**
   * imageId : id de l'image a afficher
   * state : HIDDEN / VISIBLE / WINNED
   */
  constructor(imageId, game) {
    // this.element = document.createElement("div");
    // this.element.className = "col";
    this.game = game;
    this.element = DomBuilder.createElement("div", "col");
    // this.element.dataset.imageId = imageId;
    // this.element.dataset.state = HIDDEN;
    this.imageId = imageId;
    this._state = HIDDEN;

    this.card = DomBuilder.createElement("div", "card");

    this.element.append(this.card);

    this.image = DomBuilder.createElement("img", "card-img");
    this.setImageSrc();
    // this.image.src = `images/${imageId}.jpg`;
    this.card.append(this.image);

    // changement de context de la methode handleClick
    this.handleClick = this.handleClick.bind(this);
    this.element.addEventListener("click", this.handleClick);
  }
  get state() {
    // console.log("get state");
    return this._state;
  }
  set state(state) {
    // console.log("set state");
    this._state = state;
    this.setImageSrc();
  }

  getImageSrc() {
    switch (this.state) {
      case VISIBLE:
        return this.imageId;
      case WINNED:
        return "winned";
      default:
        return "hidden";
    }
  }
  setImageSrc() {
    this.image.src = `images/${this.getImageSrc()}.jpg`;
  }
  show() {
    this.state = VISIBLE;
  }
  markAsWinned() {
    setTimeout(() => {
      this.state = WINNED;
    }, 500);
    this.element.removeEventListener("click", this.handleClick);
  }
  hide() {
    setTimeout(() => {
      this.state = HIDDEN;
    }, 1000);
  }
  handleClick() {
    console.log("click sur : ", this);
    if (this.state === HIDDEN) {
      this.show();
      if (this.game.current) {
        // si une carte est deja visible
        // je compare les deux id
        console.log("Image en cours : ", this.game.current.imageId);
        if (this.game.current.imageId === this.imageId) {
          this.game.current.markAsWinned();
          this.markAsWinned();
        } else {
          this.game.current.hide();
          this.hide();
        }
        this.game.current = undefined;
      } else {
        this.game.current = this;
      }
    }
  }
}
