// Game values
let min = 1,
    max = 10,
    winningNum = setWinningNum(min, max);
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guesser-btn'),
      guessInput = document.querySelector('#guesser-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
    } else {
        if(guess === winningNum) {
            gameOver(true, "You won!");
        } else {
            guessesLeft -= 1;
            if (guessesLeft === 0) {
                gameOver(false, `Game over, you lost. The correct number was ${winningNum}.`);
                //guessBtn.disabled = false;
            } else {
                if (guessesLeft === 1) {
                    setMessage(`${guess} is not a winning number, ${guessesLeft} guess left.`, 'red');
                    guessInput.disabled = false;
                } else {
                    setMessage(`${guess} is not a winning number, ${guessesLeft} guesses left.`, 'red');
                    guessInput.disabled = false;
                }
            }
        }
    }
})

// Setting the colors of text and inputs, setting the message for winning and loosing
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color ='red';

    // Change border color
    guessInput.style.borderColor = color; 
    // Change text color
    message.style.color = color;
    // Set message
    setMessage(msg);
    // Disable input
    guessInput.disabled = true; 

    // Play Again function
        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again';

}

// Set winning number
function setWinningNum(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min));
}

function setMessage(msg, color) {
    message.style.display = "block";
    message.textContent = msg;
    message.style.color = color;
    guessInput.style.borderColor = color;
};

console.log(winningNum);