
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
  {level:1,         name: "indoor",                  value:"opens", display:"display", url: urlx + "indoor/indoor"},
  {level:2,         name: "get-informed",            value:"closed", display:"none", url: urlx + "indoor-2/get-informed"},
    {level:3,       name: "contaminants",            value:"closed", display:"none", url: urlx + "indoor-3/contaminants"},
      {level:4,     name: "primary-contaminants",    value:"closed",display:"none", url: urlx + "indoor-4/primary-contaminants"},
        {level:5,   name: "pMicrobiological",        value:"closed", display:"none", url: urlx + "indoor-5/microbiological"},
          {level:6, name: "bacteria",                value:"closed", display:"none", url: urlx + "indoor-6/bacteria"},
          {level:6, name: "total-coliform-bacteria", value:"closed", display:"none", url: urlx + "indoor-6/total-coliform-bacteria"},
          {level:6, name: "e-coli",                  value:"closed", display:"none", url: urlx + "indoor-6/e-coli"},
          {level:6, name: "giardia-cryptosporidium", value:"closed", display:"none", url: urlx + "indoor-6/giardia-cryptosporidium"},
          {level:6, name: "viruses",                 value:"closed", display:"none", url: urlx + "indoor-6/viruses"},
          {level:6, name: "waterborne-pathogens",    value:"closed", display:"none", url: urlx + "indoor-6/waterborne-pathogens"}
        /*
        {level:4,   name: "pInorganics",             value:"closed", display:"none", url: urlx + "/aluminum.htmlx"},
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
console.log("Array Length " + buttonArrayLength);

for (var i = 0; i < buttonArrayLength ; i++) {
  // Get array object property name

  var buttonElement = document.getElementById(buttonArray[i].name);
  //buttonElement.value = buttonArray[i].Value;

  var buttonElementId = buttonArray[i].name;

  var divDropdownElement = document.getElementById("dropdown-" + buttonElementId);

  divDropdownElement.style.display = buttonArray[i].display;

  document.getElementById(buttonElementId).addEventListener("click", openClose);

}


// END MODULE 2 x x x x x x x x x x x x x x x x x x


// MODULE 3 OPEN CLOSE - - - - - - - - - - - - - - - - - - - - -
// This opens and closes any menu item. It also updates the buttonArray and stores it in local storage


function openClose() {

  var buttonValue = this.getAttribute('data-buttonValue');
  console.log("this " + this);


  if (buttonValue === "closed") {
    this.setAttribute('data-buttonValue', 'open');

    // This finds the index of the name property of the array object using the id
    var index = buttonArray.findIndex(x => x.name === this.id);
    buttonArray[index].value = "open";
    buttonArray[index].display = "block";

    console.log("if index " + index);

    //localStorage.setItem("buttonArray", buttonArray);
    var dropdown = document.getElementById("dropdown-" + this.id);
    dropdown.style.display= "block";

  } else {
    this.setAttribute('data-buttonValue', 'closed');

    // This finds the index of the name property of the array object using the id
    var index = buttonArray.findIndex(x => x.name === this.id);
    buttonArray[index].value = "closed";
    buttonArray[index].display = "none";
    console.log("else index " + index);

    //localStorage.setItem("buttonArray", buttonArray);
    var dropdown = document.getElementById("dropdown-" + this.id);
    dropdown.style.display= "none";


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
  console.log("buttonArrayLength1 " + buttonArrayLength1);

  var pageURL = window.location.href;
  console.log("pageURL " + pageURL);


// This for loop searches the buttonArray for a stored URL that matches the URL of the loaded page
for (var i = 0; i < buttonArrayLength1; i++) {
  // The condition looks for a buttonArray page URL match
  if (buttonArray[i].url === pageURL) {

    // This lets you know it found one
    console.log("Yes, Found One");


    // This gets the button element
    var divButtonElement = document.getElementById(buttonArray[i].name);
    // This gets the dropdown element
    var divBarElement = document.getElementById("div-" + buttonArray[i].name);
    // This gets the Level array property
    var level = buttonArray[i].level;


    // This makes the menu item bold and underlined - - - - - - - -

      // This gets the child elements Array
        var aElementChildArray = document.getElementById(divBarElement.id).children;

        // This gets the second child elements in the array and applies css styles
        aElementChildArray[1].style.fontWeight = "bold";
        aElementChildArray[1].style.textDecoration = "underline";


    if (level >= 2) {


      // This gets the Parent Bar element
      var parentDropdown1 = document.getElementById(divBarElement.id).parentElement;

      console.log("parentDropdown1 " + parentDropdown1.id); //primary contaminants

      // This removes "dropdown-" to get the button id
      var parentDropdown1subString = parentDropdown1.id.substring(9);

      console.log("parentDropdown1subString " + parentDropdown1subString.id);

      // This searches the buttonArray to get the index
      var index = buttonArray.findIndex(x => x.name === parentDropdown1subString);

      // This updates the record in the buttonArray
      buttonArray[index].value = "open";
      buttonArray[index].display = "block";

      // This opens the parent dropdown div
      var parentDropdown1Div = document.getElementById(parentDropdown1.id);
      parentDropdown1Div.style.display = "block";
      //document.getElementById(buttonArray[index].name).value = "open";

      //parentDropdown1Div.setAttribute('data-buttonValue', 'open');
      buttonElement.setAttribute('data-buttonValue', 'open');


      } // End if



      if (level >= 3) {


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

      //document.getElementById(buttonArray[index].name).value = "open";
      buttonElement.setAttribute('data-buttonValue', 'open');


      }

      if (level >= 4) {


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
      //document.getElementById(buttonArray[index].name).value = "open";
      buttonElement.setAttribute('data-buttonValue', 'open');

      }

      if (level >= 5) {


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
      //document.getElementById(buttonArray[index].name).value = "open";
      buttonElement.setAttribute('data-buttonValue', 'open');


      }

      if (level >= 6) {


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


      }
      /*

      if (level = 1) {

        // This updates the data-ButtonValue of the child
        var L1Button = document.getElementById(divButtonElement.id);
        console.log("L1Button  " + L1Button.id );

        L1Button.setAttribute('data-buttonValue', 'open');
        var L1Dropdown = document.getElementById("dropdown-" + divButtonElement.id);
        console.log("L1Dropdown " + L1Dropdown.id);
        L1Dropdown.style.display = "block";
        buttonArray[i].name.value = "open";
        buttonArray[i].name.display = "block";
        }
        */




  } else {
    console.log("None Found");
    var urlElement = document.getElementById(buttonArray[i].name);
    console.log("urlElementId " + urlElement.id);
    var dataAttribute = urlElement.getAttribute('data-buttonValue');
    console.log("Else dataAttribute " + dataAttribute);

  }
  localStorage.setItem("state", "changed");
  localStorage.setItem("buttonArray", JSON.stringify(buttonArray));
}

}

expandMenu ();



// END MODULE 5 x x x x x x x x x x x x x x x x x x
