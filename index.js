let playerName, playerLevel, playerPoints, min, max, secretNumber, livesLeft;

playerName= prompt("Hi, please tell us your name")
 while(!playerName){
    playerName= prompt("You must tell us your name!!")
 }

 //declaring some functions that will be used
 mainGame()
 welcome()
 generatedNumber()
 playerAnswer()
 outputResult()

 //Welcoming the user to the game plus T and C
 function welcome(){
    console.log("hi " + playerName+ ". You are welcome to my game")
    let replies = prompt("Press enter") 
    console.log("The rules are as follows... I will think of a number and you will try to tell me the number by guessing")
    replies = prompt("Press enter") 
    console.log("you have 3 lives to start with. then an additional life for every number guessed correctly. Cool, yeah?")
    replies = prompt("Press enter") 
    console.log("lets start!!")
 }

//using the functions declared
function mainGame(){
    playerLevel = 1;
    playerPoints = 0;
    min = 1;
    max = 2;
    livesLeft = 3;
    secretNumber = generatedNumber()
    welcome()
    playerAnswer()
    outputResult()

    //using the player answer function
    function playerAnswer(){
        let guess = prompt("Guess the number. It is between ${min} and ${max}")

        //all the conditions for the game are here.
        // the gameOver and playerWin function will be made below
        while(guess !== secretNumber){
            if(livesLeft <= 0){
                gameOver()
                break
            }
            //for input to input a number only
            else if(Number.isNaN(parseInt(guess))){
                guess = prompt("You can only write a number!")
            }
            else if(guess > secretNumber){
                livesLeft -=1;
                guess= prompt("guess is too high. Try again")
            }
            else if(guess < secretNumber){
                livesLeft -= 1;
                guess= prompt("guess is too low. Try again")
            }
            else{
                playerWin()
                break;
            }
        }
    }

    //win or lose function inside the main
    function playerWin(){
        console.log("Congrats. You got the number. Press enter to move to the next stage")
        playerLevel++
        playerPoints++
        max++
        secretNumber = generatedNumber()
        livesLeft = 3 + Math.floor(playerLevel/3)
        outputResult()
        playerAnswer()
    }

    function gameOver(){
        console.log("You have run out of lives.")
        console.log("Do you want to try again?")
        console.log("reload the page")
        return
    }

    //function to show the result after each level
    function outputResult(){
        console.table({
            Player: playerName,
            Level: playerLevel,
            Points: playerPoints
        })
    }

    //this function is to generate the number for guessing
    function generatedNumber(){
        return Math.floor(Math.random()* (max - min + 1) + min);
    }
}

