<script>
// ================================
// Basics Mobile Outline Anchor Offset
// ================================
(function () {
  var basicsURL = window.location.href;
  var checkBasicsURL = basicsURL.includes("#");
  var bread2 = document.getElementById("Bread2");
  var bread2no = bread2 ? bread2.offsetHeight : 0;

  if (checkBasicsURL && bread2no) {
    var basicId = basicsURL.split('#').pop();
    var basicElement = document.getElementById(basicId);
    if (basicElement) {
      basicElement.style.position = "relative";
      basicElement.style.top = "-" + bread2no + "px";
    }
  }
})();


// ================================
// Remove duplicate mobile/desktop navs at breakpoints
// ================================
(function () {
  var $div_remove_mobile = typeof $ !== 'undefined' ? $('#div_remove_mobile') : null;
  var $div_remove_desktop = typeof $ !== 'undefined' ? $('#div_remove_desktop') : null;

  function breakpointDisplay() {
    var screenWidth = window.innerWidth;

    if (typeof $ !== 'undefined') {
      if (screenWidth >= 750) {
        $('#div_remove_mobile').detach();
        if ($('#div_nav_menu_desktop').length && $div_remove_desktop && $div_remove_desktop.length) {
          $('#div_nav_menu_desktop').append($div_remove_desktop);
        }
      }

      if (screenWidth < 750) {
        $('#div_remove_desktop').detach();
        if ($('#Menu2').length && $div_remove_mobile && $div_remove_mobile.length) {
          $('#Menu2').append($div_remove_mobile);
        }
      }
    }
  }

  breakpointDisplay();
  window.addEventListener('resize', breakpointDisplay);
})();


// ================================
// Indoor / Outdoor menu swap (safer path-based check)
// ================================
(function () {
  var path = window.location.pathname || '';
  var div_indoor = document.getElementById("div_indoor");
  var div_outdoor = document.getElementById("div_outdoor");

  function inOutSwap() {
    if (!div_indoor || !div_outdoor) return;

    if (path.indexOf('/indoor-') === 0 || path === '/indoor' || path.indexOf('/indoor/') === 0) {
      div_indoor.style.display = "block";
      div_outdoor.style.display = "none";
    } else if (path.indexOf('/outdoor-') === 0 || path === '/outdoor' || path.indexOf('/outdoor/') === 0) {
      div_outdoor.style.display = "block";
      div_indoor.style.display = "none";
    } else if (window.location.origin + '/' === "https://www.knowyourh2o.com/") {
      // Home default
      div_outdoor.style.display = "none";
      div_indoor.style.display = "block";
    } else {
      // Fallback: show indoor
      div_indoor.style.display = "block";
      div_outdoor.style.display = "none";
    }
  }

  inOutSwap();
})();


// ================================
// MODULE 1: Establish array / get storage
// ================================
var buttonArray;
(function () {
  if (sessionStorage.getItem("state") === "changed") {
    var retreiveData = sessionStorage.getItem("buttonArray");
    try {
      var arrayParse = JSON.parse(retreiveData || "[]");
      buttonArray = Array.isArray(arrayParse) ? Array.from(arrayParse) : null;
    } catch (e) {
      buttonArray = null;
    }
  }

  if (!Array.isArray(buttonArray)) {
    buttonArray = [
      {level:1, name:"indoor", value:"open", display:"block", state:"–"},
        {level:2, name:"get-informed", value:"closed", display:"none", state:"+"},
          {level:3, name:"contaminants", value:"closed", display:"none", state:"+"},
            {level:4, name:"primary-contaminants", value:"closed", display:"none", state:"+"},
              {level:5, name:"pMicrobiological", value:"closed", display:"none", state:"+"},
              {level:5, name:"pInorganics", value:"closed", display:"none", state:"+"},
              {level:5, name:"vocs", value:"closed", display:"none", state:"+"},
              {level:5, name:"socs", value:"closed", display:"none", state:"+"},
              {level:5, name:"disinfection-byproducts", value:"closed", display:"none", state:"+"},
              {level:5, name:"radioactive-isotopes", value:"closed", display:"none", state:"+"},
            {level:4, name:"secondary-contaminants", value:"closed", display:"none", state:"+"},
              {level:5, name:"sInorganics", value:"closed", display:"none", state:"+"},
              {level:5, name:"sConditions", value:"closed", display:"none", state:"+"},
            {level:4, name:"no-standards-contaminants", value:"closed", display:"none", state:"+"},
              {level:5, name:"nMicrobiological", value:"closed", display:"none", state:"+"},
              {level:5, name:"nInorganics", value:"closed", display:"none", state:"+"},
              {level:5, name:"organics", value:"closed", display:"none", state:"+"},
              {level:5, name:"gases", value:"closed", display:"none", state:"+"},
              {level:5, name:"nConditions", value:"closed", display:"none", state:"+"},
          {level:3, name:"standards", value:"closed", display:"none", state:"+"},
          {level:3, name:"water-science-basics", value:"closed", display:"none", state:"+"},
          {level:3, name:"water-in-the-universe", value:"closed", display:"none", state:"+"},
          {level:3, name:"drinking-water-topics", value:"closed", display:"none", state:"+"},
          {level:3, name:"case-studies", value:"closed", display:"none", state:"+"},
            {level:4, name:"common-drinking-water-problems", value:"closed", display:"none", state:"+"},
            {level:4, name:"commercial", value:"closed", display:"none", state:"+"},
        {level:2, name:"get-tested", value:"closed", display:"none", state:"+"},
        {level:2, name:"get-treatment", value:"closed", display:"none", state:"+"},
          {level:3, name:"treatment-types", value:"closed", display:"none", state:"+"},
          {level:3, name:"treatment-topics", value:"closed", display:"none", state:"+"},
        {level:2, name:"get-tools", value:"closed", display:"none", state:"+"},
        {level:2, name:"get-training", value:"closed", display:"none", state:"+"},
        {level:2, name:"get-involved", value:"closed", display:"none", state:"+"},
      {level:1, name:"outdoor", value:"open", display:"block", state:"–"},
        {level:2, name:"get-informed-out", value:"closed", display:"none", state:"+"},
          {level:3, name:"watershed", value:"closed", display:"none", state:"+"},
          {level:3, name:"case-studies-out", value:"closed", display:"none", state:"+"},
        {level:2, name:"get-tools-out", value:"closed", display:"none", state:"+"},
        {level:2, name:"get-training-out", value:"closed", display:"none", state:"+"},
        {level:2, name:"get-involved-out", value:"closed", display:"none", state:"+"},
    ];
    sessionStorage.setItem("buttonArray", JSON.stringify(buttonArray));
  }
})();


// ================================
// MODULE 2: Distribute state to DOM (with guards)
// ================================
(function () {
  for (var i = 0; i < buttonArray.length; i++) {
    var name = buttonArray[i].name;

    var buttonElement = document.getElementById(name);
    var buttonBarElement = document.getElementById("bar-" + name);
    var divDropdownElement = document.getElementById("dropdown-" + name);

    if (divDropdownElement) {
      divDropdownElement.style.display = buttonArray[i].display;
    }

    if (buttonBarElement) {
      buttonBarElement.setAttribute('data-buttonValue', buttonArray[i].value);
      // prevent duplicate listeners on re-inits by removing and re-adding
      buttonBarElement.removeEventListener("click", openClose);
      buttonBarElement.addEventListener("click", openClose);
    }

    if (buttonElement) {
      buttonElement.innerHTML = buttonArray[i].state;
    }
  }
})();


// ================================
// MODULE 3: Open / Close handler
// ================================
function openClose() {
  var btn = this;
  var buttonValue = btn.getAttribute('data-buttonValue') || 'closed';

  var thisSubString = (btn.id || '').substring(4); // remove "bar-"
  if (!thisSubString) return;

  var index = buttonArray.findIndex(function (x) { return x.name === thisSubString; });
  if (index < 0) return;

  var dropdown = document.getElementById("dropdown-" + thisSubString);
  var buttonIconElement = document.getElementById(thisSubString);

  if (buttonValue === "closed") {
    btn.setAttribute('data-buttonValue', 'open');
    buttonArray[index].value = "open";
    buttonArray[index].display = "block";
    if (dropdown) dropdown.style.display = "block";
    if (buttonIconElement) buttonIconElement.innerHTML = "–";
    buttonArray[index].state = "–";
  } else {
    btn.setAttribute('data-buttonValue', 'closed');
    buttonArray[index].value = "closed";
    buttonArray[index].display = "none";
    if (dropdown) dropdown.style.display = "none";
    if (buttonIconElement) buttonIconElement.innerHTML = "+";
    buttonArray[index].state = "+";
  }

  sessionStorage.setItem("state", "changed");
  sessionStorage.setItem("buttonArray", JSON.stringify(buttonArray));
}


// ================================
// MODULE 5: Expand Menu (robust)
// - Normalizes URLs
// - Finds current link via href
// - Opens all ancestor dropdown-* containers
// - Syncs buttonArray/sessionStorage
// ================================
(function () {
  // Your base URL prefix used in linkArray (kept for compatibility)
  var urlx = "https://www.knowyourh2o.com";

  // Your existing linkArray (unchanged)
  var linkArray = [
    {level:3, name:"get-informed-intro", url: urlx + "/indoor-2/get-informed"},
      {level:3, name:"public-private", url: urlx + "/indoor-3/private-well-water-public-city-water"},
      {level:4, name:"contaminants-intro", url: urlx + "/indoor-3/contaminants"},

      // Contaminants / Primary
      {level:5, name:"primary-contaminants-intro", url: urlx + "/indoor-4/primary-contaminants"},

        // Contaminants / Primary / pMicrobiological
        {level:6, name:"pMicrobiological-intro", url: urlx + "/indoor-5/microbiological"},
        {level:6, name:"bacteria", url: urlx + "/indoor-6/bacteria"},
        {level:6, name:"total-coliform-bacteria", url: urlx + "/indoor-6/total-coliform-bacteria"},
        {level:6, name:"e-coli", url: urlx + "/indoor-6/e-coli"},
        {level:6, name:"giardia-cryptosporidium", url: urlx + "/indoor-6/giardia-cryptosporidium"},
        {level:6, name:"viruses", url: urlx + "/indoor-6/viruses"},
        {level:6, name:"waterborne-pathogens", url: urlx + "/indoor-6/waterborne-pathogens"},

        // Contaminants / Primary / pInorganic
        {level:6, name:"pInorganics-intro", url: urlx + "/indoor-5/inorganics"},
        {level:6, name:"antimony", url: urlx + "/indoor-6/antimony"},
        {level:6, name:"arsenic", url: urlx + "/indoor-6/arsenic"},
        {level:6, name:"barium", url: urlx + "/indoor-6/barium"},
        {level:6, name:"cadmium", url: urlx + "/indoor-6/cadmium"},
        {level:6, name:"chromium", url: urlx + "/indoor-6/chromium"},
        {level:6, name:"copper", url: urlx + "/indoor-6/copper"},
        {level:6, name:"cyanide", url: urlx + "/indoor-6/cyanide"},
        {level:6, name:"fluoride", url: urlx + "/indoor-6/fluoride"},
        {level:6, name:"lead", url: urlx + "/indoor-6/lead"},
        {level:6, name:"mercury", url: urlx + "/indoor-6/mercury"},
        {level:6, name:"nitrates-nitrites", url: urlx + "/indoor-6/nitrates-nitrites"},
        {level:6, name:"selenium", url: urlx + "/indoor-6/selenium"},
        {level:6, name:"thallium", url: urlx + "/indoor-6/thallium"},
        {level:6, name:"turbidity", url: urlx + "/indoor-6/turbidity"},

        // Contaminants / Primary / VOCs
        {level:6, name:"vocs-intro", url: urlx + "/indoor-5/vocs"},
        {level:6, name:"benzene", url: urlx + "/indoor-6/benzene"},
        {level:6, name:"carbon-tetrachloride", url: urlx + "/indoor-6/carbon-tetrachloride"},
        {level:6, name:"chloroform-and-trichloromethane", url: urlx + "/indoor-6/chloroform-and-trichloromethane"},
        {level:6, name:"ethylbenzene", url: urlx + "/indoor-6/ethylbenzene"},
        {level:6, name:"methylene-chloride-dichloromethane-dcm", url: urlx + "/indoor-6/methylene-chloride-dichloromethane-dcm"},
        {level:6, name:"mtbe-methyl-tert-butyl-ether", url: urlx + "/indoor-6/mtbe-methyl-tert-butyl-ether"},
        {level:6, name:"tetrachloroethylene", url: urlx + "/indoor-6/tetrachloroethylene"},
        {level:6, name:"trichloroethylene", url: urlx + "/indoor-6/trichloroethylene"},
        {level:6, name:"toluene", url: urlx + "/indoor-6/toluene"},
        {level:6, name:"xylenes", url: urlx + "/indoor-6/xylenes"},

        // Contaminants / Primary / SOCs
        {level:6, name:"socs-intro", url: urlx + "/indoor-5/socs"},
        {level:6, name:"alachlor", url: urlx + "/indoor-6/alachlor"},
        {level:6, name:"atrazine", url: urlx + "/indoor-6/atrazine"},
        {level:6, name:"glyphosate", url: urlx + "/indoor-6/glyphosate"},
        {level:6, name:"2-4-d", url: urlx + "/indoor-6/2-4-d"},
        {level:6, name:"gamma-hexachlorocyclohexane-lindane", url: urlx + "/indoor-6/gamma-hexachlorocyclohexane-lindane"},
        {level:6, name:"bis-2-ethylhexyl-phthalate", url: urlx + "/indoor-6/bis-2-ethylhexyl-phthalate"},
        {level:6, name:"herbicides-pesticides", url: urlx + "/indoor-6/herbicides-pesticides"},

        // Contaminants / Primary / DBPs
        {level:6, name:"disinfection-byproducts-intro", url: urlx + "/indoor-5/disinfection-byproducts"},
        {level:6, name:"trihalomethanes", url: urlx + "/indoor-6/trihalomethanes"},
        {level:6, name:"haloacetic-acids", url: urlx + "/indoor-6/haloacetic-acids"},
        {level:6, name:"chlorite", url: urlx + "/indoor-6/chlorite"},
        {level:6, name:"bromate", url: urlx + "/indoor-6/bromate"},

        // Contaminants / Primary / Radioactive
        {level:6, name:"radioactive-isotopes-intro", url: urlx + "/indoor-5/radioactive-isotopes"},
        {level:6, name:"gross-alpha", url: urlx + "/indoor-6/gross-alpha"},
        {level:6, name:"beta-particles", url: urlx + "/indoor-6/beta-particles"},
        {level:6, name:"radium-226-and-radium-228", url: urlx + "/indoor-6/radium-226-and-radium-228"},
        {level:6, name:"uranium", url: urlx + "/indoor-6/uranium"},
        {level:6, name:"radon-220-222", url: urlx + "/indoor-6/radon-220-222"},

      // Contaminants / Secondary
      {level:5, name:"secondary-contaminants-intro", url: urlx + "/indoor-4/secondary-contaminants"},

        // Secondary / Inorganics
        {level:6, name:"sInorganics-intro", url: urlx + "/indoor-5/inorganics-s"},
        {level:6, name:"aluminum", url: urlx + "/indoor-6/aluminum"},
        {level:6, name:"chloride", url: urlx + "/indoor-6/chloride"},
        {level:6, name:"sCopper", url: urlx + "/indoor-6/copper-s"},
        {level:6, name:"sFluoride", url: urlx + "/indoor-6/fluoride-s"},
        {level:6, name:"iron", url: urlx + "/indoor-6/iron"},
        {level:6, name:"manganese", url: urlx + "/indoor-6/manganese"},
        {level:6, name:"silver", url: urlx + "/indoor-6/silver"},
        {level:6, name:"sulfur-hydrogen-sulfide-sulfate-and-sulfate-reducing-bacteria", url: urlx + "/indoor-6/sulfur-hydrogen-sulfide-sulfate-and-sulfate-reducing-bacteria"},
        {level:6, name:"total-dissolved-solids", url: urlx + "/indoor-6/total-dissolved-solids"},
        {level:6, name:"zinc", url: urlx + "/indoor-6/zinc"},

        // Secondary / Conditions
        {level:6, name:"sConditions-intro", url: urlx + "/indoor-5/conditions-s"},
        {level:6, name:"corrosivity", url: urlx + "/indoor-6/corrosivity"},
        {level:6, name:"foaming-agents", url: urlx + "/indoor-6/foaming-agents"},
        {level:6, name:"ph", url: urlx + "/indoor-6/ph"},
        {level:6, name:"color-taste-odor", url: urlx + "/indoor-6/color-taste-odor"},

      // No Standards
      {level:5, name:"no-standards-contaminants-intro", url: urlx + "/indoor-4/no-standards-contaminants"},

        // No Standards / Microbiological
        {level:6, name:"nMicrobiological-intro", url: urlx + "/indoor-5/microbiological-n"},
        {level:6, name:"nuisance-bacteria", url: urlx + "/indoor-6/nuisance-bacteria"},
        {level:6, name:"iron-bacteria", url: urlx + "/indoor-6/iron-bacteria"},
        {level:6, name:"pink-bacteria", url: urlx + "/indoor-6/pink-bacteria"},
        {level:6, name:"sulfate-reducing-bacteria", url: urlx + "/indoor-6/sulfate-reducing-bacteria"},
        {level:6, name:"slime-bacteria", url: urlx + "/indoor-6/slime-bacteria"},

        // No Standards / Inorganics
        {level:6, name:"nInorganics-intro", url: urlx + "/indoor-5/inorganics-n"},
        {level:6, name:"alkalinity", url: urlx + "/indoor-6/alkalinity"},
        {level:6, name:"boron", url: urlx + "/indoor-6/boron"},
        {level:6, name:"bromide", url: urlx + "/indoor-6/bromide"},
        {level:6, name:"hardness", url: urlx + "/indoor-6/hardness"},
        {level:6, name:"lithium", url: urlx + "/indoor-6/lithium"},
        {level:6, name:"sodium", url: urlx + "/indoor-6/sodium"},
        {level:6, name:"strontium", url: urlx + "/indoor-6/strontium"},

        // No Standards / Organics
        {level:6, name:"organics-intro", url: urlx + "/indoor-5/organics"},
        {level:6, name:"acetone", url: urlx + "/indoor-6/acetone"},
        {level:6, name:"glycols", url: urlx + "/indoor-6/glycols"},
        {level:6, name:"methyl-ethyl-ketone-2-butanone", url: urlx + "/indoor-6/methyl-ethyl-ketone-2-butanone"},
        {level:6, name:"naphthalene", url: urlx + "/indoor-6/naphthalene"},
        {level:6, name:"perfluorinated-chemicals-pfoa-pfos-pfas-pfcs-forever-chemicals", url: urlx + "/indoor-6/perfluorinated-chemicals-pfoa-pfos-pfas-pfcs-forever-chemicals"},

        // No Standards / Gases
        {level:6, name:"gases-intro", url: urlx + "/indoor-5/gases"},
        {level:6, name:"methane", url: urlx + "/indoor-6/methane"},

        // No Standards / Conditions
        {level:6, name:"nConditions-intro", url: urlx + "/indoor-5/conditions-n"},
        {level:6, name:"nCorrosivity", url: urlx + "/indoor-6/corrosivity-n"},
        {level:6, name:"dissolved-gases", url: urlx + "/indoor-6/dissolved-gases"},
        {level:6, name:"elevated-chlorine", url: urlx + "/indoor-6/elevated-chlorine"},
        {level:6, name:"broken-water-line", url: urlx + "/indoor-6/broken-water-line"},

    // Standards
    {level:4, name:"standards-intro", url: urlx + "/indoor-3/standards"},
      {level:4, name:"primary-standards", url: urlx + "/indoor-4/primary-standards"},
      {level:4, name:"secondary-standards", url: urlx + "/indoor-4/secondary-standards"},
      {level:4, name:"no-standards", url: urlx + "/indoor-4/no-standards"},

    // Water Science Basics
    {level:4, name:"water-science-basics-intro", url: urlx + "/indoor-3/water-science-basics"},
      {level:4, name:"physics", url: urlx + "/indoor-4/physics"},
      {level:4, name:"inorganic-chemistry", url: urlx + "/indoor-4/inorganic-chemistry"},
      {level:4, name:"organic-chemistry", url: urlx + "/indoor-4/organic-chemistry"},
      {level:4, name:"biology", url: urlx + "/indoor-4/biology"},

    // Water In the Universe
    {level:4, name:"water-in-the-universe-intro", url: urlx + "/indoor-3/water-in-the-universe"},
      {level:4, name:"part-1", url: urlx + "/indoor-4/water-in-the-universe-part-1"},
      {level:4, name:"part-2", url: urlx + "/indoor-4/water-in-the-universe-part-2"},
      {level:4, name:"part-3", url: urlx + "/indoor-4/water-in-the-universe-part-3"},

    // Glossary
    {level:3, name:"glossary", url: urlx + "/indoor-3/glossary"},

    // Drinking Water Topics
    {level:4, name:"drinking-water-topics-intro", url: urlx + "/indoor-3/drinking-water-topics"},
      {level:4, name:"groundwater-and-the-water-cycle-pennsylvania-example", url: urlx + "/indoor-4/groundwater-and-the-water-cycle-pennsylvania-example"},
      {level:4, name:"groundwater-under-the-influence", url: urlx + "/indoor-4/groundwater-under-the-influence"},
      {level:4, name:"the-ph-of-water", url: urlx + "/indoor-4/the-ph-of-water"},
      {level:4, name:"drinking-water-testing-conductivity-and-total-dissolved-solids", url: urlx + "/indoor-4/drinking-water-testing-conductivity-and-total-dissolved-solids"},
      {level:4, name:"how-to-clean-and-remove-iron-and-manganese-staining-from-your-appliance-and-porcelain", url: urlx + "/indoor-4/how-to-clean-and-remove-iron-and-manganese-staining-from-your-appliance-and-porcelain"},
      {level:4, name:"methyl-tertiary-butyl-ether-mtbe-well-groundwater-contamination-issues", url: urlx + "/indoor-4/methyl-tertiary-butyl-ether-mtbe-well-groundwater-contamination-issues"},
      {level:4, name:"autoimmune-diseases", url: urlx + "/indoor-4/autoimmune-diseases"},
      {level:4, name:"cryptosporidium-parvum-drinking-water-protozoan", url: urlx + "/indoor-4/cryptosporidium-parvum-drinking-water-protozoan"},
      {level:4, name:"giardia-and-waterborne-disease", url: urlx + "/indoor-4/giardia-and-waterborne-disease"},
      {level:4, name:"giardia-cryptosporidium-and-waterborne-disease-2", url: urlx + "/indoor-4/giardia-cryptosporidium-and-waterborne-disease-2"},
      {level:4, name:"the-care-and-feeding-of-your-well", url: urlx + "/indoor-4/the-care-and-feeding-of-your-well"},
      {level:4, name:"biofouling-of-a-well", url: urlx + "/indoor-4/biofouling-of-a-well"},
      {level:4, name:"hot-water-heater-hydrogen-sulfide-odor", url: urlx + "/indoor-4/hot-water-heater-hydrogen-sulfide-odor"},

    // Case Studies
    {level:4, name:"case-studies-intro", url: urlx + "/indoor-3/case-studies"},
      {level:5, name:"common-drinking-water-problems-intro", url: urlx + "/indoor-4/common-drinking-water-problems"},
      {level:5, name:"case-study-1-natural-gas-region-water-discoloration", url: urlx + "/indoor-5/case-study-1-natural-gas-region-water-discoloration"},
      {level:5, name:"case-study-2-natural-gas-region-water-contamination-of-a-private-well", url: urlx + "/indoor-5/case-study-2-natural-gas-region-water-contamination-of-a-private-well"},
      {level:5, name:"case-study-3-plastic-well-casing-and-standard-well-cap", url: urlx + "/indoor-5/case-study-3-plastic-well-casing-and-standard-well-cap"},
      {level:5, name:"case-study-4-natural-gas-region-water-is-fizzy", url: urlx + "/indoor-5/case-study-4-natural-gas-region-water-is-fizzy"},
      {level:5, name:"case-study-5-water-is-green-alkaline-metallic-taste-odor-problem-with-the-hot-water", url: urlx + "/indoor-5/case-study-5-water-is-green-alkaline-metallic-taste-odor-problem-with-the-hot-water"},
      {level:5, name:"case-study-6-repeated-hot-water-heater-failures", url: urlx + "/indoor-5/case-study-6-repeated-hot-water-heater-failures"},
      {level:5, name:"case-study-7-natural-gas-region-green-particles-in-my-water", url: urlx + "/indoor-5/case-study-7-natural-gas-region-green-particles-in-my-water"},
      {level:5, name:"case-study-8-black-particles-in-the-water", url: urlx + "/indoor-5/case-study-8-black-particles-in-the-water"},
      {level:5, name:"case-study-9-dirty-discolored-water-bacteria-iron-staining-and-odors", url: urlx + "/indoor-5/case-study-9-dirty-discolored-water-bacteria-iron-staining-and-odors"},
      {level:5, name:"case-study-10-natural-gas-region-frac-sand-in-my-well-gray-white-sticky-material", url: urlx + "/indoor-5/case-study-10-natural-gas-region-frac-sand-in-my-well-gray-white-sticky-material"},
      {level:5, name:"case-study-11-natural-gas-region-black-water-sulfur-smell", url: urlx + "/indoor-5/case-study-11-natural-gas-region-black-water-sulfur-smell"},

    // Commercial
    {level:5, name:"commercial-intro", url: urlx + "/indoor-4/commercial"},
    {level:5, name:"smith-paint-products", url: urlx + "/indoor-5/smith-paint-products"},
    {level:5, name:"arsenic-research-project", url: urlx + "/indoor-5/arsenic-research-project"},

    // Library
    {level:3, name:"library", url: urlx + "/indoor/library"},

    // Get Tested
    {level:3, name:"get-tested-intro", url: urlx + "/indoor-2/get-tested"},
    {level:3, name:"level-1-testing", url: urlx + "/indoor-3/level-1-testing"},
    {level:3, name:"level-2-testing", url: urlx + "/indoor-3/level-2-testing"},
    {level:3, name:"level-3-testing", url: urlx + "/indoor-3/level-3-testing"},
    {level:3, name:"level-4-testing", url: urlx + "/indoor-3/level-4-testing"},
    {level:3, name:"level-4-baseline-testing", url: urlx + "/indoor-3/level-4-baseline-testing"},

    // Get Treatment
    {level:3, name:"get-treatment-intro", url: urlx + "/indoor-2/get-treatment"},
      {level:3, name:"treatment-types-intro", url: urlx + "/indoor-3/treatment-types"},
      {level:3, name:"aeration", url: urlx + "/indoor-4/aeration"},
      {level:3, name:"arsenic-treatment-systems", url: urlx + "/indoor-4/arsenic-treatment-systems"},
      {level:3, name:"carbon-filtration", url: urlx + "/indoor-4/carbon-filtration"},
      {level:3, name:"chemical-disinfection-chlorination-ozone", url: urlx + "/indoor-4/chemical-disinfection-chlorination-ozone"},
      {level:3, name:"commercial-water-treatment-systems", url: urlx + "/indoor-4/commercial-water-treatment-systems"},
      {level:3, name:"countertop-pou-point-of-use-units", url: urlx + "/indoor-4/countertop-pou-point-of-use-units"},
      {level:3, name:"distillation-systems", url: urlx + "/indoor-4/distillation-systems"},
      {level:3, name:"ion-exchange", url: urlx + "/indoor-4/ion-exchange"},
      {level:3, name:"iron-and-manganese-control-and-nuisance-reduction", url: urlx + "/indoor-4/iron-and-manganese-control-and-nuisance-reduction"},
      {level:3, name:"neutralizing-systems", url: urlx + "/indoor-4/neutralizing-systems"},
      {level:3, name:"nitrate-and-nitrate-removal", url: urlx + "/indoor-4/nitrate-and-nitrate-removal"},
      {level:3, name:"oxidation", url: urlx + "/indoor-4/oxidation"},
      {level:3, name:"particle-filtration", url: urlx + "/indoor-4/particle-filtration"},
      {level:3, name:"reverse-osmosis", url: urlx + "/indoor-4/reverse-osmosis"},
      {level:3, name:"shower-filters", url: urlx + "/indoor-4/shower-filters"},
      {level:3, name:"sulfur-treatment-and-control", url: urlx + "/indoor-4/sulfur-treatment-and-control"},
      {level:3, name:"ultraviolet-disinfection", url: urlx + "/indoor-4/ultraviolet-disinfection"},
      {level:3, name:"under-the-counter-units", url: urlx + "/indoor-4/under-the-counter-units"},
      {level:3, name:"water-cooler-systems", url: urlx + "/indoor-4/water-cooler-systems"},
      {level:3, name:"water-softeners", url: urlx + "/indoor-4/water-softeners"},

    // Get Treatment / Topics
    {level:3, name:"treatment-topics-intro", url: urlx + "/indoor-3/treatment-topics"},
      {level:3, name:"shock-well-disinfection", url: urlx + "/indoor-4/shock-well-disinfection"},
      {level:3, name:"ozonation-in-water-treatment", url: urlx + "/indoor-4/ozonation-in-water-treatment"},
      {level:3, name:"chlorine-disinfection-contact-time-basic", url: urlx + "/indoor-4/chlorine-disinfection-contact-time-basic"},
      {level:3, name:"chlorine-disinfection-contact-time-and-inactivation-calculations-advanced", url: urlx + "/indoor-4/chlorine-disinfection-contact-time-and-inactivation-calculations-advanced"},
      {level:3, name:"water-filtration-plant-performance-evaluations", url: urlx + "/indoor-4/water-filtration-plant-performance-evaluations"},
      {level:3, name:"uv-disinfection", url: urlx + "/indoor-4/uv-disinfection"},

    // Get Tools
    {level:3, name:"get-tools-intro", url: urlx + "/indoor-2/get-tools"},
      {level:3, name:"self-test-web-app", url: urlx + "/indoor-3/self-test-web-app"},
      {level:3, name:"water-quality-index-calculator-for-drinking-water", url: urlx + "/indoor-3/water-quality-index-calculator-for-drinking-water"},
      {level:3, name:"global-drinking-water-quality-database-map", url: urlx + "/indoor-3/global-drinking-water-quality-database-map"},
      {level:3, name:"neighborhood-environmental-reports", url: urlx + "/indoor-3/neighborhood-environmental-reports"},
      {level:3, name:"edr-radius-map-with-geocheck", url: urlx + "/indoor-3/edr-radius-map-with-geocheck"},
      {level:3, name:"drinking-water-guide-for-well-water-and-city-water", url: urlx + "/indoor-3/drinking-water-guide-for-well-water-and-city-water"},
      {level:3, name:"radon-state-county-zones", url: urlx + "/indoor-3/radon-state-county-zones"},
      {level:3, name:"wellbore-calculator", url: urlx + "/indoor-3/wellbore-calculator"},
      {level:3, name:"chlorine-contact-calculators", url: urlx + "/indoor-3/chlorine-contact-calculators"},
      {level:3, name:"epa-widgets", url: urlx + "/indoor-3/epa-widgets"},

    // Get Training
    {level:3, name:"get-training-intro", url: urlx + "/indoor-2/get-training"},
      {level:3, name:"curriculum-for-educators-students", url: urlx + "/indoor-3/curriculum-for-educators-students"},
      {level:3, name:"citizen-monitoring-and-training", url: urlx + "/indoor-3/citizen-monitoring-and-training"},
      {level:3, name:"classroom-and-field-training", url: urlx + "/indoor-3/classroom-and-field-training"},
      {level:3, name:"online-education-resources", url: urlx + "/indoor-3/online-education-resources"},

    // Get Involved
    {level:3, name:"get-involved-intro", url: urlx + "/indoor-2/get-involved"},
      {level:3, name:"share-your-data", url: urlx + "/indoor-3/share-your-data"},
      {level:3, name:"host-a-workshop", url: urlx + "/indoor-3/host-a-workshop"},

    // OUTDOOR (selected subset)
    {level:3, name:"get-informed-out-intro", url: urlx + "/outdoor-2/get-informed"},

      {level:4, name:"watershed-intro", url: urlx + "/outdoor-3/watershed"},
      {level:3, name:"case-studies-out-intro", url: urlx + "/outdoor-3/case-studies"},

      // Powerpoint
      {level:3, name:"powerpoint", url: urlx + "/outdoor-3/powerpoint"},

      // Guide to Soils
      {level:3, name:"guide-to-soils-the-life-giving-layers-beneath-our-feet", url: urlx + "/outdoor-3/guide-to-soils-the-life-giving-layers-beneath-our-feet"},

    {level:3, name:"get-tools-out-intro", url: urlx + "/outdoor-2/get-tools"},
    {level:3, name:"get-training-out-intro", url: urlx + "/outdoor-2/get-training"},
    {level:3, name:"get-involved-out-intro", url: urlx + "/outdoor-2/get-involved"},
  ];

  function normalizePath(u) {
    try {
      var url = new URL(u, window.location.origin);
      return url.pathname.replace(/\/+$/, ''); // strip trailing slash
    } catch (e) {
      return (u || '').replace(window.location.origin, '').replace(/\/+$/, '');
    }
  }

  function expandMenu () {
    var currentPath = normalizePath(window.location.href);

    // 1) Try to find the actual link element by matching hrefs in the sidebar
    // Narrow the scope if you have a dedicated sidebar wrapper (replace .sidebar as needed)
    var sidebarRoot = document.querySelector('.sidebar') || document;
    var allLinks = sidebarRoot.querySelectorAll('a[href]');
    var currentLink = null;

    for (var i = 0; i < allLinks.length; i++) {
      var hrefAttr = allLinks[i].getAttribute('href') || '';
      var hrefPath = normalizePath(hrefAttr);
      if (hrefPath && hrefPath === currentPath) {
        currentLink = allLinks[i];
        break;
      }
    }

    // 2) Fallback: use linkArray to highlight the known "link-*" id if present
    if (!currentLink) {
      for (var j = 0; j < linkArray.length; j++) {
        if (normalizePath(linkArray[j].url) === currentPath) {
          var fallback = document.getElementById("link-" + linkArray[j].name);
          if (fallback) currentLink = fallback;
          break;
        }
      }
    }

    if (!currentLink) {
      // Nothing to expand; bail gracefully
      return;
    }

    // Highlight current
    currentLink.style.textDecoration = 'underline';
    currentLink.style.fontWeight = 'bold';
    currentLink.classList.add('is-current');

    // Walk up and open all ancestor dropdown-* containers
    var dropdown = currentLink.closest('[id^="dropdown-"]');
    while (dropdown) {
      var name = dropdown.id.slice('dropdown-'.length);

      // Show dropdown
      dropdown.style.display = 'block';

      // Update bar
      var bar = document.getElementById('bar-' + name);
      if (bar) bar.setAttribute('data-buttonValue', 'open');

      // Update +/- icon
      var icon = document.getElementById(name);
      if (icon) icon.innerHTML = '–';

      // Sync to buttonArray
      if (Array.isArray(window.buttonArray)) {
        var idx = window.buttonArray.findIndex(function (x) { return x.name === name; });
        if (idx >= 0) {
          window.buttonArray[idx].value = 'open';
          window.buttonArray[idx].display = 'block';
          window.buttonArray[idx].state = '–';
        }
        sessionStorage.setItem('state', 'changed');
        sessionStorage.setItem('buttonArray', JSON.stringify(window.buttonArray));
      }

      // climb
      dropdown = dropdown.parentElement ? dropdown.parentElement.closest('[id^="dropdown-"]') : null;
    }
  }

  expandMenu();
})();
</script>
