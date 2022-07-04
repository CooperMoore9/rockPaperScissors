// Rock Paper Scissors

    // TODO
    // make site look better


    // make button run function

            
let playerScore = 1;
let botScore = 1;
let playerChoice = '';

    // - Get input from user
        // - popup window for user to provide input
        // - store input in variable
        // - make input case-insensitive
        // - if user didn't type any of the expected answers alert 'not a answer' and let them type again

            // - get random result from bot
                    // - get random number
                    // - console.log(Math.floor(Math.random()* 3));
                        // - gets random number between 0-2
            // - assign number to a choice in rps
            // - return choice for round


const clickedButton = document.querySelectorAll('button');
    clickedButton.forEach((button) => {
        button.addEventListener('click', () => {
        playerChoice = button.id;
        playGame();
    })
})


function botSelectionF(){
    let botNumber = Math.floor(Math.random() * 3)
    if(botNumber === 0){
        return 'rock';
    }else if(botNumber === 1){
        return 'paper';
    }else if(botNumber === 2){
        return 'scissors';
    }
}
        
        
    // - use input from bot and user to play
    // - compare results
    // - console.log() results tell user if they won or lost
function playRound(playerChoice, botChoice){
    if(playerChoice === botChoice){
        return 'tie';
    // can just return things rather than setting variables

    }else if(playerChoice === 'rock' && botChoice !== 'paper'){
        return 'player';
    }else if(playerChoice === 'paper' && botChoice !== 'scissors'){
        return 'player';
    }else if(playerChoice === 'scissors' && botChoice !== 'rock'){
        return 'player';
    }else{
        return 'bot';
    }

}   

function disableButtons(){

    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;

}
     // - 5 rounds total; at the end report who won more rounds

function playGame(){
    let botChoice = botSelectionF();
    let winner = playRound(playerChoice, botChoice);
    document.getElementById('playerScore').textContent = `Player Score = ${playerScore}` ;
    document.getElementById('botScore').textContent = `Bot Score = ${botScore}` ;

    if(playerScore === 5 && botScore === 5){
        document.getElementById('middleText').textContent = `Tied`;
        disableButtons();
    }
    else if(playerScore === 5 && botScore < 5){
        document.getElementById('middleText').textContent = `player winnah`;
        disableButtons();
    }else if(playerScore < 5 && botScore === 5){
        document.getElementById('middleText').textContent = `bot winnah`;
        disableButtons();
    }

    if(winner === 'player'){
        playerScore++;
    }else if (winner === 'bot'){
        botScore++;
    }

}


// for(let i = 0; i < 5; i++){

//     playGame();

// }

// console.log('bot ' + botScore);
// console.log('player ' + playerScore);

// if(playerScore > botScore){
//     console.log('Player Wins Game')
// }else if(playerScore < botScore){
//     console.log('Bot Wins Game')
// }else{
//     console.log('TIE')
// }


    // DOM MANIPULATION
    // I don't really know what I'm doing

    // DOM MANIPULATION
    // I don't really know what I'm doing