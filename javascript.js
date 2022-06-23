// Rock Paper Scissors

    // TODO


        // - Get input from user
            // - popup window for user to provide input
            // - store input in variable
            // - make input case-insensitive
    let playerSelection = prompt('Enter: Rock, Paper, or Scissors').toLowerCase().trim();
            // - if user didn't type any of the expected answers alert 'not a answer' and let them type again
    if(playerSelection === 'rock' || playerSelection === 'paper'|| playerSelection === 'scissors'){
        console.log('right!');
    } else {
        console.log('wrong!');
    }

        // - use input to play against bot
        // - get random result from bot
        //     - get random number
        //         - console.log(Math.floor(Math.random()* 3));
        //             gets random number between 0-2
        //     - assign number to a choice in rps
        //     - return choice for round
        // - compare results
        // - console.log() results tell user if they won or lost
        // - 5 rounds total; at the end report who won more rounds

    console.log(playerSelection)