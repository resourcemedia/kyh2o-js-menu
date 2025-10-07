


// For the Basics Mobile Outline Menu. This adjusts the top margin so the header doesn't go behind the breadcrumb menu. It moves the absolute positioning of the div used for the hashtag link.
var basicsURL = window.location.href;
var checkBasicsURL = basicsURL.includes("#");
var bread2 = document.getElementById("Bread2");
var bread2no = bread2.offsetHeight;

if (checkBasicsURL) {

var basicId = basicsURL.split('#').pop();
console.log("basicId: " + basicId);

var basicElement = document.getElementById(basicId);
console.log("basicElement: " + basicElement);

basicElement.style.position = "relative";
basicElement.style.top = "-" + bread2no + "px" ;

console.log("bread2no: " + bread2no);

}



// This Removes the corresponding mobile or desk menu so there isn't duplicate code.

var $div_remove_mobile = $('#div_remove_mobile');
var $div_remove_desktop = $('#div_remove_desktop');


function breakpointDisplay() {

  var screenWidth = window.innerWidth;

  if (screenWidth >= 750) {
    $('#div_remove_mobile').detach();
    $('#div_nav_menu_desktop').append($div_remove_desktop);
    console.log("Test Hello");
  }

  if (screenWidth < 750) {
    $('#div_remove_desktop').detach();
    $('#Menu2').append($div_remove_mobile);
  }
}

breakpointDisplay();

//This swaps out Indoor and Outdoor Menus

var inOutUrl = window.location.href;
var inOutUrlSubString = inOutUrl.substring(28, 34);
console.log("inOutUrlSubString " + inOutUrlSubString);

var div_indoor = document.getElementById("div_indoor");
var div_outdoor = document.getElementById("div_outdoor");

console.log("div_indoor " + div_indoor);
console.log("div_outdoor " + div_outdoor);

function inOutSwap() {

if (inOutUrlSubString === "indoor") {
  div_indoor.style.display= "block";
  div_outdoor.style.display = "none";
  console.log("Its Indoor");
}

if (inOutUrlSubString === "outdoo") {
  div_outdoor.style.display = "block";
  div_indoor.style.display = "none";
  console.log("Its Outdoor");
}

if (inOutUrl === "https://www.knowyourh2o.com/") {
  div_outdoor.style.display = "none";
  div_indoor.style.display = "block";
}

}

inOutSwap ();






// MODULE 1 ESTABLISH ARRAY OR GET STORAGE - - - - - - - - - - - - - - - - - - - - -
// This creates the original local storage array

if (sessionStorage.getItem("state") === "changed") {
  // Comes in as an array because it was stringifyed to going out.
 var retreiveData = sessionStorage.getItem("buttonArray");
 var arrayParse = JSON.parse(retreiveData);
 var buttonArray = Array.from(arrayParse);

}
else {
  var buttonArray = [
    {level:1,         name: "indoor",                           value:"open",   display:"block", state: "–"},
      {level:2,       name: "get-informed",                     value:"closed",  display:"none", state: "+"},
        {level:3,     name: "contaminants",                     value:"closed",  display:"none", state: "+"},
          {level:4,   name: "primary-contaminants",             value:"closed",  display:"none", state: "+"},
            {level:5, name: "pMicrobiological",                 value:"closed",  display:"none", state: "+"},
            {level:5, name: "pInorganics",                      value:"closed",  display:"none", state: "+"},
            {level:5, name: "vocs",                             value:"closed",  display:"none", state: "+"},
            {level:5, name: "socs",                             value:"closed",  display:"none", state: "+"},
            {level:5, name: "disinfection-byproducts",          value:"closed",  display:"none", state: "+"},
            {level:5, name: "radioactive-isotopes",             value:"closed",  display:"none", state: "+"},
          {level:4,   name: "secondary-contaminants",           value:"closed",  display:"none", state: "+"},
            {level:5, name: "sInorganics",                      value:"closed",  display:"none", state: "+"},
            {level:5, name: "sConditions",                      value:"closed",  display:"none", state: "+"},
          {level:4,   name: "no-standards-contaminants",        value:"closed",  display:"none", state: "+"},
            {level:5, name: "nMicrobiological",                 value:"closed",  display:"none", state: "+"},
            {level:5, name: "nInorganics",                      value:"closed",  display:"none", state: "+"},
            {level:5, name: "organics",                         value:"closed",  display:"none", state: "+"},
            {level:5, name: "gases",                            value:"closed",  display:"none", state: "+"},
            {level:5, name: "nConditions",                      value:"closed",  display:"none", state: "+"},
        {level:3,     name: "standards",                        value:"closed",  display:"none", state: "+"},
        {level:3,     name: "water-science-basics",             value:"closed",  display:"none", state: "+"},
        {level:3,     name: "water-in-the-universe",            value:"closed",  display:"none", state: "+"},
        {level:3,     name: "drinking-water-topics",            value:"closed",  display:"none", state: "+"},
        {level:3,     name: "case-studies",                     value:"closed",  display:"none", state: "+"},
          {level:4,   name: "common-drinking-water-problems",   value:"closed",  display:"none", state: "+"},
          {level:4,   name: "commercial",                       value:"closed",  display:"none", state: "+"},
      {level:2,       name: "get-tested",                       value:"closed",  display:"none", state: "+"},
      {level:2,       name: "get-treatment",                    value:"closed",  display:"none", state: "+"},
        {level:3,     name: "treatment-types",                  value:"closed",  display:"none", state: "+"},
        {level:3,     name: "treatment-topics",                 value:"closed",  display:"none", state: "+"},
      {level:2,       name: "get-tools",                        value:"closed",  display:"none", state: "+"},
      {level:2,       name: "get-training",                     value:"closed",  display:"none", state: "+"},
      {level:2,       name: "get-involved",                     value:"closed",  display:"none", state: "+"},
    {level:1,         name: "outdoor",                          value:"open",    display:"block", state: "–"},
      {level:2,       name: "get-informed-out",                 value:"closed",  display:"none", state: "+"},
        {level:3,     name: "watershed",                        value:"closed",  display:"none", state: "+"},
        {level:3,     name: "case-studies-out",                 value:"closed",  display:"none", state: "+"},
      {level:2,       name: "get-tools-out",                    value:"closed",  display:"none", state: "+"},
      {level:2,       name: "get-training-out",                 value:"closed",  display:"none", state: "+"},
      {level:2,       name: "get-involved-out",                 value:"closed",  display:"none", state: "+"},

  ];
    sessionStorage.setItem("buttonArray", JSON.stringify(buttonArray));
}



// END MODULE 1 x x x x x x x x x x x x x x x x x x



// MODULE 2 DISTRIBUTE - - - - - - - - - - - - - - - - - - - - -
//This distributes the buttonArray throughout the HTML File so that when you go to another file the menu state is maintained


var buttonArrayLength = buttonArray.length;
//console.log("buttonArrayLength " + buttonArrayLength);


for (var i = 0; i < buttonArrayLength ; i++) {

  // Get array object property name
  var buttonElementId = buttonArray[i].name;
  //console.log("buttonElementId " + buttonElementId);

  var buttonElement = document.getElementById(buttonArray[i].name);


  var buttonBarElement = document.getElementById("bar-" + buttonArray[i].name);


  var divDropdownElement = document.getElementById("dropdown-" + buttonElementId);

  //console.log("buttonElement " + buttonElement.id);

  divDropdownElement.style.display = buttonArray[i].display;


  document.getElementById(buttonBarElement.id).addEventListener("click", openClose);

  buttonBarElement.setAttribute('data-buttonValue', buttonArray[i].value);

  //console.log("buttonArray[i].state " + buttonArray[i].state);

  buttonElement.innerHTML = buttonArray[i].state;


}



// END MODULE 2 x x x x x x x x x x x x x x x x x x



// MODULE 3 OPEN CLOSE - - - - - - - - - - - - - - - - - - - - -
// This opens and closes any menu item. It also updates the buttonArray and stores it in local storage


function openClose() {

  var buttonValue = this.getAttribute('data-buttonValue');

  if (buttonValue === "closed") {

    // This sets the data-buttonValue of the bar- element
    this.setAttribute('data-buttonValue', 'open');

    // This removes "bar-" prefext to get root name
    var thisSubString = this.id.substring(4);

    //console.log("thisSubString " + thisSubString);

    // This searchs the array for the name
    var index = buttonArray.findIndex(x => x.name === thisSubString);

    // This updates the items properties
    buttonArray[index].value = "open";
    buttonArray[index].display = "block";

    // This opens the dropdown in the DOM
    var dropdown = document.getElementById("dropdown-" + thisSubString);
    dropdown.style.display= "block";

    var buttonIconElement = document.getElementById(thisSubString);

    buttonIconElement.innerHTML = "–";
    buttonArray[index].state = "–";



  } else {
    this.setAttribute('data-buttonValue', 'closed');

    var thisSubString = this.id.substring(4);


    // This finds the index of the name property of the array object using the id
    var index = buttonArray.findIndex(x => x.name === thisSubString);
    buttonArray[index].value = "closed";
    buttonArray[index].display = "none";


    //sessionStorage.setItem("buttonArray", buttonArray);
    var dropdown = document.getElementById("dropdown-" + thisSubString);
    dropdown.style.display= "none";

    var buttonIconElement = document.getElementById(thisSubString);

    buttonIconElement.innerHTML = "+";
    buttonArray[index].state = "+";

  }
  sessionStorage.setItem("state", "changed");
  sessionStorage.setItem("buttonArray", JSON.stringify(buttonArray));

}

// END MODULE 3 x x x x x x x x x x x x x x x x x x



// MODULE 5 EXPAND MENU - - - - - - - - - - - - - - - - - - - - -
// The expands the menu when loading a page to the menu item of that page so the visitor can see where they are at in the site heirarchy. Important for useres entering the site externally vs by navigating the menu.



// This creates a prefix so the URL in the buttonArray isn't long - can be swapped with different URL when moved
var urlx = "https://www.knowyourh2o.com";

var linkArray = [
  {level:3,         name: "get-informed-intro",           url: urlx + "/indoor-2/get-informed"},
    {level:3,       name: "public-private",               url: urlx + "/indoor-3/private-well-water-public-city-water"},
    {level:4,       name: "contaminants-intro",           url: urlx + "/indoor-3/contaminants"},

      // Contaminants / Primary
      {level:5,       name: "primary-contaminants-intro", url: urlx + "/indoor-4/primary-contaminants"},

        // Contaminants / Primary / pMicrobiological
        {level:6,     name: "pMicrobiological-intro",   url: urlx + "/indoor-5/microbiological"},
        {level:6,     name: "bacteria",                 url: urlx + "/indoor-6/bacteria"},
        {level:6,     name: "total-coliform-bacteria",  url: urlx + "/indoor-6/total-coliform-bacteria"},
        {level:6,     name: "e-coli",                   url: urlx + "/indoor-6/e-coli"},
        {level:6,     name: "giardia-cryptosporidium",  url: urlx + "/indoor-6/giardia-cryptosporidium"},
        {level:6,     name: "viruses",                  url: urlx + "/indoor-6/viruses"},
        {level:6,     name: "waterborne-pathogens",     url: urlx + "/indoor-6/waterborne-pathogens"},

        // Contaminants / Primary / pInorganic
        {level:6,     name: "pInorganics-intro",        url: urlx + "/indoor-5/inorganics"},
        {level:6,     name: "antimony",                 url: urlx + "/indoor-6/antimony"},
        {level:6,     name: "arsenic",                  url: urlx + "/indoor-6/arsenic"},
        {level:6,     name: "barium",                   url: urlx + "/indoor-6/barium"},
        {level:6,     name: "cadmium",                  url: urlx + "/indoor-6/cadmium"},
        {level:6,     name: "chromium",                 url: urlx + "/indoor-6/chromium"},
        {level:6,     name: "copper",                   url: urlx + "/indoor-6/copper"},
        {level:6,     name: "cyanide",                  url: urlx + "/indoor-6/cyanide"},
        {level:6,     name: "fluoride",                 url: urlx + "/indoor-6/fluoride"},
        {level:6,     name: "lead",                     url: urlx + "/indoor-6/lead"},
        {level:6,     name: "mercury",                  url: urlx + "/indoor-6/mercury"},
        {level:6,     name: "nitrates-nitrites",        url: urlx + "/indoor-6/nitrates-nitrites"},
        {level:6,     name: "selenium",                 url: urlx + "/indoor-6/selenium"},
        {level:6,     name: "thallium",                 url: urlx + "/indoor-6/thallium"},
        {level:6,     name: "turbidity",                url: urlx + "/indoor-6/turbidity"},

        // Contaminants / Primary / VOCs
        {level:6,     name: "vocs-intro",                              url: urlx + "/indoor-5/vocs"},
        {level:6,     name: "benzene",                                 url: urlx + "/indoor-6/benzene"},
        {level:6,     name: "carbon-tetrachloride",                    url: urlx + "/indoor-6/carbon-tetrachloride"},
        {level:6,     name: "chloroform-and-trichloromethane",         url: urlx + "/indoor-6/chloroform-and-trichloromethane"},
        {level:6,     name: "ethylbenzene",                            url: urlx + "/indoor-6/ethylbenzene"},
        {level:6,     name: "methylene-chloride-dichloromethane-dcm",  url: urlx + "/indoor-6/methylene-chloride-dichloromethane-dcm"},
        {level:6,     name: "mtbe-methyl-tert-butyl-ether",            url: urlx + "/indoor-6/mtbe-methyl-tert-butyl-ether"},
        {level:6,     name: "tetrachloroethylene",                     url: urlx + "/indoor-6/tetrachloroethylene"},
        {level:6,     name: "trichloroethylene",                       url: urlx + "/indoor-6/trichloroethylene"},
        {level:6,     name: "toluene",                                 url: urlx + "/indoor-6/toluene"},
        {level:6,     name: "xylenes",                                 url: urlx + "/indoor-6/xylenes"},

        // Contaminants / Primary / SOCs
        {level:6,     name: "socs-intro",                              url: urlx + "/indoor-5/socs"},
        {level:6,     name: "alachlor",                                url: urlx + "/indoor-6/alachlor"},
        {level:6,     name: "atrazine",                                url: urlx + "/indoor-6/atrazine"},
        {level:6,     name: "glyphosate",                              url: urlx + "/indoor-6/glyphosate"},
        {level:6,     name: "2-4-d",                                   url: urlx + "/indoor-6/2-4-d"},
        {level:6,     name: "gamma-hexachlorocyclohexane-lindane",     url: urlx + "/indoor-6/gamma-hexachlorocyclohexane-lindane"},
        {level:6,     name: "bis-2-ethylhexyl-phthalate",              url: urlx + "/indoor-6/bis-2-ethylhexyl-phthalate"},
        {level:6,     name: "herbicides-pesticides",                   url: urlx + "/indoor-6/herbicides-pesticides"},

        // Contaminants / Primary / Disinfection By-products
        {level:6,     name: "disinfection-byproducts-intro",           url: urlx + "/indoor-5/disinfection-byproducts"},
        {level:6,     name: "trihalomethanes",                         url: urlx + "/indoor-6/trihalomethanes"},
        {level:6,     name: "haloacetic-acids",                        url: urlx + "/indoor-6/haloacetic-acids"},
        {level:6,     name: "chlorite",                                url: urlx + "/indoor-6/chlorite"},
        {level:6,     name: "bromate",                                 url: urlx + "/indoor-6/bromate"},

        // Contaminants / Primary / Radioactive Isotopes
        {level:6,     name: "radioactive-isotopes-intro",              url: urlx + "/indoor-5/radioactive-isotopes"},
        {level:6,     name: "gross-alpha",                             url: urlx + "/indoor-6/gross-alpha"},
        {level:6,     name: "beta-particles",                          url: urlx + "/indoor-6/beta-particles"},
        {level:6,     name: "radium-226-and-radium-228",               url: urlx + "/indoor-6/radium-226-and-radium-228"},
        {level:6,     name: "uranium",                                 url: urlx + "/indoor-6/uranium"},
        {level:6,     name: "radon-220-222",                           url: urlx + "/indoor-6/radon-220-222"},

      // Contaminants / Secondary
      {level:5,       name: "secondary-contaminants-intro",            url: urlx + "/indoor-4/secondary-contaminants"},

        // Contaminants / Secondary / Inorganics
        {level:6,     name: "sInorganics-intro",                       url: urlx + "/indoor-5/inorganics-s"},
        {level:6,     name: "aluminum",                                url: urlx + "/indoor-6/aluminum"},
        {level:6,     name: "chloride",                                url: urlx + "/indoor-6/chloride"},
        {level:6,     name: "sCopper",                                 url: urlx + "/indoor-6/copper-s"},
        {level:6,     name: "sFluoride",                               url: urlx + "/indoor-6/fluoride-s"},
        {level:6,     name: "iron",                                    url: urlx + "/indoor-6/iron"},
        {level:6,     name: "manganese",                               url: urlx + "/indoor-6/manganese"},
        {level:6,     name: "silver",                                  url: urlx + "/indoor-6/silver"},
        {level:6,     name: "sulfur-hydrogen-sulfide-sulfate-and-sulfate-reducing-bacteria",                                  url: urlx + "/indoor-6/sulfur-hydrogen-sulfide-sulfate-and-sulfate-reducing-bacteria"},
        {level:6,     name: "total-dissolved-solids",                  url: urlx + "/indoor-6/total-dissolved-solids"},
        {level:6,     name: "zinc",                                    url: urlx + "/indoor-6/zinc"},

        // Contaminants / Secondary / Conditions S
        {level:6,     name: "sConditions-intro",                       url: urlx + "/indoor-5/conditions-s"},
        {level:6,     name: "corrosivity",                             url: urlx + "/indoor-6/corrosivity"},
        {level:6,     name: "foaming-agents",                          url: urlx + "/indoor-6/foaming-agents"},
        {level:6,     name: "ph",                                      url: urlx + "/indoor-6/ph"},
        {level:6,     name: "color-taste-odor",                        url: urlx + "/indoor-6/color-taste-odor"},

      // Contaminants / No Standards
      {level:5,       name: "no-standards-contaminants-intro",         url: urlx + "/indoor-4/no-standards-contaminants"},

        // Contaminants / No Standards / Microbiological N
        {level:6,     name: "nMicrobiological-intro",                  url: urlx + "/indoor-5/microbiological-n"},
        {level:6,     name: "nuisance-bacteria",                       url: urlx + "/indoor-6/nuisance-bacteria"},
        {level:6,     name: "iron-bacteria",                           url: urlx + "/indoor-6/iron-bacteria"},
        {level:6,     name: "pink-bacteria",                           url: urlx + "/indoor-6/pink-bacteria"},
        {level:6,     name: "sulfate-reducing-bacteria",               url: urlx + "/indoor-6/sulfate-reducing-bacteria"},
        {level:6,     name: "slime-bacteria",                          url: urlx + "/indoor-6/slime-bacteria"},

        // Contaminants / No Standards / Microbiological N
        {level:6,     name: "nInorganics-intro",                      url: urlx + "/indoor-5/inorganics-n"},
        {level:6,     name: "alkalinity",                             url: urlx + "/indoor-6/alkalinity"},
        {level:6,     name: "boron",                                  url: urlx + "/indoor-6/boron"},
        {level:6,     name: "bromide",                                url: urlx + "/indoor-6/bromide"},
        {level:6,     name: "hardness",                               url: urlx + "/indoor-6/hardness"},
        {level:6,     name: "lithium",                                url: urlx + "/indoor-6/lithium"},
        {level:6,     name: "sodium",                                 url: urlx + "/indoor-6/sodium"},
        {level:6,     name: "strontium",                              url: urlx + "/indoor-6/strontium"},

        // Contaminants / No Standards / Organics
        {level:6,     name: "organics-intro",                         url: urlx + "/indoor-5/organics"},
        {level:6,     name: "acetone",                                url: urlx + "/indoor-6/acetone"},
        {level:6,     name: "glycols",                                url: urlx + "/indoor-6/glycols"},
        {level:6,     name: "methyl-ethyl-ketone-2-butanone",         url: urlx + "/indoor-6/methyl-ethyl-ketone-2-butanone"},
        {level:6,     name: "naphthalene",                            url: urlx + "/indoor-6/naphthalene"},
        {level:6,     name: "perfluorinated-chemicals-pfoa-pfos-pfas-pfcs-forever-chemicals",                                url: urlx + "/indoor-6/perfluorinated-chemicals-pfoa-pfos-pfas-pfcs-forever-chemicals"},

        // Contaminants / No Standards / Gases
        {level:6,     name: "gases-intro",                            url: urlx + "/indoor-5/gases"},
        {level:6,     name: "methane",                                url: urlx + "/indoor-6/methane"},

        // Contaminants / No Standards / Conditions
        {level:6,     name: "nConditions-intro",                      url: urlx + "/indoor-5/conditions-n"},
        {level:6,     name: "nCorrosivity",                           url: urlx + "/indoor-6/corrosivity-n"},
        {level:6,     name: "dissolved-gases",                        url: urlx + "/indoor-6/dissolved-gases"},
        {level:6,     name: "elevated-chlorine",                      url: urlx + "/indoor-6/elevated-chlorine"},
        {level:6,     name: "broken-water-line",                      url: urlx + "/indoor-6/broken-water-line"},

    // Standards
    {level:4,       name: "standards-intro",                          url: urlx + "/indoor-3/standards"},
      {level:4,       name: "primary-standards",                        url: urlx + "/indoor-4/primary-standards"},
      {level:4,       name: "secondary-standards",                      url: urlx + "/indoor-4/secondary-standards"},
      {level:4,       name: "no-standards",                             url: urlx + "/indoor-4/no-standards"},

    // Water Science Basics
    {level:4,       name: "water-science-basics-intro",               url: urlx + "/indoor-3/water-science-basics"},
      {level:4,       name: "physics",                                  url: urlx + "/indoor-4/physics"},
      {level:4,       name: "inorganic-chemistry",                      url: urlx + "/indoor-4/inorganic-chemistry"},
      {level:4,       name: "organic-chemistry",                        url: urlx + "/indoor-4/organic-chemistry"},
      {level:4,       name: "biology",                                  url: urlx + "/indoor-4/biology"},

    // Water In the Universe
    {level:4,         name: "water-in-the-universe-intro",              url: urlx + "/indoor-3/water-in-the-universe"},
      {level:4,       name: "part-1",                                   url: urlx + "/indoor-4/water-in-the-universe-part-1"},
      {level:4,       name: "part-2",                                   url: urlx + "/indoor-4/water-in-the-universe-part-2"},
      {level:4,       name: "part-3",                                   url: urlx + "/indoor-4/water-in-the-universe-part-3"},

    // Glossary
    {level:3,       name: "glossary",           url: urlx + "/indoor-3/glossary"},

    // Drinking Water Topics
    {level:4,       name: "drinking-water-topics-intro",
                      url: urlx + "/indoor-3/drinking-water-topics"},
      {level:4,       name: "groundwater-and-the-water-cycle-pennsylvania-example",
                      url: urlx + "/indoor-4/groundwater-and-the-water-cycle-pennsylvania-example"},
      {level:4,       name: "groundwater-under-the-influence",
                      url: urlx + "/indoor-4/groundwater-under-the-influence"},
      {level:4,       name: "the-ph-of-water",
                      url: urlx + "/indoor-4/the-ph-of-water"},
      {level:4,       name: "drinking-water-testing-conductivity-and-total-dissolved-solids",
                      url: urlx + "/indoor-4/drinking-water-testing-conductivity-and-total-dissolved-solids"},
      {level:4,       name: "how-to-clean-and-remove-iron-and-manganese-staining-from-your-appliance-and-porcelain",
                      url: urlx + "/indoor-4/how-to-clean-and-remove-iron-and-manganese-staining-from-your-appliance-and-porcelain"},
      {level:4,       name: "methyl-tertiary-butyl-ether-mtbe-well-groundwater-contamination-issues",
                      url: urlx + "/indoor-4/methyl-tertiary-butyl-ether-mtbe-well-groundwater-contamination-issues"},
      {level:4,       name: "autoimmune-diseases",
                      url: urlx + "/indoor-4/autoimmune-diseases"},
      {level:4,       name: "cryptosporidium-parvum-drinking-water-protozoan",
                      url: urlx + "/indoor-4/cryptosporidium-parvum-drinking-water-protozoan"},
      {level:4,       name: "giardia-and-waterborne-disease",
                      url: urlx + "/indoor-4/giardia-and-waterborne-disease"},
      {level:4,       name: "giardia-cryptosporidium-and-waterborne-disease-2",
                      url: urlx + "/indoor-4/giardia-cryptosporidium-and-waterborne-disease-2"},
      {level:4,       name: "the-care-and-feeding-of-your-well",
                      url: urlx + "/indoor-4/the-care-and-feeding-of-your-well"},
      {level:4,       name: "biofouling-of-a-well",
                      url: urlx + "/indoor-4/biofouling-of-a-well"},
      {level:4,       name: "hot-water-heater-hydrogen-sulfide-odor",
                      url: urlx + "/indoor-4/hot-water-heater-hydrogen-sulfide-odor"},

    // Case Studies
    {level:4,       name: "case-studies-intro",                       url: urlx + "/indoor-3/case-studies"},

      // Case Studies / Common Drinking Water Problems
      {level:5,   name: "common-drinking-water-problems-intro",       url: urlx + "/indoor-4/common-drinking-water-problems"},
      {level:5,   name: "case-study-1-natural-gas-region-water-discoloration",
                  url: urlx + "/indoor-5/case-study-1-natural-gas-region-water-discoloration"},
      {level:5,   name: "case-study-2-natural-gas-region-water-contamination-of-a-private-well",
                  url: urlx + "/indoor-5/case-study-2-natural-gas-region-water-contamination-of-a-private-well"},
      {level:5,   name: "case-study-3-plastic-well-casing-and-standard-well-cap",
                  url: urlx + "/indoor-5/case-study-3-plastic-well-casing-and-standard-well-cap"},
      {level:5,   name: "case-study-4-natural-gas-region-water-is-fizzy",
                  url: urlx + "/indoor-5/case-study-4-natural-gas-region-water-is-fizzy"},
      {level:5,   name: "case-study-5-water-is-green-alkaline-metallic-taste-odor-problem-with-the-hot-water",
                  url: urlx + "/indoor-5/case-study-5-water-is-green-alkaline-metallic-taste-odor-problem-with-the-hot-water"},
      {level:5,   name: "case-study-6-repeated-hot-water-heater-failures",
                  url: urlx + "/indoor-5/case-study-6-repeated-hot-water-heater-failures"},
      {level:5,   name: "case-study-7-natural-gas-region-green-particles-in-my-water",
                  url: urlx + "/indoor-5/case-study-7-natural-gas-region-green-particles-in-my-water"},
      {level:5,   name: "case-study-8-black-particles-in-the-water",
                  url: urlx + "/indoor-5/case-study-8-black-particles-in-the-water"},
      {level:5,   name: "case-study-9-dirty-discolored-water-bacteria-iron-staining-and-odors",
                  url: urlx + "/indoor-5/case-study-9-dirty-discolored-water-bacteria-iron-staining-and-odors"},
      {level:5,   name: "case-study-10-natural-gas-region-frac-sand-in-my-well-gray-white-sticky-material",
                  url: urlx + "/indoor-5/case-study-10-natural-gas-region-frac-sand-in-my-well-gray-white-sticky-material"},
      {level:5,   name: "case-study-11-natural-gas-region-black-water-sulfur-smell",
                  url: urlx + "/indoor-5/case-study-11-natural-gas-region-black-water-sulfur-smell"},

      // Case Studies / Commercial

      {level:5,   name: "commercial-intro",           url: urlx + "/indoor-4/commercial"},
      {level:5,   name: "smith-paint-products",       url: urlx + "/indoor-5/smith-paint-products"},
      {level:5,   name: "arsenic-research-project",   url: urlx + "/indoor-5/arsenic-research-project"},

    // Glossary
    {level:3,       name: "library",                  url: urlx + "/indoor/library"},

  // Get Tested
  {level:3,         name: "get-tested-intro",           url: urlx + "/indoor-2/get-tested"},
    {level:3,       name: "level-1-testing",            url: urlx + "/indoor-3/level-1-testing"},
    {level:3,       name: "level-2-testing",            url: urlx + "/indoor-3/level-2-testing"},
    {level:3,       name: "level-3-testing",            url: urlx + "/indoor-3/level-3-testing"},
    {level:3,       name: "level-4-testing",            url: urlx + "/indoor-3/level-4-testing"},
    {level:3,       name: "level-4-baseline-testing",   url: urlx + "/indoor-3/level-4-baseline-testing"},

  // Get Treatment
  {level:3,         name: "get-treatment-intro",                      url: urlx + "/indoor-2/get-treatment"},

    // Get Treatment / Treatment Types
    {level:3,       name: "treatment-types-intro",                    url: urlx + "/indoor-3/treatment-types"},
      {level:3,       name: "aeration",                                 url: urlx + "/indoor-4/aeration"},
      {level:3,       name: "arsenic-treatment-systems",                url: urlx + "/indoor-4/arsenic-treatment-systems"},
      {level:3,       name: "carbon-filtration",                        url: urlx + "/indoor-4/carbon-filtration"},
      {level:3,       name: "chemical-disinfection-chlorination-ozone", url: urlx + "/indoor-4/chemical-disinfection-chlorination-ozone"},
      {level:3,       name: "commercial-water-treatment-systems",       url: urlx + "/indoor-4/commercial-water-treatment-systems"},
      {level:3,       name: "countertop-pou-point-of-use-units",        url: urlx + "/indoor-4/countertop-pou-point-of-use-units"},
      {level:3,       name: "distillation-systems",                     url: urlx + "/indoor-4/distillation-systems"},
      {level:3,       name: "ion-exchange",                             url: urlx + "/indoor-4/ion-exchange"},
      {level:3,       name: "iron-and-manganese-control-and-nuisance-reduction", url: urlx + "/indoor-4/iron-and-manganese-control-and-nuisance-reduction"},
      {level:3,       name: "neutralizing-systems",                     url: urlx + "/indoor-4/neutralizing-systems"},
      {level:3,       name: "nitrate-and-nitrate-removal",              url: urlx + "/indoor-4/nitrate-and-nitrate-removal"},
      {level:3,       name: "oxidation",                                url: urlx + "/indoor-4/oxidation"},
      {level:3,       name: "particle-filtration",                      url: urlx + "/indoor-4/particle-filtration"},
      {level:3,       name: "reverse-osmosis",                          url: urlx + "/indoor-4/reverse-osmosis"},
      {level:3,       name: "shower-filters",                           url: urlx + "/indoor-4/shower-filters"},
      {level:3,       name: "sulfur-treatment-and-control",             url: urlx + "/indoor-4/sulfur-treatment-and-control"},
      {level:3,       name: "ultraviolet-disinfection",                 url: urlx + "/indoor-4/ultraviolet-disinfection"},
      {level:3,       name: "under-the-counter-units",                  url: urlx + "/indoor-4/under-the-counter-units"},
      {level:3,       name: "water-cooler-systems",                     url: urlx + "/indoor-4/water-cooler-systems"},
      {level:3,       name: "water-softeners",                          url: urlx + "/indoor-4/water-softeners"},

    // Get Treatment / Treatment Topics
    {level:3,       name: "treatment-topics-intro",                    url: urlx + "/indoor-3/treatment-topics"},
      {level:3,       name: "shock-well-disinfection",                   url: urlx + "/indoor-4/shock-well-disinfection"},
      {level:3,       name: "ozonation-in-water-treatment",              url: urlx + "/indoor-4/ozonation-in-water-treatment"},
      {level:3,       name: "chlorine-disinfection-contact-time-basic",  url: urlx + "/indoor-4/chlorine-disinfection-contact-time-basic"},
      {level:3,       name: "chlorine-disinfection-contact-time-and-inactivation-calculations-advanced",
                      url: urlx + "/indoor-4/chlorine-disinfection-contact-time-and-inactivation-calculations-advanced"},
      {level:3,       name: "water-filtration-plant-performance-evaluations",
                      url: urlx + "/indoor-4/water-filtration-plant-performance-evaluations"},
      {level:3,       name: "uv-disinfection",                          url: urlx + "/indoor-4/uv-disinfection"},

  // Get Tools
  {level:3,         name: "get-tools-intro",                      url: urlx + "/indoor-2/get-tools"},
    {level:3,       name: "self-test-web-app",                    url: urlx + "/indoor-3/self-test-web-app"},
    {level:3,       name: "water-quality-index-calculator-for-drinking-water",
                    url: urlx + "/indoor-3/water-quality-index-calculator-for-drinking-water"},
    {level:3,       name: "global-drinking-water-quality-database-map",
                    url: urlx + "/indoor-3/global-drinking-water-quality-database-map"},
    {level:3,       name: "neighborhood-environmental-reports",
                    url: urlx + "/indoor-3/neighborhood-environmental-reports"},
    {level:3,       name: "edr-radius-map-with-geocheck",
                    url: urlx + "/indoor-3/edr-radius-map-with-geocheck"},
    {level:3,       name: "drinking-water-guide-for-well-water-and-city-water",
                    url: urlx + "/indoor-3/drinking-water-guide-for-well-water-and-city-water"},
    {level:3,       name: "radon-state-county-zones",
                    url: urlx + "/indoor-3/radon-state-county-zones"},
    {level:3,       name: "wellbore-calculator",
                    url: urlx + "/indoor-3/wellbore-calculator"},
    {level:3,       name: "chlorine-contact-calculators",
                    url: urlx + "/indoor-3/chlorine-contact-calculators"},
    {level:3,       name: "epa-widgets",
                    url: urlx + "/indoor-3/epa-widgets"},

  // Get Training
  {level:3,         name: "get-training-intro",                      url: urlx + "/indoor-2/get-training"},
    {level:3,       name: "curriculum-for-educators-students",       url: urlx + "/indoor-3/curriculum-for-educators-students"},
    {level:3,       name: "citizen-monitoring-and-training",         url: urlx + "/indoor-3/citizen-monitoring-and-training"},
    {level:3,       name: "classroom-and-field-training",            url: urlx + "/indoor-3/classroom-and-field-training"},
    {level:3,       name: "online-education-resources",              url: urlx + "/indoor-3/online-education-resources"},

  // Get Involved
  {level:3,         name: "get-involved-intro",                      url: urlx + "/indoor-2/get-involved"},
    {level:3,       name: "share-your-data",                         url: urlx + "/indoor-3/share-your-data"},
    {level:3,       name: "host-a-workshop",                         url: urlx + "/indoor-3/host-a-workshop"},

  // OUTDOOR

  // Outdoor | Get Informed

  {level:3,         name: "get-informed-out-intro",               url: urlx + "/outdoor-2/get-informed"},

     // Outdoor | Get Informed | Watershed
    {level:4,       name: "watershed-intro",                      url: urlx + "/outdoor-3/watershed"},
      {level:4,     name: "the-hydrological-cycle",               url: urlx + "/outdoor-4/the-hydrological-cycle"},
      {level:4,     name: "the-hydrological-cycle-water-budgets", url: urlx + "/outdoor-4/the-hydrological-cycle-water-budgets"},
      {level:4,     name: "stream-water-quality",                 url: urlx + "/outdoor-4/stream-water-quality"},
      {level:4,     name: "stream-water-quality-importance-of-total-suspended-solids-turbidity",
                    url: urlx + "/outdoor-4/stream-water-quality-importance-of-total-suspended-solids-turbidity"},
      {level:4,     name: "stream-water-quality-importance-of-temperature",
                    url: urlx + "/outdoor-4/stream-water-quality-importance-of-temperature"},
      {level:4,     name: "streamflow-measurement",
                    url: urlx + "/outdoor-4/streamflow-measurement"},
      {level:4,     name: "streamflow-measurement",
                    url: urlx + "/outdoor-4/streamflow-measurement"},
      {level:4,     name: "ecosystem-and-lake-productivity-by-chlorophyll-analysis",
                    url: urlx + "/outdoor-4/ecosystem-and-lake-productivity-by-chlorophyll-analysis"},
      {level:4,     name: "phosphate-in-surface-water-streams-lakes-ponds",
                    url: urlx + "/outdoor-4/phosphate-in-surface-water-streams-lakes-ponds"},
      {level:4,     name: "ph-in-the-environment",
                    url: urlx + "/outdoor-4/ph-in-the-environment"},
      {level:4,     name: "ph-buffering-systems",
                    url: urlx + "/outdoor-4/ph-buffering-systems"},
      {level:4,     name: "the-role-of-alkalinity-in-citizen-monitoring",
                    url: urlx + "/outdoor-4/the-role-of-alkalinity-in-citizen-monitoring"},
      {level:4,     name: "ammonia-in-groundwater-runoff-and-streams",
                    url: urlx + "/outdoor-4/ammonia-in-groundwater-runoff-and-streams"},
      {level:4,     name: "metals-in-the-environment",
                    url: urlx + "/outdoor-4/metals-in-the-environment"},
      {level:4,     name: "dissolved-oxygen-in-water",
                    url: urlx + "/outdoor-4/dissolved-oxygen-in-water"},
      {level:4,     name: "dissolved-oxygen-in-water",
                    url: urlx + "/outdoor-4/dissolved-oxygen-in-water"},
      {level:4,     name: "phosphates-in-the-environment",
                    url: urlx + "/outdoor-4/phosphates-in-the-environment"},
      {level:4,     name: "macroinvertebrates-and-rapid-biological-assessments-protocols",
                    url: urlx + "/outdoor-4/macroinvertebrates-and-rapid-biological-assessments-protocols"},
      {level:4,     name: "macroinvertebrates-and-rapid-biological-assessments-protocols",
                    url: urlx + "/outdoor-4/macroinvertebrates-and-rapid-biological-assessments-protocols"},
      {level:4,     name: "fecal-coliform-bacteria-in-water",
                    url: urlx + "/outdoor-4/fecal-coliform-bacteria-in-water"},
      {level:4,     name: "surface-water-investigation-protocol-swip-and-the-microscopic-particulate-analysis-assessment-mpa-swip",
                    url: urlx + "/outdoor-4/surface-water-investigation-protocol-swip-and-the-microscopic-particulate-analysis-assessment-mpa-swip"},
      {level:4,     name: "stormwater-management-and-water-reuse-low-impact-development",
                    url: urlx + "/outdoor-4/stormwater-management-and-water-reuse-low-impact-development"},
      {level:4,     name: "stormwater-best-management-practices",
                    url: urlx + "/outdoor-4/stormwater-best-management-practices"},

    // Get Informed | Case Studies
      {level:3,     name: "case-studies-out-intro",               url: urlx + "/outdoor-3/case-studies"},
        {level:4,   name: "research-projects-and-consulting-projects-in-hydrogeology",
                    url: urlx + "/outdoor-4/research-projects-and-consulting-projects-in-hydrogeology"},
        {level:4,   name: "crescent-lake-watershed-assessment-project",
                    url: urlx + "/outdoor-4/crescent-lake-watershed-assessment-project"},
        {level:4,   name: "roamingwood-sewer-and-water-association",
                    url: urlx + "/outdoor-4/roamingwood-sewer-and-water-association"},

    // Powerpoint
    {level:3,       name: "powerpoint",                  
                    url: urlx + "/outdoor-3/powerpoint"},
                    

                     // Get Informed | Guide to Soils
    {level:3,       name: "guide-to-soils-the-life-giving-layers-beneath-our-feet",
                    url: urlx + "/outdoor-3/guide-to-soils-the-life-giving-layers-beneath-our-feet"},


    

   

    // Outdoor | Get Tools
      {level:3,         name: "get-tools-out-intro",                 url: urlx + "/outdoor-2/get-tools"},

        {level:4,     name: "water-quality-index-calculator-for-surface-water",
                      url: urlx + "/outdoor-3/water-quality-index-calculator-for-surface-water"},
        {level:4,     name: "water-quality-index-calculator-for-surface-water-guide",
                      url: urlx + "/outdoor-3/water-quality-index-calculator-for-surface-water-guide"},
        {level:4,     name: "citizen-science-global-surface-water-quality-database-map",
                      url: urlx + "/outdoor-3/citizen-science-global-surface-water-quality-database-map"},
        {level:4,     name: "unit-conversion-calculators",
                      url: urlx + "/outdoor-3/unit-conversion-calculators"},
        {level:4,     name: "conversion-factors-for-water-quality",
                      url: urlx + "/outdoor-3/conversion-factors-for-water-quality"},
        {level:4,     name: "join-group-directory",
                      url: urlx + "/outdoor-3/global-directory-of-citizen-scientist-teams-conservation-groups-and-watershed-organizations"},

    // Outdoor | Get Training
      {level:3,       name: "get-training-out-intro",                 url: urlx + "/outdoor-2/get-training"},

        {level:4,     name: "curriculum-for-educators-students-out",
                      url: urlx + "/outdoor-3/curriculum-for-educators-students"},
        {level:4,     name: "citizen-monitoring-and-training-out",
                      url: urlx + "/outdoor-3/citizen-monitoring-and-training"},
        {level:4,     name: "classroom-and-field-training-out",
                      url: urlx + "/outdoor-3/classroom-and-field-training"},
        {level:4,     name: "classroom-and-field-training-out",
                      url: urlx + "/outdoor-3/classroom-and-field-training"},
        {level:4,     name: "online-education-resources-out",
                      url: urlx + "/outdoor-3/online-education-resources"},

    // Outdoor | Get Involved
      {level:3,       name: "get-involved-out-intro",                 url: urlx + "/outdoor-2/get-involved"},

        {level:4,     name: "become-a-citizen-scientist",
                      url: urlx + "/outdoor-3/become-a-citizen-scientist"},

        {level:4,     name: "share-your-data-out",
                      url: urlx + "/outdoor-3/share-your-data-outdoor"},

        {level:4,     name: "host-a-workshop-out",
                      url: urlx + "/outdoor-3/host-a-workshop"},

        {level:4,     name: "give-support-out",
                      url: urlx + "/outdoor-3/give-support-out"},

];




function expandMenu () {
  var linkArrayLength1 = linkArray.length;
  var pageURL = window.location.href;



  // This for loop searches the buttonArray for a stored URL that matches the URL of the loaded page
  for (var i = 0; i < linkArrayLength1; i++) {

    // The condition looks for a buttonArray page URL match
    if (linkArray[i].url === pageURL) {


      // This lets you know it found one
      //console.log("Yes, Found One");

      var linkElement = document.getElementById("link-" + linkArray[i].name);

      linkElement.style.textDecoration = "underline";
      linkElement.style.fontWeight = "bold";

      var level = linkArray[i].level;




      if (level >= 2) { // - - - - - - - - - - - - -  - - - - - - - - - - - - -

        // This gets the Parent Bar element
        var parentDropdown1 = document.getElementById(linkElement.id).parentElement;


        // This removes "dropdown-" to get the button id
        var parentDropdown1subString = parentDropdown1.id.substring(9);
        //console.log("parentDropdown1subString " + parentDropdown1subString);

        // This searches the buttonArray to get the index
        var index = buttonArray.findIndex(x => x.name === parentDropdown1subString);

        //console.log("Button Array Index " + index);


        // This updates the record in the buttonArray
        buttonArray[index].value = "open";
        buttonArray[index].display = "block";

        // This opens the parent dropdown div
        var parentDropdown1Div = document.getElementById(parentDropdown1.id);
        parentDropdown1Div.style.display = "block";

        // Update data-buttonValue
        //This gets the bar- Id of the element
        var parentBar1Id = "bar-" + parentDropdown1subString;
        // This gets the bar- element
        var parentBar1Element = document.getElementById(parentBar1Id);
        // This changes the data-buttonVlue
        parentBar1Element.setAttribute('data-buttonValue', 'open');

        // This updates the Button Icon
        var parentIcon1Id = parentDropdown1subString;
        var parentIcon1Element = document.getElementById(parentIcon1Id);

        parentIcon1Element.innerHTML = "–";
        buttonArray[index].state = "–";

      } // End if


      if (level >= 3) { // - - - - - - - - - - - - -  - - - - - - - - - - - - -


        // This updates the data-ButtonValue of the child
        var divBarElementChild = document.getElementById(parentDropdown1subString);
        divBarElementChild.setAttribute('data-buttonValue', 'open');

        // This gets the parent element Id
        var parentDropdown2 = document.getElementById(parentDropdown1.id).parentElement;

        // This removes "dropdown-" to get the button id
        var parentDropdown2subString = parentDropdown2.id.substring(9);
        var index = buttonArray.findIndex(x => x.name === parentDropdown2subString);

        // This searches the buttonArray to get the index
        buttonArray[index].value = "open";
        buttonArray[index].display = "block";

        // This opens the parent dropdown div
        var parentDropdown2Div = document.getElementById(parentDropdown2.id);
        parentDropdown2Div.style.display = "block";

        // This gets the bar- Id of the element
        var parentBar2Id = "bar-" + parentDropdown2subString;
        // This gets the bar- element
        var parentBar2Element = document.getElementById(parentBar2Id);
        // This changes the data-buttonVlue
        parentBar2Element.setAttribute('data-buttonValue', 'open');

        // This updates the Button Icon
        var parentIcon2Id = parentDropdown2subString;
        var parentIcon2Element = document.getElementById(parentIcon2Id);

        parentIcon2Element.innerHTML = "–";
        buttonArray[index].state = "–";
      }


      if (level >= 4) { // - - - - - - - - - - - - -  - - - - - - - - - - - - -

        // This updates the data-ButtonValue of the child
        var divBarElementChild = document.getElementById(parentDropdown2subString);
        divBarElementChild.setAttribute('data-buttonValue', 'open');

        var parentDropdown3 = document.getElementById(parentDropdown2.id).parentElement;
        var parentDropdown3subString = parentDropdown3.id.substring(9);
        var index = buttonArray.findIndex(x => x.name === parentDropdown3subString);
        buttonArray[index].value = "open";
        buttonArray[index].display = "block";
        var parentDropdown3Div = document.getElementById(parentDropdown3.id);
        parentDropdown3Div.style.display = "block";

        // This opens the parent dropdown div
        var parentDropdown3Div = document.getElementById(parentDropdown3.id);
        parentDropdown3Div.style.display = "block";

        // This gets the bar- Id of the element
        var parentBar3Id = "bar-" + parentDropdown3subString;
        // This gets the bar- element
        var parentBar3Element = document.getElementById(parentBar3Id);
        // This changes the data-buttonVlue
        parentBar3Element.setAttribute('data-buttonValue', 'open');

        // This updates the Button Icon
        var parentIcon3Id = parentDropdown3subString;
        var parentIcon3Element = document.getElementById(parentIcon3Id);

        parentIcon3Element.innerHTML = "–";
        buttonArray[index].state = "–";
      }


      if (level >= 5) { // - - - - - - - - - - - - -  - - - - - - - - - - - - -


        // This updates the data-ButtonValue of the child
        var divBarElementChild = document.getElementById(parentDropdown3subString);
        divBarElementChild.setAttribute('data-buttonValue', 'open');

        var parentDropdown4 = document.getElementById(parentDropdown3.id).parentElement;
        var parentDropdown4subString = parentDropdown4.id.substring(9);
        var index = buttonArray.findIndex(x => x.name === parentDropdown4subString);
        buttonArray[index].value = "open";
        buttonArray[index].display = "block";
        var parentDropdown4Div = document.getElementById(parentDropdown4.id);
        parentDropdown4Div.style.display = "block";

        // This opens the parent dropdown div
        var parentDropdown4Div = document.getElementById(parentDropdown4.id);
        parentDropdown4Div.style.display = "block";

        // This gets the bar- Id of the element
        var parentBar4Id = "bar-" + parentDropdown4subString;
        // This gets the bar- element
        var parentBar4Element = document.getElementById(parentBar4Id);
        // This changes the data-buttonVlue
        parentBar4Element.setAttribute('data-buttonValue', 'open');

        // This updates the Button Icon
        var parentIcon4Id = parentDropdown4subString;
        var parentIcon4Element = document.getElementById(parentIcon4Id);

        parentIcon4Element.innerHTML = "–";
        buttonArray[index].state = "–";
      }


      if (level >= 6) { // - - - - - - - - - - - - -  - - - - - - - - - - - - -


        // This updates the data-ButtonValue of the child
        var divBarElementChild = document.getElementById(parentDropdown4subString);
        divBarElementChild.setAttribute('data-buttonValue', 'open');

        var parentDropdown5 = document.getElementById(parentDropdown4.id).parentElement;
        var parentDropdown5subString = parentDropdown5.id.substring(9);
        var index = buttonArray.findIndex(x => x.name === parentDropdown5subString);
        buttonArray[index].value = "open";
        buttonArray[index].display = "block";
        var parentDropdown5Div = document.getElementById(parentDropdown5.id);
        parentDropdown5Div.style.display = "block";

        // This opens the parent dropdown div
        var parentDropdown5Div = document.getElementById(parentDropdown5.id);
        parentDropdown5Div.style.display = "block";

        // This gets the bar- Id of the element
        var parentBar5Id = "bar-" + parentDropdown5subString;
        // This gets the bar- element
        var parentBar5Element = document.getElementById(parentBar5Id);
        // This changes the data-buttonVlue
        parentBar5Element.setAttribute('data-buttonValue', 'open');

        // This updates the Button Icon
        var parentIcon5Id = parentDropdown5subString;
        var parentIcon5Element = document.getElementById(parentIcon5Id);

        parentIcon5Element.innerHTML = "–";
        buttonArray[index].state = "–";
      }

/*


      if (level = 1) { // - - - - - - - - - - - - - - - - - - - - - - - - - -

        // This updates the data-ButtonValue of the child
        var L1Bar = document.getElementById("bar-indoor");
        L1Bar.setAttribute('data-buttonValue', 'open');

        var L1Dropdown = document.getElementById("dropdown-indoor");
        L1Dropdown.style.display = "block";

        buttonArray[0].name.value = "open";
        buttonArray[0].name.display = "block";

        var L1BarSubString = L1Bar.id.substring(4);
        console.log("L1BarSubString " + L1BarSubString);

        var L1Icon = document.getElementById(L1BarSubString);

        L1Icon.innerHTML = "–";
        buttonArray[0].state = "–";
      }
*/


    } // End Main If
    else {

    }

    sessionStorage.setItem("state", "changed");
    sessionStorage.setItem("buttonArray", JSON.stringify(buttonArray));

  }
  // End For Loop
}
// End Function

expandMenu ();
