function getRequest(details) {
    if (details.method === "POST") {
        if (whatIsIt(details.requestBody)) {
            try {
                var postedString = decodeURIComponent(String.fromCharCode.apply(null,
                    new Uint8Array(details.requestBody.raw[0].bytes)));
            } catch(e) {
                return;
            }

            if (postedString !== undefined && postedString[0] === '{') {
                // Perform POST request
                var url = "https://quack.duckduckgo.com/api/email/addresses";
                var headers = {
                    "Authorization": "Bearer tkqyrvpmclswd0tm7i6qquwsokjibf6owfg6udvdgvrnq6jip9wurnpk7rupbo",
                    "User-Agent": "ddg_android/5.166.0 (com.duckduckgo.mobile.android; Android API 29)"
                };

                fetch(url, {
                    method: 'POST',
                    headers: headers,
                    body: postedString
                })
                .then(response => response.json())
                .then(data => {
                    if (data.address) {
                        var newAddress = data.address + "@duck.com";
                        console.log("New email address:", newAddress);
                        
                        // Copy email to clipboard
                        copyToClipboard(newAddress);
                        
                        // Show success message
                        showSuccessMessage();
                    } else {
                        showErrorMessage("Failed to get new email address.");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    showErrorMessage("An error occurred while fetching email address.");
                });
            }
        }
    }
}

// Your whatIsIt function...

// Your copyToClipboard function...

function showSuccessMessage() {
    document.getElementById("result").textContent = "Email address copied and converted successfully!";
    setTimeout(() => {
        document.getElementById("result").textContent = "";
    }, 3000); // Hide the message after 3 seconds
}

function showErrorMessage(message) {
    document.getElementById("result").textContent = "Error: " + message;
}

// Rest of your existing code...

// Your existing onBeforeRequest listener...
