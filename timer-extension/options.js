const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");

const getUsername = () => {
  chrome.storage.sync.get(["name", "test"], res => {
    nameInput.value = res.name ?? "Anonymous";
  });
};

const saveUsername = () => {
  const name = nameInput.value;
  chrome.storage.sync.set({ name }, () => {
    console.log(`name is set to ${name}`);
  });
};

const init = () => {
  getUsername();
  saveBtn.addEventListener("click", saveUsername);
};

init();
