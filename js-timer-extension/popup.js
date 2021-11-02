const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const timerElement = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

const currentTime = new Date().toLocaleTimeString();

function updateTimerElements() {
  console.log("popup");
  chrome.storage.local.get(["timer", "isRunning"], res => {
    const time = res.timer ?? 0;
    timerElement.textContent = `The timer is at : ${time} seconds`;
  });
}

function displayTime() {
  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `Current time is ${currentTime}`;
}

function displayName() {
  chrome.storage.sync.get(["name"], res => {
    const name = res.name ?? "Anonymous";
    nameElement.textContent = `Your name is ${name}`;
  });
}

function startTimer() {
  chrome.storage.local.set({
    isRunning: true,
  });
}

function stopTimer() {
  chrome.storage.local.set({
    isRunning: false,
  });
}
function resetTimer() {
  chrome.storage.local.set({
    timer: 0,
    isRunning: false,
  });
}

function init() {
  displayTime();
  displayName();
  updateTimerElements();
  setInterval(updateTimerElements, 1000);
  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);
  resetBtn.addEventListener("click", resetTimer);
}

init();
