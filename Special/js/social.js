if (document.addEventListener) {
  document.addEventListener(
    "contextmenu",
    function (e) {
      toggleContextMenu("context-menu-01", e);
      e.preventDefault();
    },
    false
  );
} else {
  document.attachEvent("oncontextmenu", function () {
    toggleContextMenu("context-menu-01", e);
    window.event.returnValue = false;
  });
}

// toggle the menu
function toggleContextMenu(id, e) {
  let menu = document.getElementById(id);

  // let's show it
  if (menu.classList.contains("context-open")) {
    // close
    menu.classList.add("context-insta-close");
    menu.classList.remove("context-open");
    menu.classList.remove("context-insta-close");
  } else {
    menu.style.left = e.pageX + 8 + "px";
    menu.style.top = e.pageY + 8 + "px";
    menu.classList.add("context-open");
  }
}
