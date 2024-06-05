console.log("program started")

  let atm_userdata = [
    {
      "id": 1,
      "name": "Raniya",
      "balance": 700000,
      "pin": 1236,
      "card_number": "768895345975"
    },
    {
      "id": 2,
      "name": "John",
      "balance": 600000,
      "pin": 1237,
      "card_number": "768895345569"
    },
    {
      "id": 3,
      "name": "Ben",
      "balance": 3000000,
      "pin": 1239,
      "card_number": "868895345569"
    },

  ]
  let user_card = null;
let user_pin = null;
let is_authenticated = false;
let user_obj_index = null;
  function setName(){
  user_card = prompt("Enter your card number");
  user_pin = prompt("Enter your pin number");
  
  for (i = 0; i < atm_userdata.length; i++) {
    if (atm_userdata[i].card_number == user_card && atm_userdata[i].pin == user_pin) {
      alert("Authentication Successful");
      is_authenticated = true;
      user_obj_index = i;
      break;

    }
  }


    if (is_authenticated) {
      document.getElementById("customer_name").innerHTML = atm_userdata[user_obj_index].name;
      
    }
    else {
      alert("Authentication failed")
    }
  }


  

 
  function withdraw() {
    if(!is_authenticated){
      alert("User not autheticated")
      return;
      
    }
    

  let withdrawl_amount =  prompt("Enter the amount you want to withdraw");
 
  let current_balance = atm_userdata[user_obj_index].balance;
  
 

  if (withdrawl_amount>0 && withdrawl_amount <= current_balance){
    alert("Withdrawl Successful")
  
    atm_userdata[user_obj_index].balance = current_balance - withdrawl_amount;
    alert("Your updated balance is" + " " + atm_userdata[user_obj_index].balance)
  }
  else if(withdrawl_amount==null){
    alert("Withdrawl canceled")
    
  
  }
  
    
  
  else if(withdrawl_amount<=0){
    alert("Invalid amount entered")
  }
  else if(isNaN(withdrawl_amount)){
    alert("invalid input entered")
  }


  else {
    alert("Insufficient balance");
  }
}



       function deposit(){
        if(!is_authenticated){
          alert("User not authenticated")
          return;
        }
      let deposit_amount=prompt("Enter the amount you want to deposit");
     
      let current_balance=atm_userdata[user_obj_index].balance;
      
      if(deposit_amount>0){
     
        alert("Deposit successful");
        atm_userdata[user_obj_index].balance=current_balance+deposit_amount;
        alert("Your updated balance is"+" "+atm_userdata[user_obj_index].balance)
      }
      else if(deposit_amount==null){
        alert("Deposit canceled")
        
      
      }
      else if(deposit_amount<=0){
         alert("invalid amount entered")
      }
      else if(isNaN(deposit_amount)){
         alert("invalid input entered")
      }
  
      else{
         alert("Deposit unsuccessful");
  }
  
  }
  function balance(){
    
   
    
 if(is_authenticated){
  document.getElementById("check_balance").innerHTML=atm_userdata[user_obj_index].balance;
  alert("Your total balance is"+atm_userdata[user_obj_index].balance)
 }
 else{
  alert("User not authenticated")
 }
}

function logout() {
  if (is_authenticated) {
    is_authenticated = false;
    user_card = null;
    user_pin = null;
    user_obj_index = null;

    
    document.getElementById("customer_name").innerHTML = "";
    document.getElementById("check_balance").innerHTML = "";

    alert("You have been logged out.");
  } else {
    alert("No user is currently authenticated.");
  }
}


