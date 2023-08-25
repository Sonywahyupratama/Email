document.addEventListener("DOMContentLoaded", function () {
  fetchEmail();

  async function fetchEmail() {
    const url = "https://quack.duckduckgo.com/api/email/addresses";
    const headers = {
      "Authorization": "Bearer tkqyrvpmclswd0tm7i6qquwsokjibf6owfg6udvdgvrnq6jip9wurnpk7rupbo",
      "User-Agent": "ddg_android/5.166.0 (com.duckduckgo.mobile.android; Android API 29)",
      "Content-Length": "0",
      "Accept-Encoding": "gzip"
    };

    try {
      const response = await fetch(url, { headers });
      const data = await response.json();

      if (response.status === 201) {
        const newAddress = data.address + "@duck.com";
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = "New email address: " + newAddress;

        // Copy email to clipboard
        copyToClipboard(newAddress);
      } else {
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = "Error: " + response.status;
      }
    } catch (error) {
      const resultDiv = document.getElementById("result");
      resultDiv.textContent = "Error: " + error.message;
    }
  }

  function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
});
