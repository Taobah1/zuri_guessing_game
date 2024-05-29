document.addEventListener("DOMContentLoaded", (event) => {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 3;

  const guessInput = document.getElementById("guessInput");
  const guessButton = document.getElementById("guessButton");
  const message = document.getElementById("message");
  const chances = document.getElementById("chances");

  guessButton.addEventListener("click", function () {
    let userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      message.textContent = "Please enter a valid number between 1 and 100.";
      return;
    }

    attempts--;

    if (userGuess === randomNumber) {
      message.textContent = "Congratulations! You guessed the correct number!";
      guessButton.disabled = true;
      guessInput.disabled = true;
    } else if (attempts > 0) {
      message.textContent =
        userGuess > randomNumber
          ? "Too high! Try again."
          : "Too low! Try again.";
      chances.textContent = `You have ${attempts} ${
        attempts === 1 ? "chance" : "chances"
      } left.`;
    } else {
      message.textContent = `Sorry, you've run out of chances. The correct number was ${randomNumber}.`;
      guessButton.disabled = true;
      guessInput.disabled = true;
    }

    guessInput.value = "";
  });
});
