function selectMenuItem(elem) {
  stopConfetti();

  // Unselect any selected menu items
  var selectedItems = document.getElementsByClassName("menuItem selected");
  for (i = 0; i < selectedItems.length; i++) {
    var element = selectedItems[i];
    element.classList.remove("selected");
  }
  // Hide any currently visible sections
  var visibleSections = document.getElementsByClassName("centerContent");
  for (i = 0; i < visibleSections.length; i++) {
    var element = visibleSections[i];
    if (element.classList.contains("hidden") != true) {
      element.classList.add("hidden");
    }
  }

  // Select current menu item and reveal it's section
  elem.classList.add("selected");
  var selectedSectId = elem.id.substring(0, elem.id.length - 1)  + "Sect";
  var selectedSection = document.getElementById(selectedSectId);
  selectedSection.classList.remove("hidden");
  toggleMenu();
}

function toggleMenu() {
  var nav = document.getElementById("sideNav");
  if (nav.classList.contains("selected")) {
    nav.classList.remove("selected");
  } else {
    nav.classList.add("selected");
  }
}
