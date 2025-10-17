let bttns = document.querySelectorAll(".num");
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let cube = document.querySelector(".cube");
let squr = document.querySelector(".squr");
let multi = document.querySelector(".multi");
let divi = document.querySelector(".divi");
let equal = document.querySelector(".equal");
let erase = document.querySelector(".erase");
let display = document.querySelector(".display");
let opp = null;

let firstnum = "";
let secondnum = "";
bttns.forEach((bttn) => {
  bttn.addEventListener("click", () => {
    display.textContent += bttn.textContent;
  });
});
add.addEventListener("click", () => {
  firstnum = parseFloat(display.textContent);
  opp = "+";
  display.textContent = "";
});
sub.addEventListener("click", () => {
  firstnum = parseFloat(display.textContent);
  opp = "-";
  display.textContent = "";
});
multi.addEventListener("click", () => {
  firstnum = parseFloat(display.textContent);
  opp = "X";
  display.textContent = "";
});
divi.addEventListener("click", () => {
  firstnum = parseFloat(display.textContent);
  opp = "/";
  display.textContent = "";
});
equal.addEventListener("click", () => {
  secondnum = parseFloat(display.textContent);
  let result;
  if (opp === "+") {
    result = firstnum + secondnum;
  } else if (opp === "-") {
    result = firstnum - secondnum;
  } else if (opp === "X") {
    result = firstnum * secondnum;
  } else if (opp === "/") {
    result = firstnum / secondnum;
  }
  if (opp === null || !firstnum || !secondnum) {
    display.textContent = "";
  }
  display.textContent = result;
});
squr.addEventListener("click", () => {
  firstnum = parseFloat(display.textContent);
  let result;
  result = firstnum * firstnum;
  display.textContent = result;
});
cube.addEventListener("click", () => {
  firstnum = parseFloat(display.textContent);
  let result;
  result = firstnum * firstnum * firstnum;
  display.textContent = result;
});
erase.addEventListener("click", () => {
  display.textContent = "";
});
