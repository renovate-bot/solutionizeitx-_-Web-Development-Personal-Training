function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
    document.getElementById('display').value += character;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function additionalOperation(operation) {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
        return;
    }
    switch (operation) {
        case 'sqrt':
            display.value = Math.sqrt(value);
            break;
        case 'log':
            display.value = Math.log10(value);
            break;
        case 'sin':
            display.value = Math.sin(value);
            break;
        case 'cos':
            display.value = Math.cos(value);
            break;
        case 'tan':
            display.value = Math.tan(value);
            break;
        case 'exp':
            display.value = Math.exp(value);
            break;
        case 'reciprocal':
            display.value = 1 / value;
            break;
        default:
            display.value = 'Error';
            break;
    }
}