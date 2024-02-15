let navClicked = false;

function clickNav() {
  console.log("nav clicked!");
  if (navClicked) {
    document.getElementById("navPopup").style.zIndex = -1;
  } else {
    document.getElementById("navPopup").style.zIndex = 1;
  }
}
