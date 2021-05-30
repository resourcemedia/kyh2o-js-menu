




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
      {level:1,       name: "indoor",                   value:"open",   display:"block", state: "–"},
      {level:2,       name: "get-informed",             value:"closed",  display:"none", state: "–"},
        {level:3,     name: "contaminants",             value:"closed",  display:"none", state: "–"},
          {level:4,   name: "primary-contaminants",     value:"closed",  display:"none", state: "–"},
            {level:5, name: "pMicrobiological",         value:"closed",  display:"none", state: "–"},
            {level:5, name: "pInorganics",              value:"closed",  display:"none", state: "–"},
            {level:5, name: "vocs",                     value:"closed",  display:"none", state: "–"},
            {level:5, name: "socs",                     value:"closed",  display:"none", state: "–"},
            {level:5, name: "disinfection-byproducts",  value:"closed",  display:"none", state: "–"},
            {level:5, name: "radioactive-isotopes",     value:"closed",  display:"none", state: "–"}



  ];
    sessionStorage.setItem("buttonArray", JSON.stringify(buttonArray));
    //console.log("ButtonArray Test " + buttonArray);
}



// END MODULE 1 x x x x x x x x x x x x x x x x x x



// MODULE 2 DISTRIBUTE - - - - - - - - - - - - - - - - - - - - -
//This distributes the buttonArray throughout the HTML File so that when you go to another file the menu state is maintained


var buttonArrayLength = buttonArray.length;
console.log("buttonArrayLength " + buttonArrayLength);


for (var i = 0; i < buttonArrayLength ; i++) {

  // Get array object property name
  var buttonElementId = buttonArray[i].name;
  console.log("buttonElementId " + buttonElementId);

  var buttonElement = document.getElementById(buttonArray[i].name);


  var buttonBarElement = document.getElementById("bar-" + buttonArray[i].name);


  var divDropdownElement = document.getElementById("dropdown-" + buttonElementId);

  console.log("buttonElement " + buttonElement.id);

  divDropdownElement.style.display = buttonArray[i].display;


  document.getElementById(buttonBarElement.id).addEventListener("click", openClose);

  buttonBarElement.setAttribute('data-buttonValue', buttonArray[i].value);

  console.log("buttonArray[i].state " + buttonArray[i].state);

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

    console.log("thisSubString " + thisSubString);

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
var urlx = "https://know-your-h2o.webflow.io";

var linkArray = [
  {level:3,         name: "get-informed-intro",           url: urlx + "/indoor-2/get-informed"},
  {level:3,         name: "public-private",               url: urlx + "/indoor-3/private-well-water-public-city-water"},
    {level:4,       name: "contaminants-intro",           url: urlx + "/indoor-3/contaminants"},
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
        {level:6,     name: "trihalomethanes",          url: urlx + "/indoor-6/trihalomethanes"},
        {level:6,     name: "haloacetic-acids",         url: urlx + "/indoor-6/haloacetic-acids"},
        {level:6,     name: "chlorite",                 url: urlx + "/indoor-6/chlorite"},
        {level:6,     name: "bromate",                  url: urlx + "/indoor-6/bromate"},

        // Contaminants / Primary / Radioactive Isotopes
        {level:6,     name: "gross-alpha",                url: urlx + "/indoor-6/gross-alpha"},
        {level:6,     name: "beta-particles",             url: urlx + "/indoor-6/beta-particles"},
        {level:6,     name: "radium-226-and-radium-228",  url: urlx + "/indoor-6/radium-226-and-radium-228"},
        {level:6,     name: "uranium",                    url: urlx + "/indoor-6/uranium"},
        {level:6,     name: "radon-220-222",              url: urlx + "/indoor-6/radon-220-222"}

];






function expandMenu () {
  var linkArrayLength1 = linkArray.length;
  var pageURL = window.location.href;



  // This for loop searches the buttonArray for a stored URL that matches the URL of the loaded page
  for (var i = 0; i < linkArrayLength1; i++) {

    // The condition looks for a buttonArray page URL match
    if (linkArray[i].url === pageURL) {


      // This lets you know it found one
      console.log("Yes, Found One");

      var linkElement = document.getElementById("link-" + linkArray[i].name);

      linkElement.style.textDecoration = "underline";
      linkElement.style.fontWeight = "bold";

      var level = linkArray[i].level;

      console.log("level " +  level);

      //window.scrollBy(0, -235);
      //linkElement.scrollIntoView();
      //$("#div-menu-overflow").each( function() {
      //  var topPos = document.getElementById('inner-element').offsetTop;
      //document.getElementById('container').scrollTop = topPos-10;

      //scrollTo(document.getElementById('div-menu-overflow'), 0, 30);
      //$(#id_of_div_with_scroll).scrollTop($("#your_span_id").offset().top);


      if (level >= 2) { // - - - - - - - - - - - - -  - - - - - - - - - - - - -

        // This gets the Parent Bar element
        var parentDropdown1 = document.getElementById(linkElement.id).parentElement;


        // This removes "dropdown-" to get the button id
        var parentDropdown1subString = parentDropdown1.id.substring(9);
        console.log("parentDropdown1subString " + parentDropdown1subString);

        // This searches the buttonArray to get the index
        var index = buttonArray.findIndex(x => x.name === parentDropdown1subString);

        console.log("Button Array Index " + index);


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
        var index = buttonArray.findIndex(x => x.name === parentDropdown3subString);
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
        var index = buttonArray.findIndex(x => x.name === parentDropdown4subString);
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
