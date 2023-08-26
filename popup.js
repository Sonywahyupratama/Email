document.addEventListener("DOMContentLoaded", function() {
  const modifyButton = document.getElementById("modifyButton");
  const resultDiv = document.getElementById("result");

  modifyButton.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: modifyEmail,
        args: [{ action: "modifyEmail", address: "e1wrjuor" }]
      });
    });
  });

  function modifyEmail(params) {
    chrome.runtime.sendMessage(params, function(response) {
      resultDiv.textContent = "New email address: " + response.newAddress;
    });
  }
});
