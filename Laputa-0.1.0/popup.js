/** 1 + 2 = (crimson) Auto Assign Tickets + (crimson) Nimble
 *
 *
 */

/* (Atlas) Format Xpath: If-then-else */
document.getElementById("formatXPathBtn").addEventListener("click", () => {
  const xpath = document.getElementById("inputXPath").value;
  let formatted = "";
  let indentLevel = 0;

  const increaseIndent = () => indentLevel++;
  const decreaseIndent = () => indentLevel--;
  const getIndentation = () => "    ".repeat(indentLevel);

  const tokens = xpath.match(/if|then|else|\(|\)|[^()]+/g);

  tokens.forEach((token, index) => {
    if (token === "if" || token === "then" || token === "else") {
      formatted += `\n${getIndentation()}${token} `;
    } else if (token === "(") {
      formatted += `${token}\n`;
      increaseIndent();
      formatted += getIndentation();
    } else if (token === ")") {
      decreaseIndent();
      formatted += `\n${getIndentation()}${token}`;
    } else {
      formatted += `${token}`;
      if (index < tokens.length - 1 && tokens[index + 1] !== ")" && tokens[index + 1] !== "(") {
        formatted += ` `;
      }
    }
  });

  document.getElementById("output").textContent = formatted.trim();
});
/* (All Sites) Get Cookies Name + Value */
document.getElementById("extract-cookies").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tab = tabs[0];
    chrome.runtime.sendMessage({ message: "get_cookies", url: tab.url }, (response) => {
      let cookieArray = response.cookies.map((cookie) => {
        return {
          name: cookie.name,
          value: cookie.value,
        };
      });

      // Format it as a JSON string with proper indentation
      let formattedCookies = JSON.stringify(cookieArray, null, 2);

      // Display the formatted JSON inside the pre tag
      document.getElementById("cookieBox").textContent = formattedCookies;
    });
  });
});

/* (crimson) Auto Assign Tickets */
// Send a message to 'subdomain.js';
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("assign-btn");

  button.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["subdomain.js"],
      });
    });
  });
});

/* (crimson) Nimble: https://crimson.meltwater.io/worksheet/myworksheets */
document.getElementById("extract-all").addEventListener("click", (event) => {
  handler(false).then(() => window.close());
});

function handler(filtering = false) {
  var tabId;

  return getCurrentTab()
    .then((items) => {
      tabId = items[0].id;
      return injectScript(tabId);
    })
    .then((item) => {
      const url =
        `${chrome.runtime.getURL("nimble.html")}?` + `tabId=${tabId}&filtering=${filtering}`;
      return openTab(url);
    })
    .catch((error) => window.alert(error));
}

function getCurrentTab() {
  return new Promise((res, rej) => {
    const queryInfo = {
      active: true,
      currentWindow: true,
    };

    chrome.tabs.query(queryInfo, (items) => passNext(items, res, rej));
  });
}

function openTab(url) {
  return new Promise((res, rej) => {
    const createProperties = { active: true, url };
    chrome.tabs.create(createProperties, (tab) => passNext(tab, res, rej));
  });
}

function injectScript(tabId, file = "content-script.js") {
  return new Promise((res, rej) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabId },
        files: [file],
      },
      (item) => passNext(item, res, rej)
    );
  });
}

function passNext(result, fulfill, reject) {
  if (chrome.runtime.lastError) return reject(chrome.runtime.lastError);
  return fulfill(result);
}
