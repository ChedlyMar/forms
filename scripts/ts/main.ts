//The hamburger animation
var d = document.getElementsByClassName("menu-wrapper")[0];
var b = document.getElementsByClassName("hamburger-menu")[0];
let sideMenu = document.getElementsByClassName("sidemenubar")[0];
let logo = document.getElementsByClassName("logo")[0];
 d.addEventListener("click", () => {
    b.classList.toggle("animate")
    sideMenu.classList.toggle("animate");
    logo.classList.toggle("animate");
});
//The hamburger action



// Dropdown Menu
var bb = document.getElementsByClassName("link");
var dd= document.getElementsByClassName("submenu");
for(let i=0;i< bb.length; i++){        
    bb[i].addEventListener("click",()=>{
        for(let j=0; j<bb.length;j++)        
            dd[j].classList.remove("openSubMenu");
        dd[i].classList.toggle("openSubMenu");          
});}
