//Computer's selection
function computerChoice() {
    const arr = ["Rock","Paper","Scissors"]
    let choice = Math.floor(Math.random()*arr.length);
    return arr[choice]
}
//Score
let score = {
    Player:0,
    Computer:0,
}
//DOM
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let  textResult = document.getElementById('text-result');
//Game functionality
function game(input) {
    let ai = computerChoice();
    console.log(ai)
    if((input ==="Rock" && ai==='Scissors') || (input === 'Paper' && ai === 'Rock') || (input === 'Scissors' && ai === 'Paper')) {
        score.Player+=1;
        textResult.textContent="You win!"
        playerScore.innerText = score.Player+""
    }
    else if ((input ==="Rock" && ai==='Paper') || (input === 'Paper' && ai === 'Scissors') || (input === 'Scissors' && ai === 'Rock')) {
        score.Computer+=1;
        textResult.textContent="You lose!"
        computerScore.innerText= score.Computer+""
    }
    else {
        textResult.textContent="It's a draw, try again."
    }
};
//Events
rock.addEventListener('click',function(){game("Rock")})
paper.addEventListener('click',function(){game("Paper")})
scissors.addEventListener('click',function(){game("Scissors")})
