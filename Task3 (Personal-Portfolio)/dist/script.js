let sideMenu= document.querySelector("#sideMenu");
let open=document.querySelector("#bars");
let close=document.querySelector("#cross");
let navBar=document.querySelector("nav");
let navLinks=document.querySelector("nav ul")

function openMenu(){
    sideMenu.style.transform = "translateX(-16rem)";
}
open.addEventListener("click",openMenu);


function closeMenu(){
    sideMenu.style.transform = "translateX(16rem)";
}
close.addEventListener("click",closeMenu);

window.addEventListener('scroll',()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', "bg-opacity-50", "backdrop-blur-lg", "shadow-sm")
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
    else{
        navBar.classList.remove('bg-white', "bg-opacity-50", "backdrop-blur-lg", "shadow-sm")
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
    }
})