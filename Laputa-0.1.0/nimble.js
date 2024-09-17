// Nimble
const containerLinks = document.getElementById("links");
const tabId = parseInt(location.search.replace(/.*tabId=(\d+).*/, "$1"));

chrome.tabs.sendMessage(tabId, { action: "extract" }, (links) => {
  handler(links);
});

function handler(links) {
  if (chrome.runtime.lastError) {
    return window.alert(chrome.runtime.lastError);
  }
  // Filter out invalid links
  const resLinks = links.filter((link) => link.lastIndexOf("://", 10) > 0);
  // Url Deduplication
  const validLinks = [...new Set(resLinks)].sort();
  const regex = /(worksheet\/show|\.html)/;
  const added = validLinks.filter((link) => addNodes(link, regex));
  // Open all urls
  const message = document
    .getElementById("message")
    .addEventListener("click", () => {
      for (let i = 0; i < added.length; i++) {
        const url = added[i];
        chrome.tabs.create({ active: true, url: url });
      }
    });
  // Open selected urls
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelectorAll('[type="checkbox"]').forEach((item) => {
      if (item.checked === true) {
        const url = item.value;
        chrome.tabs.create({ active: true, url: url });
      }
    });
  });

  if (!added.length) {
    return window.alert("Error");
  }
}

// Create links in 'nimble.html'
function addNodes(url, re) {
  if (re && !url.match(re)) return false;
  // <input type="checkbox">
  const inputCheckBox = document.createElement("INPUT");
  inputCheckBox.setAttribute("type", "checkbox");
  const a = document.createElement("a");
  const br = document.createElement("br");

  a.href = url; // <a href="">
  a.innerText = url;
  inputCheckBox.value = `${url}`; // <input type="checkbox" value="">
  document.querySelector("form").appendChild(inputCheckBox);
  document.querySelector("form").appendChild(a);
  document.querySelector("form").appendChild(br);

  return true;
}
