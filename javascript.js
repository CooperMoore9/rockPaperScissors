// Rock Paper Scissors

    // TODO


        // - Get input from user
            // - popup window for user to provide input
            // - store input in variable
            // - make input case-insensitive
            // - if user didn't type any of the expected answers alert 'not a answer' and let them type again
    function playerSelectionF(){
        let playerSelection = prompt('Enter: Rock, Paper, or Scissors').toLowerCase().trim();
        if(playerSelection === 'rock' || playerSelection === 'paper'|| playerSelection === 'scissors'){
            return playerSelection;
        } else {
            alert('wrong')
            return playerSelectionF();
        }
    }

        // - get random result from bot
                // - get random number
                // - console.log(Math.floor(Math.random()* 3));
                    // - gets random number between 0-2
        // - assign number to a choice in rps
        // - return choice for round
    function botSelectionF(){
        let botNumber = Math.floor(Math.random() * 3)
        if(botNumber === 0){
            return 'rock';
        }else if(botNumber === 1){
            return 'paper';
        }else if(botNumber === 2){
            return 'scissors'
        }
    }


        // - use input from bot and user to play
        // - compare results
        // - console.log() results tell user if they won or lost
    function playRound(playerChoice, botChoice){
        let winner = '';
        if(playerChoice === botChoice){
            console.log('tie');
            winner = 'tie'

        }else if(playerChoice === 'rock' && botChoice !== 'paper'){
            console.log(playerChoice + ' beats ' + botChoice + ', you win');
            winner = 'player'

        }else if(playerChoice === 'paper' && botChoice !== 'scissors'){
            console.log(playerChoice + ' beats ' + botChoice + ', you win');
            winner = 'player'

        }else if(playerChoice === 'scissors' && botChoice !== 'rock'){
            console.log(playerChoice + ' beats ' + botChoice + ', you win');
            winner = 'player'

        }else{
            console.log(botChoice + ' beats ' + playerChoice + ', you lose');
            winner = 'bot'

        }

        return winner;

    }   


        // - 5 rounds total; at the end report who won more rounds

    function playGame(){
        let playerChoice = playerSelectionF();
        let botChoice = botSelectionF();
        console.log('player chose ' + playerChoice);
        console.log('bot chose ' + botChoice);
        playRound(playerChoice, botChoice);
    }
    for(let i = 0; i < 5; i++){

        playGame();

    }