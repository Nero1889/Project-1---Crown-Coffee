/* Mobile Menu */
const HEADER_BARS = document.querySelector("#header-bars");

HEADER_BARS.onclick = () => {
    const MOBILE_NAVBAR = document.querySelector("#mobile-nav");
    MOBILE_NAVBAR.style.display = "block";
}

const CLOSE_MOBILE_MENU = document.querySelector("#close-mobile-menu");

CLOSE_MOBILE_MENU.onclick = () => {
    const MOBILE_NAVBAR = document.querySelector("#mobile-nav");
    MOBILE_NAVBAR.style.display = "none";
}

/* Our Coffee - Card Popup */
const DRINK_POPUP = document.querySelectorAll(".drink-popup");
const CARD_BTN = document.querySelectorAll(".drink-info");
const CLOSE_POPUP = document.querySelectorAll(".close-popup");

let activeDrinkPopup = (popupClick) => {
    DRINK_POPUP.forEach((popup, i) => {
        if (i === popupClick) {
            popup.classList.add("show-popup");
        } else {
            popup.classList.remove("show-popup");
        }
    });
};

CARD_BTN.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        activeDrinkPopup(i);
    });
});

CLOSE_POPUP.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        DRINK_POPUP.forEach((popup) => {
            popup.classList.remove("show-popup");
        });
    });
});