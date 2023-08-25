document.addEventListener("DOMContentLoaded", function () {
  fetchEmail();

  async function fetchEmail() {
    const url = "https://quack.duckduckgo.com/api/email/addresses";
    const headers = {
      "Authorization": "Bearer tkqyrvpmclswd0tm7i6qquwsokjibf6owfg6udvdgvrnq6jip9wurnpk7rupbo",
      // Add other headers here
    };

    try {
      const response = await fetch(url, { headers });
      const data = await response.json();

      if (response.ok) {
        const newAddress = data.address + "@duck.com";
        document.getElementById("result").textContent = "New email address: " + newAddress;

        // Copy email to clipboard
        copyToClipboard(newAddress);
      } else {
        document.getElementById("result").textContent = "Error: " + response.status;
      }
    } catch (error) {
      document.getElementById("result").textContent = "Error: " + error.message;
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
