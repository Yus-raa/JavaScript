let counterElement = document.getElementById('count-el');
let incrementBtn = document.getElementById('increment-btn')
let saveBtn = document.getElementById('save-btn');
let preview = document.getElementById('prev');

let count = 0;
function increment(){
    count += 1;
    counterElement.textContent = count;
}

function save(){
    let prevStr = count + ' - ';
    preview.textContent += prevStr;
    
    count = 0;
    counterElement.textContent = 0;
}