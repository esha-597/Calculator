// scripts.js
function appendtoDisplay(input) {
    const display = document.getElementById('display');
    display.value += input;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
