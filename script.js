const startBtn = document.getElementById('start_btn');
startBtn.addEventListener('click', () => {
  const { action } = startBtn.dataset;
  if (action === 'start') {
    startGame();
  } else {
    stopGame();
  }
});

function startGame() {
  startBtn.dataset.action = 'stop';
  startBtn.textContent = 'stop';

  let infoText = document.getElementById('info_text');
  infoText.textContent = 'The game has begun, guess the mystery number. Guess a number between 1 and 100';

  globalThis.mysteryNumber = Math.floor(Math.random() * 100) + 1;
  console.log(mysteryNumber);
}

function stopGame() {
  window.location.reload();
}

function handleGuess() {
  let inputNumber = document.getElementById('number').value;
  let returnText = document.getElementById('return_text');
  let trailText = document.getElementById('trials_text');
  let infoText = document.getElementById('info_text');
  const guessDiv = document.querySelector('.guess');
  let numberOfTrials = 5;

  const { action } = startBtn.dataset;
  if (action === 'start') {
    alert('Press the "start" button to start the game.');
  } else {
    if (inputNumber === '') {
      alert('Enter a number to play');
      trailText.innerText = `Number of tests remaining: ${numberOfTrials}`;
    } else {
      if (inputNumber < 1) {
        alert('Enter a number between 1 and 100');
      } else if (inputNumber > 100) {
        alert('Enter a number between 1 and 100');
      } else {
        if (numberOfTrials > 0) {
          if (mysteryNumber > inputNumber) {
            returnText.textContent = `${inputNumber} is less than the mystery number`;
            numberOfTrials -= 1;
            trailText.innerText = `Number of tests remaining: ${numberOfTrials}`;
          } else if (mysteryNumber < inputNumber) {
            returnText.textContent = `${inputNumber} is greater than the mystery number`;
            numberOfTrials -= 1;
            trailText.innerText = `Number of tests remaining: ${numberOfTrials}`;
          } else {
            returnText.textContent = `Congratulations, the mystery number was ${mysteryNumber}`;
            trailText.textContent = '';
            infoText.textContent = '';
            guessDiv.style.display = 'none';
          }
        } else {
          returnText.textContent = `Sorry you lose, the mystery number was ${mysteryNumber}`;
        }
      }
    }
  }
}

const guessBtn = document.getElementById('guess_btn');
guessBtn.addEventListener('click', handleGuess);

window.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleGuess();
  }
});
