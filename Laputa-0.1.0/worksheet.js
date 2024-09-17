/** CWS Notes: Make Notes in CWS tickets
 *  Founctioned as 'Content Script';
 */
console.log("Hi from worksheet.js (contentScript)");

chrome.storage.sync.get(function (items) {
  /*** 1) Auto reload worksheet every 10 mins ***/
  setInterval(function () {
    window.location.reload();
    // 600000 = 10 mins
  }, 600000);

  // Locate 'Reload' Button and Click
  document.arrive("#worksheet-operations > button.btn.btn-primary", function () {
    const reloadBtn = document.querySelector(
      "#worksheet-operations > button.btn.btn-primary > span"
    );
    console.log(reloadBtn);
    reloadBtn.click();
  });
  // reloadBtn.click();

  /***2) Save Notes function ***/
  if (items.cri_add_notes_cws === true) {
    console.log("worksheet");
    const baseEle = document.querySelector("#content > div.container-fluid");
    // console.log(baseEle);
    const span1 = document.createElement("span");
    span1.setAttribute("id", "sp1");
    const span2 = document.createElement("span");
    span2.setAttribute("id", "sp2");
    const textArea = document.createElement("textarea");
    const zeroBtn = document.createElement("button");
    const saveBtn = document.createElement("button");
    const contents = localStorage.getItem("saveInput");

    textArea.setAttribute("id", "notes");
    textArea.setAttribute("class", "text-note");

    saveBtn.textContent = "save";
    saveBtn.setAttribute("id", "save-btn");
    saveBtn.setAttribute("class", "btn2");
    baseEle.append(span1);

    const span1root = document.querySelector("#sp1");
    span1root.append(textArea);
    baseEle.append(span2);
    const span2root = document.querySelector("#sp2");
    span2root.append(saveBtn);

    saveBtn.addEventListener("click", function () {
      let saveInput = textArea.value;
      console.log(saveInput);
      localStorage.setItem("saveInput", saveInput);
    });

    let url = document.location.href;
    chrome.storage.sync.get([url], function (items) {
      // console.log(items[url]);
      notes = items[url];
      if (!notes) {
        notes = "";
      }
      document.getElementById("notes").value = notes;
    });
    // Save notes
    document.getElementById("save-btn").onclick = function () {
      var notes = document.getElementById("notes").value;
      let url = document.location.href;
      var jsonfile = {};
      jsonfile[url] = notes;
      console.log(jsonfile);
      chrome.storage.sync.set(jsonfile, function () {});
    };
  }
});
