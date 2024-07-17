console.log("Program Started")
let player_position=0;
let boardSize=25;
let snakes={7:3,14:4,24:1};
let ladders={5:12,15:21,13:23};
function rollDice(){
    
    console.log("prev player position:",player_position)
    reset_color(player_position)
    var dicevalue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dicevalue").innerHTML = "Dice Value:" + dicevalue;
    if (player_position == 0 && dicevalue !== 1) {
        document.getElementById("game-status").innerText = "Game Status: You need to roll a 1 to start!";
        return;
    }
   let new_position=player_position+dicevalue
   
    
    if (new_position > boardSize) {
        document.getElementById('game-status').innerText = "Game Status: You need an exact roll to finish!";
        return;
    }
    
    player_position = new_position;
    console.log("current player position:",player_position)

    if (snakes[player_position]) {
        player_position = snakes[player_position];
        document.getElementById('game-status').innerText = "Game Status: Swallowed by a snake";
    } else if (ladders[player_position]) {
        player_position = ladders[player_position];
        document.getElementById('game-status').innerText = "Game Status: Climbed a ladder";
    }
    else{
        document.getElementById('game-status').innerText = "Game Status: Moved to position:"+player_position;
    }
    if(player_position==boardSize){
        document.getElementById('game-status').innerText = "Game Status: Congragulations you won";
    }
    document.getElementById(player_position).style.backgroundColor='red';
}


function reset_color(prev_position){
    console.log("Reset color:",prev_position)
    if(prev_position !==0){
        if(prev_position%2==0){
            document.getElementById(prev_position).style.backgroundColor='yellow';
        }
        else{
            document.getElementById(prev_position).style.backgroundColor='lightskyblue';
        }
    }
    else{
        console.log("Game not started yet")
    }
}