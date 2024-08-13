function fullClear() {
    document.getElementById('Myinput').value = '';
}

function deleteLast() {
    const display = document.getElementById('Myinput');
    display.value = display.value.slice(0, -1);
}


function appendCharacter(character) {
    document.getElementById('Myinput').value += character;
}


function calculate() {
    const display = document.getElementById('Myinput');
    display.value = eval(display.value);
}


function operators(operation) {
    const display = document.getElementById('Myinput');
    const value = parseFloat(display.value);

    if (isNaN(display.value)) {
        display.value = 'Error';
        return;
    }

    switch (operation) {
        case '√':
            display.value = Math.sqrt(value);
            break;

       
        default:
            display.value = 'Error';
            break;
    }
} 