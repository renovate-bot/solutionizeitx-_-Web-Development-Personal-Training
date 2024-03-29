console.log("Program Started")
function addition(){
    let num1 = parseFloat( document.getElementById("number1").value)
    let num2 = parseFloat( document.getElementById("number2").value)
    let sum =  num1 + num2
    console.log("Sun = ", sum)
    document.getElementById("result").value = sum

}
console.log("Program completed")