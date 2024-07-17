console.log("program started")

var num1 = 10.5
var num2 =  5

console.log(typeof num1)

// function, function name ( args or paramerts) then function body
function addition(num1, num2){
    console.log("Addition = ",num1 + num2)
}

function substraction(no1, no2){
    console.log("Substraction = ",no1-no2)
}

function multiplication(no1, no2){
    console.log("Multiplication = ",no1*no2)
}

function division(no1, no2){
    console.log("Division = ", no1/no2)
}

let choice = prompt("Enter 1 for addition, 2 for substraction, 3 for multiplication, 4 for division")

if (choice == "1"){
    addition(num1,num2)
}

if (choice == "2"){
    substraction(num1,num2)
}
if (choice == "3"){
    multiplication(num1,num2)
}
if (choice == "4"){
    division(num1,num2)
}

console.log("program ended")