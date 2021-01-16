const menu=document.querySelector(".menu");
const navOpen=document.querySelector(".hamburger");
const navClose=document.querySelector(".close");
const navBar=document.querySelector(".nav");
const navleft=menu.getBoundingClientRect().left;

navOpen.addEventListener("click",()=>{
    if(navleft<0)
    {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});
navClose.addEventListener("click",()=>{
    if(navleft<0)
    {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});

const navHeight=navBar.getBoundingClientRect().height;
window.addEventListener("scroll",()=>{
    const scroll=window.pageYOffset;
    if(scroll>navHeight){
        navBar.classList.add("fix-nav");
    }
    else{
        navBar.classList.remove("fix-nav");
    }
});

gsap.from(".logo",{opacity: 0,duration:1,delay:0.5,y:-10});
gsap.from(".hamberger",{opacity: 0,duration:1,delay:0.5,y:20});
gsap.from(".logo",{opacity: 0,duration:1,delay:0.5,y:-10});
gsap.from(".logo",{opacity: 0,duration:1,delay:0.5,y:-10});