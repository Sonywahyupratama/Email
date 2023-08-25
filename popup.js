fetch("https://quack.duckduckgo.com/api/email/addresses", {
  method: "POST",
  headers: {
    "Host": "quack.duckduckgo.com",
    "Authorization": "Bearer tkqyrvpmclswd0tm7i6qquwsokjibf6owfg6udvdgvrnq6jip9wurnpk7rupbo",
    "User-Agent": "ddg_android/5.166.0 (com.duckduckgo.mobile.android; Android API 29)",
    "Content-Length": "0",
    "Accept-Encoding": "gzip"
  }
})
.then(response => response.json())
.then(data => {
  if (data.address) {
    var newAddress = `${data.address}@duck.com`;
    console.log("New email address:", newAddress);
  } else {
    console.log("Error: Unable to get new email address");
  }
})
.catch(error => {
  console.error("Error:", error);
});
