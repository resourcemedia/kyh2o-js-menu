
// This Removes the corresponding mobile or desk menu so there isn't duplicate code.

window.addEventListener('resize', breakpointDisplay);

var $div_remove_mobile = $('#div_remove_mobile');
var $div_remove_desktop = $('#div_remove_desktop');

function breakpointDisplay() {

var screenWidth = window.innerWidth;


if (screenWidth >= 750) {
  $('#div_remove_mobile').detach()
  $("#div_nav_menu_desktop").append($div_remove_desktop)
}

if (screenWidth < 750) {
  $('#div_remove_desktop').detach()
  $("#Menu2").append($div_remove_mobile)

}
}

breakpointDisplay();






// This creates a prefix so the URL in the buttonArray isn't long - can be swapped with different URL when moved
var urlx = "https://know-your-h2o.webflow.io/";

//localStorage.setItem("state", "changed");

// MODULE 1 ESTABLISH ARRAY OR GET STORAGE - - - - - - - - - - - - - - - - - - - - -
// This creates the original local storage array

if (localStorage.getItem("state") === "changed") {
// Comes in as an array because it was stringifyed to going out.
 var retreiveData = localStorage.getItem("buttonArray");
 var arrayParse = JSON.parse(retreiveData);
 var buttonArray = Array.from(arrayParse);


} else {
var buttonArray = [
  {level:1,         name: "indoor",                  value:"open", display:"display", url: urlx + "indoor/indoor"},
  {level:2,         name: "get-informed",            value:"closed", display:"none", url: urlx + "indoor-2/get-informed"},
    {level:3,       name: "contaminants",            value:"closed", display:"none", url: urlx + "indoor-3/contaminants"},
      {level:4,     name: "primary-contaminants",    value:"closed",display:"none", url: urlx + "indoor-4/primary-contaminants"},
        {level:5,   name: "pMicrobiological",        value:"closed", display:"none", url: urlx + "indoor-5/microbiological"},
          {level:6, name: "bacteria",                value:"closed", display:"none", url: urlx + "indoor-6/bacteria"},
          {level:6, name: "total-coliform-bacteria", value:"closed", display:"none", url: urlx + "indoor-6/total-coliform-bacteria"},
          {level:6, name: "e-coli",                  value:"closed", display:"none", url: urlx + "indoor-6/e-coli"},
          {level:6, name: "giardia-cryptosporidium", value:"closed", display:"none", url: urlx + "indoor-6/giardia-cryptosporidium"},
          {level:6, name: "viruses",                 value:"closed", display:"none", url: urlx + "indoor-6/viruses"},
          {level:6, name: "waterborne-pathogens",    value:"closed", display:"none", url: urlx + "indoor-6/waterborne-pathogens"},
        {level:5,   name: "pInorganics",             value:"closed", display:"none", url: urlx + "indoor-5/inorganics"},
          {level:6, name: "antimony",                value:"closed", display:"none", url: urlx + "indoor-6/antimony"},
          {level:6, name: "arsenic",                 value:"closed", display:"none", url: urlx + "indoor-6/arsenic"}
/*

        {level:4,   name: "vocs",                    value:"closed", display:"none", url: urlx + "/aluminum.html"},
        {level:4,   name: "socs",                    value:"closed", display:"none"},
        {level:4,   name: "disinfectionByProducts",  value:"closed", display:"none"},
        {level:4,   name: "radioactiveIsotopes",     value:"closed", display:"none"},
      {level:3,     name: "secondaryContaminants",   value:"closed", display:"none"},
        {level:4,   name: "sInorganics",             value:"closed", display:"none"},
          {level:5, name: "aluminum",                value:"closed", display:"none", url: urlx + "/aluminum.htmlx"},
        {level:4,   name: "conditions",              value:"closed", display:"none"},
      {level:3,     name: "noStandardsContaminants", value:"closed", display:"none"},
        {level:4,   name: "nMicrobiological",        value:"closed", display:"none"},
        {level:4,   name: "nInorganics",             value:"closed", display:"none"},
        {level:4,   name: "nOrganics",               value:"closed", display:"none"},
        {level:4,   name: "gases",                   value:"closed", display:"none"},
        {level:4,   name: "nConditions",             value:"closed", display:"none"},
    {level:2,       name: "standards",               value:"closed", display:"none"},
    {level:2,       name: "waterScienceBasics",      value:"closed", display:"none"},
    {level:2,       name: "drinkingWaterTopics",     value:"closed", display:"none"},
    {level:2,       name: "caseStudies",             value:"closed", display:"none"},
  {level:1,         name: "getTested",               value:"closed", display:"none"},
  {level:1,         name: "getTreatment",            value:"closed", display:"none"},
    {level:2,        name: "treatmentTypes",         value:"closed", display:"none"},
    {level:2,        name: "treatmentTopics",        value:"closed", display:"none"},
  {level:1,         name: "getTools",                value:"closed", display:"none"},
  {level:1,         name: "getTraining",             value:"closed", display:"none"},
  {level:1,         name: "getInvolved",             value:"closed", display:"none"}
  */
];
  localStorage.setItem("buttonArray", JSON.stringify(buttonArray));
  //console.log("ButtonArray Test " + buttonArray);
}




// END MODULE 1 x x x x x x x x x x x x x x x x x x


// MODULE 2 DISTRIBUTE - - - - - - - - - - - - - - - - - - - - -
//This distributes the buttonArray throughout the HTML File so that when you go to another file the menu state is maintained


var buttonArrayLength = buttonArray.length   ;


for (var i = 0; i < buttonArrayLength ; i++) {
  // Get array object property name

  var buttonElementId = buttonArray[i].name;

  var buttonElement = document.getElementById(buttonArray[i].name);


  var buttonBarElement = document.getElementById("bar-" + buttonArray[i].name);


  var divDropdownElement = document.getElementById("dropdown-" + buttonElementId);

  console.log("divDropdownElement " + divDropdownElement.id);

  divDropdownElement.style.display = buttonArray[i].display;

  document.getElementById(buttonBarElement.id).addEventListener("click", openClose);

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


  } else {
    this.setAttribute('data-buttonValue', 'closed');

    var thisSubString = this.id.substring(4);


    // This finds the index of the name property of the array object using the id
    var index = buttonArray.findIndex(x => x.name === thisSubString);
    buttonArray[index].value = "closed";
    buttonArray[index].display = "none";


    //localStorage.setItem("buttonArray", buttonArray);
    var dropdown = document.getElementById("dropdown-" + thisSubString);
    dropdown.style.display= "none";

    var buttonIconElement = document.getElementById(thisSubString);
    buttonIconElement.innerHTML = "+";


  }
  localStorage.setItem("state", "changed");
  localStorage.setItem("buttonArray", JSON.stringify(buttonArray));

}

// END MODULE 3 x x x x x x x x x x x x x x x x x x



// MODULE 4 COLLAPSE MENU - - - - - - - - - - - - - - - - - - - - -
//This collapses the whole menu as well as updates the butonArray and local storage to maintain menu state.

/* BLOCK
function collapse() {
var buttonArrayLength1 = buttonArray.length;
console.log("buttonArrayLength1 " + buttonArrayLength1);

for (var i = 0; i < buttonArrayLength1; i++) {
  buttonArray[i].display = "none";
  buttonArray[i].value = "closed";
  var buttonElementId1 = document.getElementById("dropdown-" + buttonArray[i].name);
  console.log("buttonElementId1 " + buttonElementId1);
  buttonElementId1.style.display = "none";

  console.log("buttonElementId1 " + buttonElementId1.style.display);

  document.getElementById(buttonArray[i].name).value = "closed";

  var valuexx = document.getElementById(buttonArray[i].name).value;
  console.log(buttonArray[i].name + ": " + valuexx);
}
localStorage.setItem("buttonArray", JSON.stringify(buttonArray));

}

BLOCK */

// END MODULE 4 x x x x x x x x x x x x x x x x x x



// MODULE 5 EXPAND MENU - - - - - - - - - - - - - - - - - - - - -
// The expands the menu when loading a page to the menu item of that page so the visitor can see where they are at in the site heirarchy. Important for useres entering the site externally vs by navigating the menu.



function expandMenu () {
  var buttonArrayLength1 = buttonArray.length;
  var pageURL = window.location.href;


// This for loop searches the buttonArray for a stored URL that matches the URL of the loaded page
for (var i = 0; i < buttonArrayLength1; i++) {
  // The condition looks for a buttonArray page URL match
  if (buttonArray[i].url === pageURL) {

    // This lets you know it found one
    console.log("Yes, Found One");

    // This gets the button element
    var divButtonElement = document.getElementById(buttonArray[i].name);
    // This gets the dropdown element
    var divBarElement = document.getElementById("bar-" + buttonArray[i].name);
    // This gets the Level array property
    var divLinkElement = document.getElementById("link-" + buttonArray[i].name);
    // This gets the Level array property
    var level = buttonArray[i].level;

    console.log("divLinkElement" + divLinkElement.id);

    divBarElement.setAttribute('data-buttonValue', 'open');
    divButtonElement.innerHTML = "–";
    divLinkElement.style.textDecoration = "underline";
    divLinkElement.style.fontWeight = "bold";



    if (level >= 2) { // - - - - - - - - - - - - -  - - - - - - - - - - - - -


      // This gets the Parent Bar element
      var parentDropdown1 = document.getElementById(divBarElement.id).parentElement;


      // This removes "dropdown-" to get the button id
      var parentDropdown1subString = parentDropdown1.id.substring(9);


      // This searches the buttonArray to get the index
      var index = buttonArray.findIndex(x => x.name === parentDropdown1subString);

      // This updates the record in the buttonArray
      buttonArray[index].value = "open";
      buttonArray[index].display = "block";

      // This opens the parent dropdown div
      var parentDropdown1Div = document.getElementById(parentDropdown1.id);
      parentDropdown1Div.style.display = "block";

      // Update data-buttonValue
        // This gets the bar- Id of the element
        var parentBar1Id = "bar-" + parentDropdown1subString;
        // This gets the bar- element
        var parentBar1Element = document.getElementById(parentBar1Id);
        // This changes the data-buttonVlue
        parentBar1Element.setAttribute('data-buttonValue', 'open');

    // This updates the Button Icon
        var parentIcon1Id = parentDropdown1subString;
        var parentIcon1Element = document.getElementById(parentIcon1Id);
        parentIcon1Element.innerHTML = "–";

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
      parentDropdown2Div.style.display = "block";

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

      // Update data-buttonValue
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


      }

      if (level >= 6) { // - - - - - - - - - - - - -  - - - - - - - - - - - - -


      // This updates the data-ButtonValue of the child
      var divBarElementChild = document.getElementById(parentDropdown4subString);
      divBarElementChild.setAttribute('data-buttonValue', 'open');

      // This gets the parent element Id
      var parentDropdown5 = document.getElementById(parentDropdown4.id).parentElement;

      // This removes "dropdown-" to get the button id
      var parentDropdown5subString = parentDropdown4.id.substring(9);

      // This searches the buttonArray to get the index
      var index = buttonArray.findIndex(x => x.name === parentDropdown5subString);

      // This updates the record in the buttonArray
      buttonArray[index].value = "open";
      buttonArray[index].display = "block";

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


      }


      if (level = 1) {

        // This updates the data-ButtonValue of the child
        var L1Button = document.getElementById(divButtonElement.id);

        L1Button.setAttribute('data-buttonValue', 'open');
        var L1Dropdown = document.getElementById("dropdown-" + divButtonElement.id);

        L1Dropdown.style.display = "block";
        buttonArray[i].name.value = "open";
        buttonArray[i].name.display = "block";
        }



  } else {
    var urlElement = document.getElementById(buttonArray[i].name);
    var dataAttribute = urlElement.getAttribute('data-buttonValue');

  }
  localStorage.setItem("state", "changed");
  localStorage.setItem("buttonArray", JSON.stringify(buttonArray));
}

}

expandMenu ();



// END MODULE 5 x x x x x x x x x x x x x x x x x x
