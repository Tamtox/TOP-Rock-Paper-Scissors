//Computer's selection
const arr = ["Rock","Paper","Scissors"]
function computerChoice() {
    let choice = Math.floor(Math.random()*arr.length);
    return arr[choice]
}
//Score
let score = {
    Player:0,
    Computer:0,
}
//Game functionality
function game(input) {
    let ai = computerChoice();
    console.log(ai)
    if((input ==="Rock" && ai==='Scissors') || (input === 'Paper' && ai === 'Rock') || (input === 'Scissors' && ai === 'Paper')) {
        score.Player+=1;
        return `You Win!`
    }
    else if ((input ==="Rock" && ai==='Paper') || (input === 'Paper' && ai === 'Scissors') || (input === 'Scissors' && ai === 'Rock')) {
        score.Computer+=1;
        return `You Lose :(`
    }
    else if ((input ==="Rock" && ai==='Rock') || (input === 'Paper' && ai === 'Paper') || (input === 'Scissors' && ai === 'Scissors')) {
        return `It's a draw, try again`
    }
}