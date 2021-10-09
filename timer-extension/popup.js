const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();

timeElement.textContent = `the time is ${currentTime}`;
chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  () => {
    console.log("finished setting badge text.");
  }
);
