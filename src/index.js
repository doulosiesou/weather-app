import _ from "lodash";
import "./styles.css";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.className = "test";

  return element;
}
document.body.appendChild(component());