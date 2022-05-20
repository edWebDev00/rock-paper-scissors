//Add Query Selectors to connect user interface

let final = document.querySelector('.final');
let output = document.querySelector('.output')
let gameResult = document.querySelector('.gameResult');
let gameScore = document.querySelector('.gameScore');


// variable declarations 
let playerSelection;
let computerSelection;
let result = 0
let string2;
let string1;
let playerTotal = 0;
let computerTotal = 0;


//This function generates the computer's choice randomly and assigns its numner choice tpo a string       
function computerPlay()  {
    function getRandom (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let random = getRandom (0,2);
        if (random === 0) {
            computerSelection = "Rock";
        }
        else if (random === 1) {
            computerSelection = "Paper";
        }
        else  {
            computerSelection = "Scissors";
        }
        return computerSelection;
} 
        
        
// This function plays one round, compares the player and computer strings, returns the winner and keeps score
function playRound(string1, string2) {
    if (string1 === "Rock" && string2 === "Scissors" ||
    string1 === "Paper"  && string2 === "Rock" ||
    string1 === "Scissors" && string2 === "Paper") {
        computerTotal++;
        result = 1;
        return result;
    }
    else if (string2 === "Rock" && string1 === "Scissors" ||
        string2 === "Paper"  && string1 === "Rock" ||
        string2 === "Scissors" && string1 === "Paper") {
        playerTotal++;
        result = 2;
        return result;
    }
    else {
        result = 0;
        return result 
    }   
    
}
//Add an event listener to get value for player selection when a button is pushed
const btn = document.querySelectorAll("button");
btn.forEach((button) =>{
    button.addEventListener('click', function(e) {
        if(e.target.textContent ==="Rock!"){
            playerSelection = "Rock";
            console.log(playerSelection);
        }
        else if (e.target.textContent =="Paper!") {
            playerSelection = "Paper";
        }
        else if (e.target.textContent =="Scissors!"){
            playerSelection = "Scissors";
        }
        else {
            return;
            }
            
            
        game()
        }); 
    });


 function endResult () {
     if (playerTotal === 5){
     alert("You win, thanks for playing");
     }
     else if (computerTotal === 5 ){
         alert("You lose, try again")
     }
     else {
         return 0;
     }
 }
 
//this function plays the game  
 function game(){
    computerSelection = computerPlay()
    playRound(computerSelection, playerSelection);
        
        output.textContent = `You chose ${playerSelection}
                            Computer chose ${computerSelection}`;
            if (result == 2  ) {
              gameResult.textContent =`You win this round, ${playerSelection} beats ${computerSelection}`;
            }
            else if ( result == 1  ) {
              gameResult.textContent = `You lose this round, ${computerSelection} beats ${playerSelection}`;
            }
              else {
            gameResult.textContent = `It's a draw!`;
            }
            gameScore.textContent = `Score: Computer ${computerTotal}, You ${playerTotal}`;
            
            endResult();
        }
      
    


    