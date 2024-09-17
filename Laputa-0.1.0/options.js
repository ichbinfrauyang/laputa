// Saves options to chrome.storage
function saveOptions() {
  //
  const atlas_adicts_highlighter = document.getElementById(
    "atlas_adicts_highlighter"
  ).checked;
  const atlas_date_xpath_generator = document.getElementById(
    "atlas_date_xpath_generator"
  ).checked;
  const atlas_replace_json_editor = document.getElementById(
    "atlas_replace_json_editor"
  ).checked;
  const altas_popup_page = document.getElementById("altas_popup_page").checked;
  const cri_add_notes_cws =
    document.getElementById("cri_add_notes_cws").checked;

  console.log(cri_add_notes_cws);
  chrome.storage.sync.set(
    {
      altas_popup_page: altas_popup_page,
      // atlas_global_addRss: document.getElementById("atlas_global_addRss")
      //   .checked,
      // atlas_preview_highlighter: document.getElementById(
      //   "atlas_preview_highlighter"
      // ).checked,
      atlas_adicts_highlighter: atlas_adicts_highlighter,
      atlas_date_xpath_generator: atlas_date_xpath_generator,
      atlas_replace_json_editor: atlas_replace_json_editor,
      // altas_config_addDefaultLinks: altas_config_addDefaultLinks,
      // cri_auto_assign: document.getElementById("cri_auto_assign").checked,

      // cri_nimble: document.getElementById("cri_nimble").checked,
      cri_add_notes_cws: cri_add_notes_cws,
    },
    function () {
      // Update status to let user know options were saved.
      var status = document.getElementById("alert");
      status.textContent = "Saved!";
      setTimeout(function () {
        status.textContent = "";
      }, 750);
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(
    {
      altas_popup_page: true,
      // atlas_global_addRss: true,
      // atlas_preview_highlighter: true,
      atlas_adicts_highlighter: true,
      atlas_date_xpath_generator: true,
      atlas_replace_json_editor: true,
      // altas_config_addDefaultLinks: true,
      // cri_auto_assign: true,
      // cri_nimble: true,
      cri_add_notes_cws: true,
    },
    function (items) {
      document.getElementById("altas_popup_page").checked =
        items.altas_popup_page;
      // document.getElementById("atlas_global_addRss").checked =
      //   items.atlas_global_addRss;
      // document.getElementById("atlas_preview_highlighter").checked =
      //   items.atlas_preview_highlighter;
      document.getElementById("atlas_adicts_highlighter").checked =
        items.atlas_adicts_highlighter;
      document.getElementById("atlas_date_xpath_generator").checked =
        items.atlas_date_xpath_generator;
      document.getElementById("atlas_replace_json_editor").checked =
        items.atlas_replace_json_editor;
      // document.getElementById("altas_config_addDefaultLinks").value =
      //   items.altas_config_addDefaultLinks;
      // document.getElementById("cri_auto_assign").checked =
      //   items.tk_1_docsearch_filename;
      // document.getElementById("cri_nimble").checked = items.cri_nimble;
      document.getElementById("cri_add_notes_cws").checked =
        items.cri_add_notes_cws;
    }
  );
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
