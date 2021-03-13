import CustomButton from "./components/CustomButton.js";
import DatePicker from "./components/DatePicker.js";
import SecondTimer from "./components/SecondTimer.js";

customElements.define("second-timer", SecondTimer);
customElements.define("date-picker", DatePicker, { extends: "input" });
customElements.define("custom-button", CustomButton);

document.querySelector("#add").addEventListener("click", () => {
  console.log("button click");
  document.body.appendChild(new SecondTimer());
  //   document.querySelector("#timers").innerHTML = "<second-timer></second-timer>";
  // document.querySelector("second-timer").remove();
  // document.querySelector("second-timer").setAttribute("label", "demo");
  document.body.appendChild(new DatePicker());
});
