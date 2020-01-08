"use strict";
var x = 1;
//The hamburger animation
var d = document.getElementsByClassName("menu-wrapper")[0];
var b = document.getElementsByClassName("hamburger-menu")[0];
var sideMenu = document.getElementsByClassName("sidemenubar")[0];
var logo = document.getElementsByClassName("logo")[0];
d.addEventListener("click", function () {
    b.classList.toggle("animate");
    sideMenu.classList.toggle("animate");
    logo.classList.toggle("animate");
    for (var j = 0; j < bb.length; j++)
        dd[j].classList.remove("openSubMenu");
    if (x == 0) {
        x = 1;
    }
    else {
        x = 0;
    }
    ;
});
// Dropdown side Menu
var bb = document.getElementsByClassName("link");
var dd = document.getElementsByClassName("submenu");
var _loop_1 = function (i) {
    bb[i].addEventListener("click", function () {
        if (x == 0) {
            b.classList.toggle("animate");
            sideMenu.classList.toggle("animate");
            logo.classList.toggle("animate");
            x = 1;
        }
        for (var j = 0; j < bb.length; j++)
            dd[j].classList.remove("openSubMenu");
        dd[i].classList.toggle("openSubMenu");
    });
};
for (var i = 0; i < bb.length; i++) {
    _loop_1(i);
}
//navigation dropdown menu 
var megaMenu = document.getElementById("megamenu");
megaMenu.addEventListener("click", function () {
    document.getElementsByTagName("mega-menu")[0].classList.toggle("show");
});
var setting = document.getElementById("setting");
setting.addEventListener("click", function () {
    document.getElementsByClassName("settingModel")[0].classList.toggle("showSetting");
});
//Search btn
var searchContainer = document.getElementsByClassName("thirteen")[0];
var searchBtn = document.getElementsByClassName("btn-search")[0];
searchBtn.addEventListener("click", function () {
    searchContainer.classList.toggle("input");
    searchContainer.classList.toggle("button");
});
//# sourceMappingURL=main.js.map