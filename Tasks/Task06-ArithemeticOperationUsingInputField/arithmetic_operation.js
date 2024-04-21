console.log("Program started")
function operation(){
var result;
choice=document.getElementById("Myinput3").value;
a=parseFloat(document.getElementById("Myinput1").value);
b=parseFloat(document.getElementById("Myinput2").value);
switch(choice){
    case "add":
        
        result=a+b;
        console.log("Your answer is" + " " + result)
    break;
    case "subtract":
        result=a-b;
        console.log("Your answer is" + " " + result)
    break;
    case "multiply":
        result=a*b;
        console.log("Your answer is" + " " + result)
    break;
    case "divide":
        result=a/b;
        console.log("Your answer is" + " " + result)
    break;
    case "modulus":
        result=a%b;
        console.log("Your answer is" + " " + result)
    break;
    default:
        console.log("Invalid choice")
}
    document.getElementById("output").innerHTML=result;



}
console.log("Program ended")




































