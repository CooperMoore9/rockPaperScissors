// Rock Paper Scissor
    // TODO
    // make site look better
            
let playerScore = 1;
let botScore = 1;
let playerChoice = '';

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
        
function playRound(playerChoice, botChoice){
    if(playerChoice === botChoice){
        return 'tie';
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