const numbers = document.querySelectorAll(".number");
const spec_operators = document.querySelectorAll(".spec-operators");
const operators = document.querySelectorAll(".operators");
const display = document.querySelector("#display");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const back = document.querySelector("#back");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        display.innerText = display.innerText + number.innerText;
    })
})

spec_operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        console.log(operator.innerText);
        display.innerText = display.innerText + operator.innerText;
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        console.log(operator.innerText);
        display.innerText = display.innerText + operator.innerText;
    })
})

back.addEventListener("click", () => {
    display.innerText = display.innerText.toString().slice(0,-1);
})

equals.addEventListener("click", () => {
    if(display.innerText === "") {
        alert("Please Enter the operands");
    } else if (display.innerText === "") {
        alert("Please Enter an operator");
    } else {
        display.innerText = eval(display.innerText);
    }
})


clear.addEventListener("click", () => {
    display.innerText = "";
})