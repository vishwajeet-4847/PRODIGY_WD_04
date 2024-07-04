let menu=document.querySelector(".menubox");
let closeBtn=document.querySelector(".close-btn");
let menuBtn=document.querySelector(".menu-btn");


menuBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    menu.classList.add("show-navbar");
    closeBtn.classList.add("show");
    menuBtn.classList.add("hide");
});
closeBtn.addEventListener("click",(e)=>{
    
    menu.classList.remove("show-navbar");
    closeBtn.classList.remove("show");
    menuBtn.classList.remove("hide");
});

//making navbar invisible when clicked outside it
document.addEventListener("click",()=>{

});
document.addEventListener("click",(e)=>{
    if(e.currentTarget!==menuBtn || e.currentTarget.parentNode!== menuBtn){
        
        menu.classList.remove("show-navbar");
        closeBtn.classList.remove("show");
        menuBtn.classList.remove("hide");
        
    }
 
});
let cards=document.querySelectorAll(".cards");
for (let index = 0; index < cards.length; index++) {
     cards[index].addEventListener("click",()=>{
        window.location.href="project.html";
     });
    
}
let pcards=document.querySelectorAll(".project-cards");
let projectLinks = ["https://project--yourfrnd.repl.co/#","https://vishwajeet-4847.github.io/cyclepage/","https://vishwajeet-4847.github.io/PRODIGY_WD_01/","https://vishwajeet-4847.github.io/PRODIGY_WD_02/","https://vishwajeet-4847.github.io/Animated-Login-Form/","https://vishwajeet-4847.github.io/PRODIGY_WD_03/","https://akash-portfolio-6aju.onrender.com"];
for (let index = 0; index < pcards.length; index++) {
     pcards[index].addEventListener("click",()=>{
       
        window.location.href=projectLinks[index];
     });
    
}
