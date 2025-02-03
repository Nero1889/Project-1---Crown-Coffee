/* Coffee Guide - Wave Loading Effect */
const GUIDE_CONTAINER = document.querySelectorAll(".guide-container");

function loadProducts() {
    GUIDE_CONTAINER.forEach((product, index) => {
        setTimeout(() => {
            product.classList.add("loaded");
        }, index * 70); 
    });
}

document.addEventListener("DOMContentLoaded", loadProducts); 


/* Menu - Wave Loading Effect */
const BREAKFAST_CONTAINER = document.querySelectorAll(".breakfast-container");
const SANDWICH_CONTAINER = document.querySelectorAll(".sandwich-container");
const PIZZA_CONTAINER = document.querySelectorAll(".pizza-container");
const DESSERTS_CONTAINER = document.querySelectorAll(".desserts-container");

function loadContainers() {
    BREAKFAST_CONTAINER .forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("loaded");
        }, index * 70); 
    });

    SANDWICH_CONTAINER.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("loaded");
        }, index * 70); 
    });

    PIZZA_CONTAINER.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("loaded");
        }, index * 70); 
    });

    DESSERTS_CONTAINER.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("loaded");
        }, index * 70); 
    });
}

document.addEventListener("DOMContentLoaded", loadContainers); 


/* Our Coffee - Wave Loading Effect */
const DRINK_PRODUCTS = document.querySelectorAll(".drink-product");

function loadDrinks() {
    DRINK_PRODUCTS.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("loaded");
        }, index * 70); 
    });
}

loadDrinks(); 