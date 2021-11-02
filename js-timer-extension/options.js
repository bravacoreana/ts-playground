const nameInput = document.getElementById("name-input");
const timeInput = document.getElementById("time-input");
const saveBtn = document.getElementById("save-btn");

const getUsername = () => {
  chrome.storage.sync.get(["name", "notificationTime"], res => {
    nameInput.value = res.name ?? "Anonymous";
    timeInput.value = res.notificationTime ?? 1000;
  });
};

const saveOptions = () => {
  const name = nameInput.value;
  const notificationTime = timeInput.value;

  chrome.storage.sync.set({ name, notificationTime });
};

const init = () => {
  getUsername();
  saveBtn.addEventListener("click", saveOptions);
  setInterval(() => {
    console.log("options");
  }, 1000);
};

init();
