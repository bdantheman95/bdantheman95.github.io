//function takes two inputs, FromUnits and ToUnits
function myUnitSelection(FromUnits, ToUnits) {
  var FromUnits = document.getElementByName("FromUnits").value;
  var ToUnits = document.getElementsByName('ToUnits').value;
  var Number = document.getElementByName('FromUnits#').value;
  var "kilometers" = 1 / 1000
  var "inches" = FromUnits * .0254
  var "feet" = FromUnits * .0254 / 12
  var "yards" = FromUnits * .0254 / 12 / 3
  var "miles" = FromUnits * .0254 /12 / 5280
//Makes the unit conversion
    if (FromUnits == "meters") {FromUnits * 1}
    else if (ToUnits == "kilometers" ) {FromUnits / 1000}
    else if (ToUnits == "inches" ) {FromUnits * .0254}
    else if (ToUnits == "feet" ) {FromUnits * .0254 / 12}
    else if (ToUnits == "yards" ) {FromUnits * .0254 / 12 / 3}
    else if (ToUnits == "miles" ) {FromUnits * .0254 /12 / 5280}
myUnitSelection = FromUnits;
  }



document.write("[THIS IS WHERE WE WILL PUT THE COMPUTED UNITS]")

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if(!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var Option1 = "meters";
var Option2 = "kilometers";
var Option3 = "inches";
var Option4 = "feet";
var Option5 = "yards";
var Option6 = "miles";


<option value="meters">meters</option>
<option value="kilometers">kilometers</option>
<option value="inches">inches</option>
<option value="feet">feet</option>
<option value="yards">yards</option>
<option value="miles">miles</option>
