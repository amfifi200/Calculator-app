let display = document.getElementById("display");
let numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
button.addEventListener("click",() => {
 display.value += button.innerText;
});
  });

let numberOperators= document.querySelectorAll(".operator");
numberOperators.forEach(button => {
  button.addEventListener("click",()=>{
    display.value += button.innerText;
    });
    });

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  display.value = "";
});

let equalButton = document.getElementById("equals");
equalButton.addEventListener("click",() => {
  display.value = eval(display.value);
  });
