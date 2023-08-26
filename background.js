chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    var headers = details.requestHeaders;
    headers.push(
      { name: "Authorization", value: "Bearer tkqyrvpmclswd0tm7i6qquwsokjibf6owfg6udvdgvrnq6jip9wurnpk7rupbo" },
      { name: "User-Agent", value: "ddg_android/5.166.0 (com.duckduckgo.mobile.android; Android API 29)" },
      { name: "Content-Length", value: "0" },
      { name: "Accept-Encoding", value: "gzip" }
    );
    return { requestHeaders: headers };
  },
  { urls: ["https://quack.duckduckgo.com/*"] },
  ["blocking", "requestHeaders"]
);
