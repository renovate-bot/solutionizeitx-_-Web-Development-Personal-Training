function fullClear() {
    document.getElementById('Myinput').value='';
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
    
    
     display.value=eval(display.value);
    }

    
    
    
   
function operator(operation) {
    const display = document.getElementById('Myinput');
    const value = parseFloat(display.value);
    if (isNaN(display.value)) {
        display.value = 'Error';
        return;
    }
    switch (operation) {
        case 'sqrt':
            display.value = Math.sqrt(value);
            break;
        case 'log':
            display.value = Math.log(value);
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
         case 'sin_inverse':
         display.value = Math.asin(value);
            break;
        case 'cos_inverse':
        display.value = Math.acos(value);
            break;
        case 'tan_inverse':
        display.value = Math.atan(value);
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