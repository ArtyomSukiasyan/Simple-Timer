const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const continueBtn = document.querySelector("#continue");
const result = document.querySelector("#result");
const userInputHours = document.querySelector("#hours");
const userInputMinutes = document.querySelector("#minutes");
const userInputSeconds = document.querySelector("#seconds");

function start() {
  let hours = Number(userInputHours.value);
  let minutes = Number(userInputMinutes.value);
  let seconds = Number(userInputSeconds.value);

  if (seconds > 59) {
    const over = Math.floor(seconds / 60);
    minutes += over;
    seconds = seconds - over * 60;
  }

  if (minutes > 59) {
    const over = Math.floor(minutes / 60);
    hours += over;
    minutes = minutes - over * 60;
  }
  result.textContent = `${hours} ${minutes} ${seconds}`;
}

startBtn.addEventListener("click", start);
