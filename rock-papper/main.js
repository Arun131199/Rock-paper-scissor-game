function play(playerchoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = "";
  if (playerchoice === computerChoice) {
    result = `Its a draw! both choose ${playerchoice}.`;
  } else if (
    (playerchoice === "rock" && computerChoice === "scissors") ||
    (playerchoice === "paper" && computerChoice === "rock") ||
    (playerchoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win! ${choices} beats ${computerChoice}.`;
  } else {
    result = `You lose! ${computerChoice} beats ${choices}.`;
  }

  document.getElementById("result").innerText = result;
}
