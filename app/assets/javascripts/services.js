
var stateObject = {
    "Delhi": ["new Delhi", "North Delhi"],
    "Kerala": ["Thiruvananthapuram", "Palakkad"],
    "Goa": ["North Goa", "South Goa"],
}
window.onload = function () {
  stateSel = document.getElementById("stateSel"),
    districtSel = document.getElementById("districtSel");

  for (var state in stateObject) {
    console.log(state)
    stateSel.options[stateSel.options.length] = new Option(state, state);
  }

  stateSel.onchange = function () {
    districtSel.length = 1; // remove all options bar first
    if (this.selectedIndex < 1) return; // done
    var district = stateObject[this.value];
    for (var i = 0; i < district.length; i++) {
      districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
    }
  }
}


