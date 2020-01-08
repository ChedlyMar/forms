let x=1;
//The hamburger animation
var d = document.getElementsByClassName("menu-wrapper")[0];
var b = document.getElementsByClassName("hamburger-menu")[0];
let sideMenu = document.getElementsByClassName("sidemenubar")[0];
let logo = document.getElementsByClassName("logo")[0];
 d.addEventListener("click", () => {
    b.classList.toggle("animate")
    sideMenu.classList.toggle("animate");
    logo.classList.toggle("animate");
    for(let j=0; j<bb.length;j++)        
        dd[j].classList.remove("openSubMenu");
    
    if(x==0){x=1}
    else{x=0};
});




// Dropdown side Menu
var bb = document.getElementsByClassName("link");
var dd= document.getElementsByClassName("submenu");
for(let i=0;i< bb.length; i++){        
    bb[i].addEventListener("click",()=>{
        if(x==0){
            b.classList.toggle("animate")
            sideMenu.classList.toggle("animate");
            logo.classList.toggle("animate");
            x=1;
        }
            
    
        for(let j=0; j<bb.length;j++)        
        dd[j].classList.remove("openSubMenu");
    dd[i].classList.toggle("openSubMenu");    
    
          
});}

//navigation dropdown menu 
let megaMenu=document.getElementById("megamenu");
megaMenu.addEventListener("click",()=>{
    document.getElementsByTagName("mega-menu")[0].classList.toggle("show");    
});

let setting=document.getElementById("setting");
setting.addEventListener("click",()=>{
    document.getElementsByClassName("settingModel")[0].classList.toggle("showSetting");    
});



//Search btn
var searchContainer=document.getElementsByClassName("thirteen")[0];
var searchBtn=document.getElementsByClassName("btn-search")[0];
searchBtn.addEventListener("click",()=>{
    searchContainer.classList.toggle("input");
    searchContainer.classList.toggle("button");
} )

