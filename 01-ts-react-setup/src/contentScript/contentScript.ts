chrome.runtime.sendMessage('message from content script', response => {
  console.log('received user data', response)
})
