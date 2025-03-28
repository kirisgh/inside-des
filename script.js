const toggleMenu = document.querySelector(".toggle_menu");
const headerNav = document.querySelector(".header_nav");
const backDrop = document.querySelector(".backDrop");
const headerWrapper = document.querySelector(".header_wrapper")

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open")
    headerNav.classList.toggle("open")
    backDrop.classList.toggle("open")
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= 75) {
        headerWrapper.classList.add("open");
    } else {
        headerWrapper.classList.remove("open");
    }
});

