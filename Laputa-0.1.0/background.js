chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "get_cookies") {
    chrome.cookies.getAll({ url: request.url }, (cookies) => {
      sendResponse({ cookies: cookies });
    });
    return true; // Indicates that the response is sent asynchronously
  }
});
