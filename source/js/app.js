"use strict"
let openMenuBurgerBtn = document.querySelector(".menu-burger__btn__open");
let closeMenuBurgerBtn = document.querySelector(".menu-burger__btn__close");
let menuBurgerItem = document.querySelector(".menu-burger__item");
let slidesItems = document.querySelectorAll(".slide-item");
let prevSlideBtn = document.querySelector(".prev-btn");
let nextSlideBtn = document.querySelector(".next-btn");
let slideIndex = 1;
const activateMenuBurger = ([openBtn, closeBtn, menuItem]) => {
    let menuBurger = ([checkValue, menu, btn]) => {
        if (checkValue === 0) {
            menu.classList.remove("active");
            btn.classList.remove("not-active");
            openBtn.classList.remove("not-active");
        } else if (checkValue === 1) {
            menu.classList.add("active");
            btn.classList.add("not-active");
        };
    };
    openBtn.onclick = function() {
        return menuBurger([1, menuItem, this]);
    };
    closeBtn.onclick = function() {
        return menuBurger([0, menuItem, this]);
    };
};
activateMenuBurger([openMenuBurgerBtn, closeMenuBurgerBtn, menuBurgerItem]);
const activateSlider = ([prevBtn, nextBtn, index, slides]) => {
    let slider = (x) => {
        if (x < 1) index = slides.length;
        else if (x > slides.length) index = 1;
        slides.forEach(i => i.classList.add("not-active"));
        return slides[index - 1].classList.remove("not-active");
    };
    slider(index);
    let addSlides = x => slider(index += x);
    prevBtn.addEventListener("click", () => addSlides(-1));
    nextBtn.addEventListener("click", () => addSlides(1));
};
activateSlider([prevSlideBtn, nextSlideBtn, slideIndex, slidesItems]);