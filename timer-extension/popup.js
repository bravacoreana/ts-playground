const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");

const currentTime = new Date().toLocaleTimeString();

const displayTime = () => {
  timeElement.textContent = `the time is ${currentTime}`;
};

const setBadge = () => {
  chrome.action.setBadgeText(
    {
      text: "TIME",
    },
    () => {
      console.log("finished setting badge text.");
    }
  );
};

const displayName = () => {
  chrome.storage.sync.get(["name"], res => {
    const name = res.name ?? "Anonymous";
    nameElement.textContent = `Your name is ${name}`;
  });
};

const init = () => {
  displayTime();
  displayName();
  setBadge();
};

init();
