let menu_is_open = false;

const click_menu = () => {
  console.log(menu_is_open);
  if (!menu_is_open) {
    document.getElementById("menu-popup").style.zIndex = 1;
    document.getElementById("menu-popup").style.display = "block";
    menu_is_open = true;
  } else {
    document.getElementById("menu-popup").style.zIndex = -1;
    document.getElementById("menu-popup").style.display = "none";
    menu_is_open = false;
  }
};
