
// Raniya please move this from here
console.log("Program started")
function day(){
   var result;
   day= document.getElementById("Myinput").value;
   
   switch(week){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        result="Today is not weekend";
    break;
    case "Saturday":
    case "Sunday":
        result="Today is a weekend";
    break;
    default:
        result="There is no such day";
    
   }
   document.getElementById("output").innerHTML=result;
}




console.log("program ended")