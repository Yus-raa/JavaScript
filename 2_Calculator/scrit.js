let num1El = document.getElementById('num1-el');
let num2El = document.getElementById('num2-el');
let sumEl = document.getElementById('sum-el');

let num1 = 6;
let num2 = 4;
num1El.textContent = num1;
num2El.textContent = num2;

let result = 0;

function sum(){
    result = num1 + num2;
    showResult()
}
function sub(){
    result = num1 - num2;
    showResult()
}
function div(){
    result = num1 / num2;
    showResult()
}
function mul(){
    result = num1 * num2;
    showResult()
}

function showResult(){
    sumEl.textContent = "Sum: " + result;
}