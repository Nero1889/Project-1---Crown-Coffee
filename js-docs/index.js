/* Mobile Menu */
const HEADER_BARS = document.querySelector("#header-bars");
const MOBILE_NAVBAR = document.querySelector("#mobile-nav");
const CLOSE_MOBILE_MENU = document.querySelector("#close-mobile-menu");

HEADER_BARS.onclick = () => {
    MOBILE_NAVBAR.style.display = "block";
}

CLOSE_MOBILE_MENU.onclick = () => {
    MOBILE_NAVBAR.style.display = "none";
}

/* Our Coffee - Card Popup */
const DRINK_POPUP = document.querySelectorAll(".drink-popup");
const CARD_BTN = document.querySelectorAll(".drink-info");
const CLOSE_POPUP = document.querySelectorAll(".close-popup");

let activeDrinkPopup = (popupClick) => {
    DRINK_POPUP.forEach((popup, i) => {
        i === popupClick
        ? popup.classList.add("show-popup") 
        : popup.classList.remove("show-popup");
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
