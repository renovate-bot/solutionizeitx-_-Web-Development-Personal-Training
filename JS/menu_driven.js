console.log("program started")

var num1 = parseFloat( "10.5")
var num2 = parseFloat( 5)


// function, function name ( args or paramerts) then function body
function addition(no1, no2){
    console.log("Addition = ",no1 + no2)
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
let count = 0
let limit = 5

while(true){
    console.log("program running count ",count)
    let choice =  prompt("Enter \n1 for addition \n2 for substraction \n3 for multiplication \n4 for division, \n5 To exit")
    
    if (choice == "1"){
        addition(num1,num2)
    }
    else if (choice == "2"){
        substraction(num1,num2)
    }
    else if (choice == "3"){
        multiplication(num1,num2)
    }
    else if (choice == "4"){
        division(num1,num2)
    }
    else if (choice == "5"){
        break;
    }
    else{
        console.log("Invalid choice")
    }

    count++
    if (count == limit){
        console.log("Maximum attempt reached")
        break;
    }
    
}

console.log("program ended")