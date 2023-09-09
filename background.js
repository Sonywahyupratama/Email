chrome.action.onClicked.addListener(function (tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: function () {
      const url = 'https://www.wts.pw/full/?api=c459ca2d2ff7da18fec24ab01fb49d529ca0dc99&url=aHR0cHM6Ly9sLmhzdi5teS5pZC82Oi9bTEVORFJJVkVdJTIwSW51JTIwbmklMjAoRHVhbCUyMFN1YnMpJTIwKDAxLTEyKSUyMFsxMDgwcF1bSEVWQyUyMDEwYml0XS5yYXI=&type=2';
      const encoded_url = new URL(url).searchParams.get('url');
      const decoded_url = atob(encoded_url);
      alert(decoded_url);
    },
  });
});
