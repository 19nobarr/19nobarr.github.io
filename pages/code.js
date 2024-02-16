let navClicked = false;

function clickNav() {
  console.log("nav clicked!");
  if (navClicked) {
    document.getElementById("navPopup").style.zIndex = -1;
  } else {
    document.getElementById("navPopup").style.zIndex = 1;
  }
}

function navToHome() {
  window.location.href = "../index.html";
}

function navToAbout() {
  window.location.href = "./about.html";
}

function navToContact() {
  window.location.href = "./contact.html";
}

function navToWork() {
  window.location.href = "./work.html";
}
