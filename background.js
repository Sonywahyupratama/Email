chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.method === "POST" && details.url === "https://quack.duckduckgo.com/api/email/addresses") {
      // Modify request headers here if needed
    }
  },
  { urls: ["https://quack.duckduckgo.com/*"] },
  ["blocking"]
);
