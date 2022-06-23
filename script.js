



//Rock Paper Scissor
// What we need to have?
//1. Function for computer to choose between r/p/s
//2. Input where we can choose our weapon
//3. How to implement what computer can choose? maybe math between 1-10?


// Computer move
const computerMove = Math.floor(Math.random() * 3) + 1;
const computerPlay = function() {
    n = computerMove;
    if(n==1){
        return 'Rock'
    }else if(n==2){
        return 'Paper'
    }else if(n==3){
        return 'Scissors'
    }
}
console.log(computerPlay())


const playRound = function(playerSelection, computerSelection) {
    computerSelection = computerPlay(); 
    if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        return ("You Lose! Paper beats Rock")
    }else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        return ("You Lose! Rock beats Paper")
    }
    else{
        return "HAAHA"
    }
    
}
console.log(playRound('Paper', computerPlay))
console.log(playRound('Rock', computerPlay))
console.log(playRound('Scissors', computerPlay))