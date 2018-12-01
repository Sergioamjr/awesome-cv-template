function toggleMenu() {
  const documentMenu = document.getElementsByClassName("mobile-menu")[0];
  const rightMenuBtn = document.getElementsByClassName(
    "active-menu-btn-right"
  )[0];
  const { className } = documentMenu;
  const isActived = className.includes("mobile-menu-actived");
  if (!isActived) {
    documentMenu.classList.add("mobile-menu-actived");
    rightMenuBtn.classList.add("disabled-menu-btn");
  } else {
    documentMenu.classList.remove("mobile-menu-actived");
    rightMenuBtn.classList.remove("disabled-menu-btn");
  }
}
