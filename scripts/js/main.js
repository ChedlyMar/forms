"use strict";
//The hamburger animation
var d = document.getElementsByClassName("menu-wrapper")[0];
var b = document.getElementsByClassName("hamburger-menu")[0];
var sideMenu = document.getElementsByClassName("sidemenubar")[0];
var logo = document.getElementsByClassName("logo")[0];
d.addEventListener("click", function () {
    b.classList.toggle("animate");
    sideMenu.classList.toggle("animate");
    logo.classList.toggle("animate");
});
//The hamburger action
// Dropdown Menu
var bb = document.getElementsByClassName("link");
var dd = document.getElementsByClassName("submenu");
var _loop_1 = function (i) {
    bb[i].addEventListener("click", function () {
        for (var j = 0; j < bb.length; j++)
            dd[j].classList.remove("openSubMenu");
        dd[i].classList.toggle("openSubMenu");
    });
};
for (var i = 0; i < bb.length; i++) {
    _loop_1(i);
}
//# sourceMappingURL=main.js.map