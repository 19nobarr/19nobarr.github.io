let menu = false;

function clickNav() {
  console.log("nav clicked!");
  console.log(menu);
  if (!menu) {
    menu = true;
    document.getElementById("navPopup").style.zIndex = 1;
    document.getElementById("navPopup").style.display = "flex";
  } else {
    menu = false;
    document.getElementById("navPopup").style.zIndex = -1;
    document.getElementById("navPopup").style.display = "none";
  }
}

function navToHome() {
  window.location.href = "./index.html";
}

function navToAbout() {
  window.location.href = "/pages/about.html";
}

function navToContact() {
  window.location.href = "./pages/contact.html";
}

function navToWork() {
  window.location.href = "./pages/work.html";
  console.log("fsdf");
}
