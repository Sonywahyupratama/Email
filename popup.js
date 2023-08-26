chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.email) {
      document.getElementById("email").textContent = request.email;
    }
  }
);
