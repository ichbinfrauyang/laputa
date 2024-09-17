/***  CRIMSON: Auto Assign Tickets
 * functioned as 'content-script'; Programatically injected in popup.js
 * popup.html => Auto Assign Ticket =>
 */
console.log("Hi from subdomain.js (contentScript)");

const firstTickbox = document.querySelector(
  "tbody > tr:nth-child(1) > td.p-1.text-center.align-middle.sorting_1 > input"
);
// Tick the first subdomain in queue
async function clickFirstTickbox() {
  const response = await firstTickbox.click();
  return;
}

clickFirstTickbox()
  .then(() => {
    console.log("Clicked 1st Tickbox!");
    // Hiti Create work sheet button
    const secondCreateWorksheet = document.querySelector(
      "#subdomainQueueTable_wrapper > div:nth-child(1) > div.col-sm-12.col-md-6.bulk-operation-container.text-right > div.btn-group.report-menu > button"
    );
    secondCreateWorksheet.click();
  })
  .then(() => {
    console.log("Clicked 2nd createSheet!");
    // Wait 2.5sec for the 'Please choose a subject for your worksheet (optional)' Box
    setTimeout(() => {
      const thirdOKbutton = document.querySelector(
        "#page-top > div.bootbox.modal.fade.bootbox-prompt.show > div > div > div.modal-footer > button.btn.btn-primary.bootbox-accept"
      );
      /*
      'Cancel' Button CSS Selctor
      "body.sidebar-toggled.modal-open > div.bootbox.modal.fade.bootbox-prompt.show > div >div > div.modal-footer >button.btn.btn-secondary.btn-default.bootbox-cancel"
      'Ok' Button CSS Selctor
      #page-top > div.bootbox.modal.fade.bootbox-prompt.show > div > div > div.modal-footer > button.btn.btn-primary.bootbox-accept
      */

      // console.log(thirdOKbutton);
      if (thirdOKbutton) {
        thirdOKbutton.click();
      }
      // 2500
    }, 2500);
  })
  .catch((err) => {
    console.log("Errors: " + err.message);
    alert("Errors: " + err.message);
  });
