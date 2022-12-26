const menuButton = document.querySelector(".open-menu")
const menuDropDown = document.querySelector("#drop-down-menu")

menuButton.addEventListener("click", () => {
    menuDropDown.classList.toggle("dropped");
    menuDropDown.classList.toggle("opened");
    console.log(menuDropDown.classList)
})