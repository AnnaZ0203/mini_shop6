import { add } from "./js/calculator";

const button = document.getElementById("btn");

btn.addEventListener("click", () => {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;

  document.getElementById("result").textContent = 
  "Result" + add(a,b);
});
