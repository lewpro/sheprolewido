function selectMenuItem(elem) {
  var selectedItems = document.getElementsByClassName("menuItem selected");
  for (i = 0; i < selectedItems.length; i++) {
    var element = selectedItems[i];
    element.classList.remove("selected");
    var sectId = element.id + "Sect";
    var section = document.getElementById(sectId);
    section.classList.add("hidden");
  }
  elem.classList.add("selected");
  var selectedSectId = elem.id + "Sect";
  var selectedSection = document.getElementById(selectedSectId);
  selectedSection.classList.remove("hidden");
}
