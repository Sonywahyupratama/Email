chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name === 'Authorization') {
        details.requestHeaders[i].value = 'Bearer tkqyrvpmclswd0tm7i6qquwsokjibf6owfg6udvdgvrnq6jip9wurnpk7rupbo';
        break;
      }
    }
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["https://quack.duckduckgo.com/*"] },
  ["blocking", "requestHeaders"]
);
