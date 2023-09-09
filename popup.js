document.getElementById('decodeButton').addEventListener('click', function () {
  chrome.runtime.sendMessage({ action: 'decodeURL' });
});
