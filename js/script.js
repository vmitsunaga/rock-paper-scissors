const getRdmNumber = () => {
    return Math.floor(Math.random() * 3)
}

const computerPlay = () => {
    let result = getRdmNumber()

    if (result === 0) return "rock"
    if (result === 1) return "paper"
    if (result === 2) return "scissors"
}

const playRound = (playerSelection, computerSelection) => {
    let playerRating, // If it's a TIE = 0, WIN = 1, LOSE = 2
        message; //It's the message that will be displayed at the end.

    if (playerSelection === computerSelection) {
        playerRating = 0
    } else {
        switch(playerSelection) {
            case "rock":
                if (computerSelection === "scissors") {
                    playerRating = 1
                } else {
                    playerRating = 2
                }
                break
            case "paper":
                if (computerSelection === "rock") {
                    playerRating = 1
                } else {
                    playerRating = 2
                }
                break
            case "scissors":
                if (computerSelection === "paper") {
                    playerRating = 1
                } else {
                    playerRating = 2
                }
                break
        }
    }
    //playerRating will now define the message
    switch(playerRating) {
        case 0:
            message = `It's a TIE!`
            break
        case 1:
            message = `You WIN! ${playerSelection} beats ${computerSelection}`
            break
        case 2:
            message = `You LOSE! ${computerSelection} beats ${playerSelection}`
            break
    }
    return message
}

const playGame = () => {
    let maxRounds = 5
        playerScore = 0
        computerScore = 0

    for (let i = 0; i < maxRounds; i++) {
        let playerSelection;
        loop:
        while (true) {
            playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
            switch (playerSelection) {
                case "rock":
                case "paper":
                case "scissors":
                    break loop;
                default: alert("Please choose rock, paper or scissors.")
            }
        }
        let computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
    console.log("NO MORE ROUNDS")
}

playGame()