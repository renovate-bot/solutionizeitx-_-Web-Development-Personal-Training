console.log("Program Started")
var input_type;

function change(){
    input_type = document.getElementById("select").value


    console.log("change function called")
    document.getElementById("root").innerHTML = "<input type="+input_type+" id='dynamic_element' />"
    // document.getElementById("root").innerHTML = "<input type='text' />"
    // document.getElementById("root").innerHTML = '<input type="text" />'
    // document.getElementById("root").innerHTML = '<input type=text />'
}

function getData(){
    let element = document.getElementById("dynamic_element")
    let display_message;

    console.log("Element = ",element)

    if(input_type == "checkbox"){
        if (element.checked){
            display_message = "True";
        } else {
            display_message = "False";
        }
    }
    else if(input_type=="text"){
        display_message = element.value
    }

    document.getElementById("result").innerHTML = display_message

}

console.log("Program completed")