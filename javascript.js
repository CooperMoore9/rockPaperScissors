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

    let playerChoice = playerSelectionF();
    // console.log(playerChoice);


        // - get random result from bot
    function botChoiceF(){
        let botNumber = Math.floor(Math.random() * 3)
        if(botNumber === 0){
            return 'rock';
        }else if(botNumber === 1){
            return 'paper';
        }else if(botNumber === 2){
            return 'scissors'
        }
    }

    let botChoice = botChoiceF();
    console.log(botChoice);

        //     - get random number
        //         - console.log(Math.floor(Math.random()* 3));
        //             gets random number between 0-2
        //     - assign number to a choice in rps
        //     - return choice for round
        // - use input from bot and user to play
        // - compare results
        // - console.log() results tell user if they won or lost
        // - 5 rounds total; at the end report who won more rounds

