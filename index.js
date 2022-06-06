const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const continueBtn = document.querySelector("#continue");
const result = document.querySelector("#result");
const userInputHours = document.querySelector("#hours");
const userInputMinutes = document.querySelector("#minutes");
const userInputSeconds = document.querySelector("#seconds");
let id;

function getValues() {
  const hours = Number(userInputHours.value);
  const minutes = Number(userInputMinutes.value);
  const seconds = Number(userInputSeconds.value);

  return [hours, minutes, seconds];
}

function validation() {
  const [hours, minutes, seconds] = getValues();

  return seconds < 0 || minutes < 0 || hours < 0;
}

function fixInputs() {
  let [hours, minutes, seconds] = getValues();

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

  return [hours, minutes, seconds];
}

function startTimer() {
  if (validation()) {
    alert("Please, enter a correct value");
    return;
  }

  startBtn.disabled = true;

  const [hours, minutes, seconds] = fixInputs();

  result.textContent = `${hours} ${minutes} ${seconds}`;
  id = setInterval(startCalc, 1000);
}

function startCalc() {
  const content = result.textContent.split(" ");
  let hours = Number(content[0]);
  let minutes = Number(content[1]);
  let seconds = Number(content[2]);

  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(id);
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 60;
  }

  if (minutes === -1) {
    hours--;
    minutes = 59;
  }
  
  seconds--;

  result.textContent = `${hours} ${minutes} ${seconds}`;
}

function stopTimer() {
  continueBtn.disabled = false;
  clearInterval(id);
}

function continueTimer() {
  continueBtn.disabled = true;

  id = setInterval(startCalc, 1000);
}

startBtn.addEventListener("click", startTimer);

stopBtn.addEventListener("click", stopTimer);

continueBtn.addEventListener("click", continueTimer);
