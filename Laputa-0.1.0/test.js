/** Main functionality for Atlas.UI
 * 01_altas_popup_page
 * 03_altas_preview_highlighter
 * 04_atlas_adicts_highlighter
 * 05_atlas_date_xpath_generator
 * 06_atlas_replace_JSON_editor
 * 07_altas_config_addDefaultLinks
 */
console.log("Howdy, this is Atlas Function!");

/*** 07_altas_config_addDefaultLinks ***/
document.arrive("#mat-tab-label-2-0 > div", function () {
  // SectionLinks Xpath pattern 01;
  const button_01 = document.createElement("button");
  button_01.innerHTML = "▶▶▶";
  button_01.setAttribute(
    "style",
    "background-color:#ffffff;border:none;color:#04AA6D"
  );
  const sectionLinksPattern_01 = document.querySelector(
    "#mat-tab-content-1-1 > div > div > mat-tab-group div.mat-tab-body-wrapper > mat-tab-body:nth-child(1) > div > app-section-extractor-editor >form>mat-card:nth-child(3) > mat-card-content >div>div  > mat-expansion-panel:nth-child(2) > mat-expansion-panel-header > span:nth-child(1)> mat-panel-title"
  );
  sectionLinksPattern_01.appendChild(button_01);
  const addBut = document.querySelector(
    "#mat-tab-content-1-1 > div > div > mat-tab-group div.mat-tab-body-wrapper > mat-tab-body:nth-child(1) > div > app-section-extractor-editor >form>mat-card:nth-child(3) > mat-card-content >div>div  > mat-expansion-panel:nth-child(2) > mat-expansion-panel-header > span:nth-child(1)> mat-panel-title > button"
  );
  const input1 = $("body").xpath(
    "/html/body/app-root/app-admin-layout/div/mat-drawer-container/mat-drawer-content/app-source-container/app-page-load/div/mat-drawer-container/mat-drawer-content/mat-drawer-container/mat-drawer-content/main/app-source-config/app-page-load/div/div/mat-card/mat-card-content/div/mat-sidenav-container/mat-sidenav-content/div/mat-tab-group/div/mat-tab-body[1]/div/app-source-config-form-editor/div/mat-tab-group/div/mat-tab-body[2]/div/div/mat-tab-group/div/mat-tab-body[1]/div/app-section-extractor-editor/form/mat-card[3]/mat-card-content/div/div/mat-expansion-panel[1]/div/div/div/div[1]/mat-form-field/div/div[1]/div/input"
  );
  const input2 = $("body").xpath(
    "/html/body/app-root/app-admin-layout/div/mat-drawer-container/mat-drawer-content/app-source-container/app-page-load/div/mat-drawer-container/mat-drawer-content/mat-drawer-container/mat-drawer-content/main/app-source-config/app-page-load/div/div/mat-card/mat-card-content/div/mat-sidenav-container/mat-sidenav-content/div/mat-tab-group/div/mat-tab-body[1]/div/app-source-config-form-editor/div/mat-tab-group/div/mat-tab-body[2]/div/div/mat-tab-group/div/mat-tab-body[1]/div/app-section-extractor-editor/form/mat-card[3]/mat-card-content/div/div/mat-expansion-panel[1]/div/div/div/div[2]/mat-form-field/div/div[1]/div/input"
  );
  const input3 = $("body").xpath(
    "/html/body/app-root/app-admin-layout/div/mat-drawer-container/mat-drawer-content/app-source-container/app-page-load/div/mat-drawer-container/mat-drawer-content/mat-drawer-container/mat-drawer-content/main/app-source-config/app-page-load/div/div/mat-card/mat-card-content/div/mat-sidenav-container/mat-sidenav-content/div/mat-tab-group/div/mat-tab-body[1]/div/app-source-config-form-editor/div/mat-tab-group/div/mat-tab-body[2]/div/div/mat-tab-group/div/mat-tab-body[1]/div/app-section-extractor-editor/form/mat-card[3]/mat-card-content/div/div/mat-expansion-panel[1]/div/div/div/div[3]/mat-form-field/div/div[1]/div/input"
  );
  const input4 = $("body").xpath(
    "/html/body/app-root/app-admin-layout/div/mat-drawer-container/mat-drawer-content/app-source-container/app-page-load/div/mat-drawer-container/mat-drawer-content/mat-drawer-container/mat-drawer-content/main/app-source-config/app-page-load/div/div/mat-card/mat-card-content/div/mat-sidenav-container/mat-sidenav-content/div/mat-tab-group/div/mat-tab-body[1]/div/app-source-config-form-editor/div/mat-tab-group/div/mat-tab-body[2]/div/div/mat-tab-group/div/mat-tab-body[1]/div/app-section-extractor-editor/form/mat-card[3]/mat-card-content/div/div/mat-expansion-panel[2]/div/div/div/div[1]/mat-form-field/div/div[1]/div/input"
  );
  const input5 = $("body").xpath(
    "/html/body/app-root/app-admin-layout/div/mat-drawer-container/mat-drawer-content/app-source-container/app-page-load/div/mat-drawer-container/mat-drawer-content/mat-drawer-container/mat-drawer-content/main/app-source-config/app-page-load/div/div/mat-card/mat-card-content/div/mat-sidenav-container/mat-sidenav-content/div/mat-tab-group/div/mat-tab-body[1]/div/app-source-config-form-editor/div/mat-tab-group/div/mat-tab-body[2]/div/div/mat-tab-group/div/mat-tab-body[1]/div/app-section-extractor-editor/form/mat-card[3]/mat-card-content/div/div/mat-expansion-panel[2]/div/div/div/div[2]/mat-form-field/div/div[1]/div/input"
  );
  const input6 = $("body").xpath(
    "/html/body/app-root/app-admin-layout/div/mat-drawer-container/mat-drawer-content/app-source-container/app-page-load/div/mat-drawer-container/mat-drawer-content/mat-drawer-container/mat-drawer-content/main/app-source-config/app-page-load/div/div/mat-card/mat-card-content/div/mat-sidenav-container/mat-sidenav-content/div/mat-tab-group/div/mat-tab-body[1]/div/app-source-config-form-editor/div/mat-tab-group/div/mat-tab-body[2]/div/div/mat-tab-group/div/mat-tab-body[1]/div/app-section-extractor-editor/form/mat-card[3]/mat-card-content/div/div/mat-expansion-panel[2]/div/div/div/div[3]/mat-form-field/div/div[1]/div/input"
  );
  addBut.addEventListener("click", () => {
    // input1.animate(
    //   {
    //     top: input1.position().top + 194,
    //     left: input1.position().left + 200,
    //   },
    //   1200,
    //   "swing",
    //   function () {
    //     input1.focus();
    //     type("TEST", 0);
    //   }
    // );
    // function type(string, index) {
    //   var val = string.substr(0, index + 1);
    //   input1.attr("value", val);
    //   if (index < string.length) {
    //     setTimeout(function () {
    //       type(string, index + 1);
    //     }, Math.random() * 50);
    //   } else {
    //     console.log("Done typing!");
    //   }
    // }
    input1.val("(//a)[@href]");
    input2.val("wrty:absolutify-url(./@href)");
    input3.val("wrty:normalize-space(string(.))");
    input4.val("(//a)[@href]");
    input5.val("wrty:absolutify-url(./@href)");
    input6.val("wrty:normalize-space(string(.))");
  });
});
/* 03_altas_preview_highlighter ********************************************************************************************************************************************************************/
// document.arrive("", function () {
//   document.querySelector("");
// });
/*** 04_atlas_adicts_highlighter ***/
chrome.storage.sync.get(function (items) {
  // console.log(extOptions.atlas_adicts_highlighter);
  if (items.atlas_adicts_highlighter === true) {
    // Title
    document.arrive(
      "app-article-extractor-editor > form > mat-card:nth-child(3) > .mat-card-content > div > div:nth-child(2)",
      function () {
        // "rgb(238, 129, 195, 0.75)";
        document.querySelector(
          "app-article-extractor-editor > form > mat-card:nth-child(3) > .mat-card-content > div > div:nth-child(2)"
        ).style.backgroundColor = "rgb(235, 115, 145,0.9)";
      }
    );
    // Date
    document.arrive(
      "app-article-extractor-editor > form > mat-card:nth-child(3) > .mat-card-content > div > *:not(div):last-of-type > div > div > div:first-child",
      function () {
        // "rgb(246, 200, 132, 0.8)";
        document.querySelector(
          "app-article-extractor-editor > form > mat-card:nth-child(3) > .mat-card-content > div > *:not(div):last-of-type > div > div > div:first-child"
        ).style.backgroundColor = "rgb(240, 146, 65, 0.8)";
      }
    );
    // Ingress
    document.arrive(
      "app-article-extractor-editor > form > mat-card:nth-child(3) > .mat-card-content > div > [formgroupname='ingress'] > div > div > div:nth-child(2)",
      function () {
        // "rgb(210, 253, 138, 0.8)";
        document.querySelector(
          "app-article-extractor-editor > form > mat-card:nth-child(3) > .mat-card-content > div > [formgroupname='ingress'] > div > div > div:nth-child(2)"
        ).style.backgroundColor = "rgb(184, 176, 174, 0.5)";
      }
    );
    // Content
    document.arrive(
      "app-article-extractor-editor > form > mat-card:nth-child(3) > .mat-card-content > div > [formgroupname='content'] > div > div > div:nth-child(2) > div > div:nth-child(1)",
      function () {
        // "rgb(157, 252, 202, 0.8)";
        document.querySelector(
          "app-article-extractor-editor > form > mat-card:nth-child(3) > .mat-card-content > div > [formgroupname='content'] > div > div > div:nth-child(2) > div > div:nth-child(1)"
        ).style.backgroundColor = "rgb(169, 224, 117, 0.8)";
      }
    );
    // Byline
    document.arrive(
      "app-article-extractor-editor > form > mat-card:nth-child(3) > .mat-card-content > div > div:nth-child(3)",
      function () {
        // "rgb(139, 196, 250, 0.7)";
        document.querySelector(
          "app-article-extractor-editor > form > mat-card:nth-child(3) > .mat-card-content > div > div:nth-child(3)"
        ).style.backgroundColor = "rgb(90, 175, 249, 0.6)";
      }
    );
  }
});

/* 05_atlas_date_xpath_generator */
chrome.storage.sync.get(function (items) {
  // console.log(extOptions.atlas_adicts_highlighter);
  if (items.atlas_date_xpath_generator === true) {
    document.arrive(
      "app-article-extractor-editor > form > mat-card:nth-child(3) > .mat-card-content > div",
      function (newElem) {
        const baseDateEle = document.querySelector(
          "app-article-extractor-editor > form > mat-card:nth-child(3) > .mat-card-content > div"
        );
        // console.log(baseDateEle);
        // <div id="result"></div>;
        const div = document.createElement("div");
        div.setAttribute("id", "result");
        const select = document.createElement("select");
        select.setAttribute("id", "options");
        // 26 Lan at hand
        const option_00 = document.createElement("option");
        option_00.textContent = "Please select date language";
        option_00.setAttribute("value", "null");

        const option_01 = document.createElement("option");
        option_01.textContent = "Arabic";
        option_01.setAttribute(
          "data-display",
          `replace(string(replace(string(replace(string(replace(string(replace
        (string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string
          (replace(ROOT___XPATH, "يناير", "January"))
          , "فبراير","February")),"مارس","March")),"أبريل","April")),"ماي","May")),"يونيو","June")),"يوليو"
          ,"July")),"أغسطس","August")),"سبتمبر","September")),"أكتوبر","October")),"نوفمبر","November")),"ديسمبر","December")`
        );

        const option_02 = document.createElement("option");
        option_02.textContent = "Catalan";
        option_02.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'জানুয়ারি','January'),'ফেব্রুয়ারি','February'),'মার্চ','March'),'এপ্রিল','April'),'মে','May'),'জুন','June'),'জুলাই','July'),'আগস্ট','August'),'সেপ্টেম্বর','September'),'অক্টোবর','October'),'নভেম্বর','November'),'ডিসেম্বর','December')`
        );
        const option_03 = document.createElement("option");
        option_03.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'prosince','December'),'listopadu','November'),'října','October'),'září','September'),'srpna','August'),'července','July'),'června','June'),'května','May'),'dubna','April'),'března','March'),'února','February'),'ledna','January')`
        );
        option_03.textContent = "Czech";

        const option_04 = document.createElement("option");
        option_04.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'জানুয়ারি','January'),'ফেব্রুয়ারি','February'),'মার্চ','March'),'এপ্রিল','April'),'মে','May'),'জুন','June'),'জুলাই','July'),'আগস্ট','August'),'সেপ্টেম্বর','September'),'অক্টোবর','October'),'নভেম্বর','November'),'ডিসেম্বর','December')`
        );
        option_04.textContent = "Bangladesh";
        //
        const option_05 = document.createElement("option");
        option_05.setAttribute("data-display", "05");
        option_05.textContent = "Czech";

        const option_06 = document.createElement("option");
        option_06.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'december','December'),'november','November'),'oktober','October'),'september','September'),'august','August'),'juli','July'),'juni','June'),'maj','May'),'april','April'),'marts','March'),'februar','February'),'januar','January')`
        );
        option_06.textContent = "Danish";

        const option_07 = document.createElement("option");
        option_07.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'december','December'),'november','November'),'oktober','October'),'september','September'),'augustus','August'),'juli','July'),'juni','June'),'mei','May'),'april','April'),'maart','March'),'februari','February'),'januari','January')`
        );
        option_07.textContent = "Dutch";

        const option_08 = document.createElement("option");
        option_08.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'décembre','December'),'novembre','November'),'octobre','October'),'septembre','September'),'août','August'),'juillet','July'),'juin','June'),'mai','May'),'avril','April'),'mars','March'),'février','February'),'janvier','January')`
        );
        option_08.textContent = "French";

        const option_09 = document.createElement("option");
        option_09.setAttribute(
          "data-display",
          `"replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'Dezember','December'),'November','November'),'Oktober','October'),'September','September'),'August','August'),'Juli','July'),'Juni','June'),'Mai','May'),'April','April'),'März','March'),'Februar','February'),'Januar','January')"`
        );
        option_09.textContent = "German";

        const option_10 = document.createElement("option");
        option_10.setAttribute(
          "data-display",
          `(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(<ROOT____XPATH>,'Ιανουαρίου','January')),'Φεβρουαρίου','February')),'Μαρτίου','March')),'Απριλίου', 'April')),'Μαΐου','May')),'Ιουνίου','June')),'Ιουλίου','July')),'Αυγούστου','August')),'Σεπτεμβρίου','September')),'Οκτωβρίου','October')),'Νοεμβρίου','November')),'Δεκεμβρίου','December'))`
        );
        option_10.textContent = "Greek";

        const option_11 = document.createElement("option");
        option_11.setAttribute(
          "data-display",
          `(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(<ROOT____XPATH>,'जनवरी','January')),'जनवरी ','February')),'फ़रवरी','March')),'अप्रैल', 'April')),'मई','May')),'जून','June')),'जुलाई','July')),'अगस्त','August')),'सितंबर','September')),'अक्टूबर','October')),'नवंबर','November')),'दिसंबर','December'))`
        );
        option_11.textContent = "Hindi";

        const option_12 = document.createElement("option");
        option_12.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'דצמבר','December'),'נובמבר','November'),'אוקטובר','October'),'ספטמבר','September'),'אוגוסט','August'),'יולי','July'),'יוני','June'),'מאי','May'),'אפריל ','April'),'מרס','March'),'פברואר ','February'),'ינואר','January')`
        );
        option_12.textContent = "Hebrew";

        const option_13 = document.createElement("option");
        option_13.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'december','December'),'november','November'),'október','October'),'szeptember','September'),'augusztus','August'),'július','July'),'június','June'),'május','May'),'április','April'),'március','March'),'február','February'),'január','January')`
        );
        option_13.textContent = "Hungarian";

        const option_14 = document.createElement("option");
        option_14.setAttribute(
          "data-display",
          `if(//span[@class='data']/strong/contains(.,'gennaio')) then(replace((//span[@class='data']/strong)[1],'gennaio','01')) else( if(//span[@class='data']/strong/contains(.,'febbraio')) then(replace((//span[@class='data']/strong)[1],'febbraio','02')) else( if(//span[@class='data']/strong/contains(.,'marzo')) then(replace((//span[@class='data']/strong)[1],'marzo','03')) else( if(//span[@class='data']/strong/contains(.,'aprile')) then(replace((//span[@class='data']/strong)[1],'aprile','04')) else( if(//span[@class='data']/strong/contains(.,'maggio')) then(replace((//span[@class='data']/strong)[1],'maggio','05')) else( if(//span[@class='data']/strong/contains(.,'giugno')) then(replace((//span[@class='data']/strong)[1],'giugno,','06')) else( if(//span[@class='data']/strong/contains(.,'luglio')) then(replace((//span[@class='data']/strong)[1],'luglio','07')) else( if(//span[@class='data']/strong/contains(.,'agosto')) then(replace((//span[@class='data']/strong)[1],'agosto','08')) else( if(//span[@class='data']/strong/contains(.,'settembre')) then(replace((//span[@class='data']/strong)[1],'settembre','09')) else( if(//span[@class='data']/strong/contains(.,'ottobre')) then(replace((//span[@class='data']/strong)[1],'ottobre','10')) else( if(//span[@class='data']/strong/contains(.,'novembre')) then(replace((//span[@class='data']/strong)[1],'novembre','11')) else( if(//span[@class='data']/strong/contains(.,'dicembre')) then(replace((//span[@class='data']/strong)[1],'dicembre','12')) else())))))))))))`
        );
        option_14.textContent = "Italian";

        const option_15 = document.createElement("option");
        option_15.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'Desember','December'),'November','November'),'Oktober','October'),'September','September'),'Agustus','August'),'Juli','July'),'Juni','June'),'Mei','May'),'April','April'),'Maret','March'),'Februari','February'),'Januari','January')`
        );
        option_15.textContent = "Indonesian";

        const option_16 = document.createElement("option");
        option_16.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'ធ្នូ','December'),'វិច្ឆិកា','November'),'តុលា','October'),'កញ្ញា','September'),'សីហា','August'),'កក្កដា','July'),'មិថុនា','June'),'ឧសភា','May'),'មេសា','April'),'មីនា','March'),'កុម្ភៈ','February'),'មករា','January')`
        );
        option_16.textContent = "Khmer";

        const option_17 = document.createElement("option");
        option_17.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'janvāris','January'),'februāris','February'),'marts','March'),'aprīlis','April'),'maijs','May'),'jūnijs','June'),'jūlijs','July'),'augusts','August'),'septembris','September'),'oktobris','October'),'novembris','November'),'decembris','December')`
        );
        option_17.textContent = "Latvian";

        const option_18 = document.createElement("option");
        option_18.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>, 'มกราคม', 'January'),'กุมภาพันธ์', 'February'),'มีนาคม','March'),'เมษายน','April'),'พฤษภาคม','May'),'มิถุนายน','June'),'กรกฎาคม','July'),'สิงหาคม','August'),'กันยายน','September'),'ตุลาคม','October'),'พฤศจิกายน','November'),'ธันวาคม','December')`
        );
        option_18.textContent = "Thai";

        const option_19 = document.createElement("option");
        option_19.setAttribute(
          "data-display",
          `replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(<ROOT____XPATH>), 'Janeiro', 'January')),'Fevereiro','February')),'Março','March')),'Abril','April')),'Maio','May')),'Junho','June')),'Julho','July')),'Agosto','August')),'Setembro','September')),'Outubro','October')),'Novembro','November')),'Dezembro','December')`
        );
        option_19.textContent = "Portuguese";

        const option_20 = document.createElement("option");
        option_20.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'декабря','December'),'ноября','November'),'октября','October'),'сентября','September'),'августа','August'),'июля','July'),'июня','June'),'мая','May'),'апреля','April'),'марта','March'),'февраля','February'),'января','January')`
        );
        option_20.textContent = "Russian";

        const option_21 = document.createElement("option");
        option_21.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'Decembar|December','12'),'Novembar','11'),'Oktobar','10'),'Septembar','09'),'Avgust','08'),'Jul','07'),'Maj','05'),'Mart','03'),'Februar','02'),'Januar','01'),'Juni','06')`
        );
        option_21.textContent = "Serbian";

        const option_22 = document.createElement("option");
        option_22.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'decembra','December'),'novembra','November'),'oktobra','October'),'septembra','September'),'avgusta','August'),'julija','July'),'junija','June'),'maja','May'),'aprila','April'),'marca','March'),'februarja','February'),'januarja','January')`
        );
        option_22.textContent = "Slovenian";

        const option_23 = document.createElement("option");
        option_23.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'Diciembre','December'),'Noviembre','November'),'Octubre','October'),'Septiembre','September'),'Agosto','August'),'Julio','July'),'Junio','June'),'Mayo','May'),'Abril','April'),'Marzo','March'),'Februari','February'),'Enero','January')`
        );
        option_23.textContent = "Spanish";

        const option_24 = document.createElement("option");
        option_24.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'december','December'),'november','November'),'oktober','October'),'september','September'),'augusti','August'),'juli','July'),'juni','June'),'maj','May'),'april','April'),'mars','March'),'februari','February'),'januari','January')`
        );
        option_24.textContent = "Swedish";

        const option_25 = document.createElement("option");
        option_25.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<ROOT____XPATH>,'декабр','December'),'ноябр','November'),'октябр','October'),'сентябр','September'),'август','August'),'июл','July'),'июн','June'),'май','May'),'апрел','April'),'март','March'),'феврал','February'),'январ','January')`
        );
        option_25.textContent = "Tajik";

        const option_26 = document.createElement("option");
        option_26.setAttribute(
          "data-display",
          `replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(<ROOT____XPATH>, 'Ocak', 'January')), 'Şubat','February')),'Mart','March')),'Nisan','April')),'Mayıs','May')),'Haziran','June')),'Temmuz','July')),'Ağustos','August')),'Eylül','September')),'Ekim','October')),'Kasım','November')),'Aralık','December')`
        );
        option_26.textContent = "Turkish";

        const option_27 = document.createElement("option");
        option_27.setAttribute(
          "data-display",
          `replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(<REPLACE_UNIQUE_XPATH_HERE>,'Grudzień','December'),'Listopad','November'),'Październik','October'),'Wrzesień','September'),'Sierpień','August'),'Lipiec','July'),'Czerwiec','June'),'Maj','May'),'Kwiecień','April'),'Marzec','March'),'Luty','February'),'Styczeń','January')`
        );
        option_27.textContent = "Polish";

        const option_28 = document.createElement("option");
        option_28.setAttribute(
          "data-display",
          `(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(string(replace(<REPLACE_UNIQUE_XPATH_HERE>,'Sausis','January')),'Vasaris','February')),'Kovas','March')),'Balandis', 'April')),'Gegužė','May')),'Birželis','June')),'Liepa','July')),'Rugpjūtis','August')),'Rugsėjis','September')),'Spalis','October')),'Lapkritis','November')),'Gruodis','December'))`
        );
        option_28.textContent = "Lithuanian";

        const option_29 = document.createElement("option");
        option_29.setAttribute(
          "data-display",
          `concat(number(substring(substring-after(string(replace(//*[contains(@class,'publish-time')],'[^\\d\\.]','')),'..'),0,4))+1911, substring(substring-after(string(replace(//*[contains(@class,'publish-time')],'[^\\d\\.]','')),'..'),4))`
        );
        option_29.textContent = "North Korea (Juche to English)";

        // const select = document.createElement("select");
        baseDateEle.appendChild(select);
        baseDateEle.appendChild(div);

        select.appendChild(option_00);
        select.appendChild(option_01);
        select.appendChild(option_02);
        select.appendChild(option_03);
        select.appendChild(option_04);
        select.appendChild(option_05);
        select.appendChild(option_06);
        select.appendChild(option_07);
        select.appendChild(option_08);
        select.appendChild(option_09);
        select.appendChild(option_10);
        select.appendChild(option_11);
        select.appendChild(option_12);
        select.appendChild(option_13);
        select.appendChild(option_14);
        select.appendChild(option_15);
        select.appendChild(option_16);
        select.appendChild(option_17);
        select.appendChild(option_18);
        select.appendChild(option_19);
        select.appendChild(option_20);
        select.appendChild(option_21);
        select.appendChild(option_22);
        select.appendChild(option_23);
        select.appendChild(option_24);
        select.appendChild(option_25);
        select.appendChild(option_26);
        select.appendChild(option_27);
        select.appendChild(option_28);
        select.appendChild(option_29);

        const options = document.getElementById("options");
        const result = document.getElementById("result");

        options.addEventListener("change", writeResult);

        function writeResult() {
          var selected = this.options[this.selectedIndex];
          var attribute = selected.dataset.display;
          var display = attribute ? attribute : "";
          result.innerHTML = "<p>" + display + "</p>";
        }
      }
    );
  }
});

/* 06_atlas_replace_JSON_editor */
const replaceFormatJSON = `
,
"download": {
  
},
"schedule": {
  "startUrls": {
    "html": [
      ""
    ]
  }
},
"urlFilter": {
  "depthLimit": 2,
  "sectionLinkPatterns": [
    ""
  ],
  "articleLinkPatterns": [
    ""
  ],
  "ignoreLinkPatterns": [
  ],
  "patternPriority": "articleOverSection",
  "urlXpathIndexXML": [
    
  ],
  "urlXpathPlainXML": [
    
  ]
},
"urlNormalizer": {
  
},
"extractionTask": {
  "extractorSelector": {
    "type": "NewsTieBreak"
  },
  "extractors": [
    {
      "name": "article_extractor_0",
      "selectionCondition": {
        "type": "RuleBased",
        "rules": [
          {
            "type": "UrlOverwrites",
            "stopOnSuccess": true,
            "stopOnFailure": false,
            "urls": [
              
            ]
          },
          {
            "type": "UrlProvidedPatterns",
            "stopOnSuccess": true,
            "stopOnFailure": true,
            "partialMatch": true
          }
        ]
      },
      "extractionSpecification": {
        "type": "NewsArticle",
        "datePublished": {
          "type": "ExtendedDate",
          "dateline": {
            "type": "String",
            "xpath": "",
            "encoding": "UTF-8"
          },
          "date": {
            "type": "String",
            "xpath": "",
            "encoding": "UTF-8"
          },
          "time": {
            "type": "String",
            "xpath": "",
            "encoding": "UTF-8"
          }
        },
        "ingress": {
          "type": "String",
          "xpath": "",
          "encoding": "UTF-8"
        },
        "mainImage": {
          "type": "Object",
          "url": {
            "type": "String",
            "xpath": "",
            "encoding": "UTF-8"
          }
        },
        "images": {
          "type": "List",
          "baseXpath": "",
          "items": {
            "type": "Object",
            "url": {
              "type": "String",
              "xpath": "",
              "encoding": "UTF-8"
            }
          }
        },
        "keywords": {
          "type": "String",
          "xpath": "",
          "encoding": "UTF-8"
        },
        "contentHyperlinks": {
          "type": "UrlList",
          "baseXpath": "(",
          "url": {
            "type": "Url",
            "xpath": ""
          },
          "linkType": "unknown"
        },
        "title": {
          "type": "String",
          "xpath": "",
          "encoding": "UTF-8"
        },
        "byline": {
          "type": "String",
          "xpath": "",
          "encoding": "UTF-8"
        },
        "content": {
          "type": "Sequence",
          "includeXpath": "",
          "separator": "\n\n",
          "excludeXpath": "()//script"
        },
        "authors": {
          "type": "List",
          "baseXpath": "",
          "items": {
            "type": "Object",
            "name": {
              "type": "String",
              "xpath": "wrty:normalize-space(wrty:string(.))",
              "encoding": "UTF-8"
            }
          }
        }
      }
    },
    {
      "name": "section_extractor_0",
      "selectionCondition": {
        "type": "RuleBased",
        "rules": [
          {
            "type": "UrlOverwrites",
            "stopOnSuccess": true,
            "stopOnFailure": false,
            "urls": [
            ]
          },
          {
            "type": "UrlProvidedPatterns",
            "stopOnSuccess": true,
            "stopOnFailure": true,
            "partialMatch": true
          }
        ]
      },
      "extractionSpecification": {
        "type": "CrawlingData",
        "sectionLinks": {
          "type": "UrlList",
          "baseXpath": "(//a)[@href]",
          "url": {
            "type": "Url",
            "xpath": "wrty:absolutify-url(./@href)"
          },
          "title": {
            "type": "String",
            "xpath": "wrty:normalize-space(string(.))",
            "encoding": "UTF-8"
          },
          "linkType": "navigation"
        },
        "articleLinks": {
          "type": "UrlList",
          "baseXpath": "(//a)[@href]",
          "url": {
            "type": "Url",
            "xpath": "wrty:absolutify-url(./@href)"
          },
          "title": {
            "type": "String",
            "xpath": "wrty:normalize-space(string(.))",
            "encoding": "UTF-8"
          },
          "linkType": "content"
        }
      }
    },
    {
      "name": "ignore_extractor",
      "selectionCondition": {
        "type": "RuleBased",
        "rules": [
          {
            "type": "UrlProvidedPatterns",
            "stopOnSuccess": true,
            "stopOnFailure": true,
            "partialMatch": true
          }
        ]
      },
      "extractionSpecification": {
        "type": "Ignore"
      }
    }
  ]
},
"publishDateParser": {
  "datePartsOrders": [
    [
      
    ]
  ]
}
}
`;
chrome.storage.sync.get(function (items) {
  if (items.atlas_replace_json_editor === true) {
    document.arrive(
      /* Await the whole  JSON editor widget window*/
      // Drop Down Menu === "Text"
      "#mat-tab-content-0-1 > div > app-source-config-json-editor > json-editor > div > div.jsoneditor.jsoneditor-mode-text > div.jsoneditor-outer.has-main-menu-bar.has-status-bar",
      function (newElem) {
        setTimeout(() => {
          // Button in JSON Editor
          const button = document.createElement("button");
          const div = document.createElement("div");

          const ele = document.querySelector(
            // Drop Menu === "Text";
            "#mat-tab-content-0-1 > div > app-source-config-json-editor > json-editor > div > div.jsoneditor.jsoneditor-mode-text > div.jsoneditor-menu"
          );

          //           const replaceFormatJSON = `
          // ,
          // "download": {

          // },
          // "schedule": {
          //   "startUrls": {
          //     "html": [
          //       ""
          //     ]
          //   }
          // },
          // "urlFilter": {
          //   "depthLimit": 2,
          //   "sectionLinkPatterns": [
          //     ""
          //   ],
          //   "articleLinkPatterns": [
          //     ""
          //   ],
          //   "ignoreLinkPatterns": [
          //   ],
          //   "patternPriority": "articleOverSection",
          //   "urlXpathIndexXML": [

          //   ],
          //   "urlXpathPlainXML": [

          //   ]
          // },
          // "urlNormalizer": {

          // },
          // "extractionTask": {
          //   "extractorSelector": {
          //     "type": "NewsTieBreak"
          //   },
          //   "extractors": [
          //     {
          //       "name": "article_extractor_0",
          //       "selectionCondition": {
          //         "type": "RuleBased",
          //         "rules": [
          //           {
          //             "type": "UrlOverwrites",
          //             "stopOnSuccess": true,
          //             "stopOnFailure": false,
          //             "urls": [

          //             ]
          //           },
          //           {
          //             "type": "UrlProvidedPatterns",
          //             "stopOnSuccess": true,
          //             "stopOnFailure": true,
          //             "partialMatch": true
          //           }
          //         ]
          //       },
          //       "extractionSpecification": {
          //         "type": "NewsArticle",
          //         "datePublished": {
          //           "type": "ExtendedDate",
          //           "dateline": {
          //             "type": "String",
          //             "xpath": "",
          //             "encoding": "UTF-8"
          //           },
          //           "date": {
          //             "type": "String",
          //             "xpath": "",
          //             "encoding": "UTF-8"
          //           },
          //           "time": {
          //             "type": "String",
          //             "xpath": "",
          //             "encoding": "UTF-8"
          //           }
          //         },
          //         "ingress": {
          //           "type": "String",
          //           "xpath": "",
          //           "encoding": "UTF-8"
          //         },
          //         "mainImage": {
          //           "type": "Object",
          //           "url": {
          //             "type": "String",
          //             "xpath": "",
          //             "encoding": "UTF-8"
          //           }
          //         },
          //         "images": {
          //           "type": "List",
          //           "baseXpath": "",
          //           "items": {
          //             "type": "Object",
          //             "url": {
          //               "type": "String",
          //               "xpath": "",
          //               "encoding": "UTF-8"
          //             }
          //           }
          //         },
          //         "keywords": {
          //           "type": "String",
          //           "xpath": "",
          //           "encoding": "UTF-8"
          //         },
          //         "contentHyperlinks": {
          //           "type": "UrlList",
          //           "baseXpath": "(",
          //           "url": {
          //             "type": "Url",
          //             "xpath": ""
          //           },
          //           "linkType": "unknown"
          //         },
          //         "title": {
          //           "type": "String",
          //           "xpath": "",
          //           "encoding": "UTF-8"
          //         },
          //         "byline": {
          //           "type": "String",
          //           "xpath": "",
          //           "encoding": "UTF-8"
          //         },
          //         "content": {
          //           "type": "Sequence",
          //           "includeXpath": "",
          //           "separator": "\n\n",
          //           "excludeXpath": "()//script"
          //         },
          //         "authors": {
          //           "type": "List",
          //           "baseXpath": "",
          //           "items": {
          //             "type": "Object",
          //             "name": {
          //               "type": "String",
          //               "xpath": "wrty:normalize-space(wrty:string(.))",
          //               "encoding": "UTF-8"
          //             }
          //           }
          //         }
          //       }
          //     },
          //     {
          //       "name": "section_extractor_0",
          //       "selectionCondition": {
          //         "type": "RuleBased",
          //         "rules": [
          //           {
          //             "type": "UrlOverwrites",
          //             "stopOnSuccess": true,
          //             "stopOnFailure": false,
          //             "urls": [
          //             ]
          //           },
          //           {
          //             "type": "UrlProvidedPatterns",
          //             "stopOnSuccess": true,
          //             "stopOnFailure": true,
          //             "partialMatch": true
          //           }
          //         ]
          //       },
          //       "extractionSpecification": {
          //         "type": "CrawlingData",
          //         "sectionLinks": {
          //           "type": "UrlList",
          //           "baseXpath": "(//a)[@href]",
          //           "url": {
          //             "type": "Url",
          //             "xpath": "wrty:absolutify-url(./@href)"
          //           },
          //           "title": {
          //             "type": "String",
          //             "xpath": "wrty:normalize-space(string(.))",
          //             "encoding": "UTF-8"
          //           },
          //           "linkType": "navigation"
          //         },
          //         "articleLinks": {
          //           "type": "UrlList",
          //           "baseXpath": "(//a)[@href]",
          //           "url": {
          //             "type": "Url",
          //             "xpath": "wrty:absolutify-url(./@href)"
          //           },
          //           "title": {
          //             "type": "String",
          //             "xpath": "wrty:normalize-space(string(.))",
          //             "encoding": "UTF-8"
          //           },
          //           "linkType": "content"
          //         }
          //       }
          //     },
          //     {
          //       "name": "ignore_extractor",
          //       "selectionCondition": {
          //         "type": "RuleBased",
          //         "rules": [
          //           {
          //             "type": "UrlProvidedPatterns",
          //             "stopOnSuccess": true,
          //             "stopOnFailure": true,
          //             "partialMatch": true
          //           }
          //         ]
          //       },
          //       "extractionSpecification": {
          //         "type": "Ignore"
          //       }
          //     }
          //   ]
          // },
          // "publishDateParser": {
          //   "datePartsOrders": [
          //     [

          //     ]
          //   ]
          // }
          // }
          // `;

          button.setAttribute("type", "button");
          button.setAttribute("id", "replace-btn");

          ele.appendChild(button);

          div.setAttribute("id", "replace-div");
          div.setAttribute(
            "style",
            "display:none; position: absolute;background-color: #f1f1f1;min-width: 160px;min-height: 800px;color:black"
          );
          div.textContent = replaceFormatJSON;
          ele.appendChild(div);
          const eleButton = document.getElementById("replace-btn");
          // Click "Replace" Button
          eleButton.addEventListener("click", () => {
            console.log("Howdy!");
            const text = document.getElementById("replace-div");
            if (text.style.display === "none") {
              text.style.display = "inline";
            } else {
              text.style.display = "none";
            }
          });
        }, 1000);
      }
    );
  }
});

/* 01_altas_popup_page ********************************************************************************************************************************************************************/
// https://atlas.meltwater.io/sources/*/meta // https://atlas.meltwater.io/sources/*/config // https://atlas.meltwater.io/sources/*/enrichment
// https://atlas.meltwater.io/sources/*/migration // https://atlas.meltwater.io/sources/*/pushdoc // https://atlas.meltwater.io/sources/*/induction

chrome.storage.sync.get(function (items) {
  if (items.altas_popup_page === true) {
    document.arrive(
      "body > app-root > app-admin-layout > div > mat-drawer-container > mat-drawer-content > app-source-container > app-page-load > div > mat-drawer-container > mat-drawer > div > app-source-sidenav > div > div.menu-buttons > button:nth-child(2) > span.mat-button-wrapper > span",
      function (newElem) {
        const id = document.querySelector(
          "body > app-root > app-admin-layout > div > mat-drawer-container > mat-drawer-content > app-source-container > app-page-load > div > mat-drawer-container > mat-drawer > div > app-source-sidenav > div > div.menu-buttons > button:nth-child(7)"
        );
        const baseURL = id.getAttribute("href");
        console.log(baseURL);
        const regex =
          /https:\/\/crimson\.meltwater\.io\/inspect\/source\?id=(.+)/;
        const meta = baseURL.replace(
          regex,
          "https://atlas.meltwater.io/sources/$1/meta"
        );
        const config = baseURL.replace(
          regex,
          "https://atlas.meltwater.io/sources/$1/config"
        );
        const enrichment = baseURL.replace(
          regex,
          "https://atlas.meltwater.io/sources/$1/enrichment"
        );
        const pushdoc = baseURL.replace(
          regex,
          "https://atlas.meltwater.io/sources/$1/pushdoc"
        );
        const induction = baseURL.replace(
          regex,
          "https://atlas.meltwater.io/sources/$1/induction"
        );
        const migration = baseURL.replace(
          regex,
          "https://atlas.meltwater.io/sources/$1/migration"
        );
        //button_01 button_02 button_03 button_04 button_05 button_06 button_07
        const div = document.createElement("div");
        const button_01 = document.createElement("button");
        // \u23FB
        button_01.textContent = "🇲";
        const button_02 = document.createElement("button");
        // u271C
        button_02.innerHTML = "🇪";
        const button_03 = document.createElement("button");
        // u2699
        button_03.innerHTML = "🇨";
        const button_04 = document.createElement("button");
        button_04.textContent = "🇵";
        const button_05 = document.createElement("button");
        button_05.textContent = "🇮";
        // Replace JSON button: Pop-uP
        const button_06 = document.createElement("button");
        button_06.textContent = "✐";
        button_06.setAttribute(
          "style",
          "background-color:#313f8b;border:none;color:white;padding: 0px 0px 0px 20px;;"
        );
        button_06.setAttribute("type", "button");
        button_06.setAttribute("id", "replaceBtn");
        const div_02 = document.createElement("div");
        const div_03 = document.createElement("div");
        div_02.setAttribute("class", "dropdown");
        div_03.setAttribute(
          "style",
          "display:none; position: absolute;background-color: #f1f1f1;min-width: 160px;color:black"
        );
        div_03.setAttribute("id", "replaceDiv");

        div_03.textContent = replaceFormatJSON;
        // Add default links button
        const button_07 = document.createElement("button");
        button_07.textContent = "⇶";
        button_07.setAttribute(
          "style",
          "background-color:#313f8b;border:none;color:white;padding: 0px 0px 0px 20px;;"
        );

        const a_01 = document.createElement("a");
        a_01.href = meta;
        a_01.setAttribute("target", "_blank");

        const a_02 = document.createElement("a");
        a_02.href = enrichment;
        a_02.setAttribute("target", "_blank");
        const a_03 = document.createElement("a");
        a_03.href = config;
        a_03.setAttribute("target", "_blank");
        const a_04 = document.createElement("a");
        a_04.href = pushdoc;
        a_04.setAttribute("target", "_blank");
        const a_05 = document.createElement("a");
        a_05.href = induction;
        a_05.setAttribute("target", "_blank");
        const ele = document.querySelector(
          // Top search bar
          "body > app-root > app-admin-layout > div > mat-toolbar > span.search-bar"
        );
        ele.after(div);
        div.append(a_01);
        a_01.appendChild(button_01);

        div.append(a_02);
        a_02.appendChild(button_02);
        div.append(a_03);
        a_03.appendChild(button_03);
        div.append(a_04);
        a_04.appendChild(button_04);
        div.append(a_05);
        a_05.appendChild(button_05);

        div.append(div_02);
        div_02.append(button_06);
        div_02.append(div_03);
        div.append(button_07);

        const eleButton = document.getElementById("replaceBtn");
        eleButton.addEventListener("click", () => {
          console.log("Howdy!");
          const text = document.getElementById("replaceDiv");
          if (text.style.display === "none") {
            text.style.display = "block";
          } else {
            text.style.display = "none";
          }
        });
        document.arrive("#mat-tab-label-2-0 > div", function () {
          const addBut = document.querySelector(
            "body > app-root > app-admin-layout > div > mat-toolbar > div > button:nth-child(7)"
          );
          const input1 = $("body").xpath(
            "/html/body/app-root/app-admin-layout/div/mat-drawer-container/mat-drawer-content/app-source-container/app-page-load/div/mat-drawer-container/mat-drawer-content/mat-drawer-container/mat-drawer-content/main/app-source-config/app-page-load/div/div/mat-card/mat-card-content/div/mat-sidenav-container/mat-sidenav-content/div/mat-tab-group/div/mat-tab-body[1]/div/app-source-config-form-editor/div/mat-tab-group/div/mat-tab-body[2]/div/div/mat-tab-group/div/mat-tab-body[1]/div/app-section-extractor-editor/form/mat-card[3]/mat-card-content/div/div/mat-expansion-panel[1]/div/div/div/div[1]/mat-form-field/div/div[1]/div/input"
          );
          const input2 = $("body").xpath(
            "/html/body/app-root/app-admin-layout/div/mat-drawer-container/mat-drawer-content/app-source-container/app-page-load/div/mat-drawer-container/mat-drawer-content/mat-drawer-container/mat-drawer-content/main/app-source-config/app-page-load/div/div/mat-card/mat-card-content/div/mat-sidenav-container/mat-sidenav-content/div/mat-tab-group/div/mat-tab-body[1]/div/app-source-config-form-editor/div/mat-tab-group/div/mat-tab-body[2]/div/div/mat-tab-group/div/mat-tab-body[1]/div/app-section-extractor-editor/form/mat-card[3]/mat-card-content/div/div/mat-expansion-panel[1]/div/div/div/div[2]/mat-form-field/div/div[1]/div/input"
          );
          const input3 = $("body").xpath(
            "/html/body/app-root/app-admin-layout/div/mat-drawer-container/mat-drawer-content/app-source-container/app-page-load/div/mat-drawer-container/mat-drawer-content/mat-drawer-container/mat-drawer-content/main/app-source-config/app-page-load/div/div/mat-card/mat-card-content/div/mat-sidenav-container/mat-sidenav-content/div/mat-tab-group/div/mat-tab-body[1]/div/app-source-config-form-editor/div/mat-tab-group/div/mat-tab-body[2]/div/div/mat-tab-group/div/mat-tab-body[1]/div/app-section-extractor-editor/form/mat-card[3]/mat-card-content/div/div/mat-expansion-panel[1]/div/div/div/div[3]/mat-form-field/div/div[1]/div/input"
          );
          const input4 = $("body").xpath(
            "/html/body/app-root/app-admin-layout/div/mat-drawer-container/mat-drawer-content/app-source-container/app-page-load/div/mat-drawer-container/mat-drawer-content/mat-drawer-container/mat-drawer-content/main/app-source-config/app-page-load/div/div/mat-card/mat-card-content/div/mat-sidenav-container/mat-sidenav-content/div/mat-tab-group/div/mat-tab-body[1]/div/app-source-config-form-editor/div/mat-tab-group/div/mat-tab-body[2]/div/div/mat-tab-group/div/mat-tab-body[1]/div/app-section-extractor-editor/form/mat-card[3]/mat-card-content/div/div/mat-expansion-panel[2]/div/div/div/div[1]/mat-form-field/div/div[1]/div/input"
          );
          const input5 = $("body").xpath(
            "/html/body/app-root/app-admin-layout/div/mat-drawer-container/mat-drawer-content/app-source-container/app-page-load/div/mat-drawer-container/mat-drawer-content/mat-drawer-container/mat-drawer-content/main/app-source-config/app-page-load/div/div/mat-card/mat-card-content/div/mat-sidenav-container/mat-sidenav-content/div/mat-tab-group/div/mat-tab-body[1]/div/app-source-config-form-editor/div/mat-tab-group/div/mat-tab-body[2]/div/div/mat-tab-group/div/mat-tab-body[1]/div/app-section-extractor-editor/form/mat-card[3]/mat-card-content/div/div/mat-expansion-panel[2]/div/div/div/div[2]/mat-form-field/div/div[1]/div/input"
          );
          const input6 = $("body").xpath(
            "/html/body/app-root/app-admin-layout/div/mat-drawer-container/mat-drawer-content/app-source-container/app-page-load/div/mat-drawer-container/mat-drawer-content/mat-drawer-container/mat-drawer-content/main/app-source-config/app-page-load/div/div/mat-card/mat-card-content/div/mat-sidenav-container/mat-sidenav-content/div/mat-tab-group/div/mat-tab-body[1]/div/app-source-config-form-editor/div/mat-tab-group/div/mat-tab-body[2]/div/div/mat-tab-group/div/mat-tab-body[1]/div/app-section-extractor-editor/form/mat-card[3]/mat-card-content/div/div/mat-expansion-panel[2]/div/div/div/div[3]/mat-form-field/div/div[1]/div/input"
          );
          addBut.addEventListener("click", () => {
            // input1.animate(
            //   {
            //     top: input1.position().top + 194,
            //     left: input1.position().left + 200,
            //   },
            //   1200,
            //   "swing",
            //   function () {
            //     input1.focus();
            //     type("TEST_01", 0);
            //   }
            // );
            // function type(string, index) {
            //   var val = string.substr(0, index + 1);
            //   input1.attr("value", val);
            //   if (index < string.length) {
            //     setTimeout(function () {
            //       type(string, index + 1);
            //     }, Math.random() * 50);
            //   } else {
            //     console.log("Done typing!");
            //   }
            // }

            input1.val("(//a)[@href]");
            input2.val("wrty:absolutify-url(./@href)");
            input3.val("wrty:normalize-space(string(.))");
            input4.val("(//a)[@href]");
            input5.val("wrty:absolutify-url(./@href)");
            input6.val("wrty:normalize-space(string(.))");
          });
        });
      }
    );
  }
});
