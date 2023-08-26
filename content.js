// This script will be injected into every webpage
console.log("Content script running...");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === "modifyEmail") {
      const newAddress = `${request.address}@duck.com`;
      sendResponse({ newAddress: newAddress });
    }
  }
);
