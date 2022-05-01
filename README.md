# rock-paper-scissors
This is my first javascript program for a simple rock paper scissors game to showcase
my understanding of basic javascript: variables, loops, functions etc.  

Pseudocode
Rock Paper Scissors Algorithm 

Need function getPlayers to get player's move
    Need prompt, "Choose Rock, Paper or Scissors."
        store in string variable called playersMove
        return player's move 
    function to make playersMove Case insensitive
        When player enters string, capitalize first letter, lower case other letters in string
            function to convert other letters to lowercase
                store string as variable
                use variable.toLowerCase
                store as variable 
            function to convert 1st letter in string to capital
                store string as variable
                use variable.toUpperCase([0]) method(maybe)
                store new variable as playersMove 
    Display Player's move 
        Display, "You chose ''"

Need function getComputers to get computer's move
    Random number generator from 0-2
    store in variable called random
    Convert random number to string, "Rock", "Paper", or "Scissors", store in variable
        If random == 0 random = "rock
        Else if random == 1 random = "Paper"
        Else random = "Scissors"
    return this variable as computersMove

Need function compareMove to compare computer's move with player's move
    Switch statement with && operator
        Case: playersMove == "Rock" && computersMove == "Scissors"
        Display, "You won!"
        store in outcome in result 
        When player wins store value in playersScore
        When computer wins, store value in computersScore
        return either computersScore or playersScore

Need function to iterate 5 times 
    Use a for loop container for all functions to run the game until best 3 out of 5 wins 
    Loop should keep and display running score and final score
        Run 
            getPlayers
            getComputers
            Compare Move 
        Use for loop to iterate until playerScore || computersScore == 3
        need function keepScore to accept playerScore and computerScore as parameters
    When players Score || computersScore reaches 3 loop terminates
    Loop should keep track of rounds 
        for each iteration create variable "rounds" and store value
        increment for every iteration of loop 
        
         

Need function showScore to display winner and score 
    should take playersScore and computersScpre as parameters
    when score for player or computer reaches 3 
    display score and winner and how many rounds 
    display, "You won in "" rounds!".  