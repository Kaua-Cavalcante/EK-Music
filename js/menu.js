let show = true;

const menuSection = document.querySelector(".menu__section");
const menuToggle = menuSection.querySelector(".menu__toggle");

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial";

    menuSection.classList.toggle("on", show);
    show = !show;
});

function closeMenu() {
    if(show = true) {

        document.body.style.overflow = !show ? "hidden" : "initial";

        menuSection.classList.remove('on');
        show = true;
    }
}