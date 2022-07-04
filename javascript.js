
var messageArray= ["Hello, I’m Daniele"];
var textPosition= 0;
var speed= 200;

typewriter = ()=> {
    document.getElementsByClassName("message")[0].innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

    if (textPosition++ != messageArray[0].length){
        setTimeout(typewriter,speed);
    }else{document.getElementsByClassName("message")[0].innerHTML = "Hello, I’m Daniele"}}


window.addEventListener("load",typewriter());

const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


let object2=Array.from(document.querySelectorAll(".projleft"));
window.addEventListener("scroll", slideIn2);
slideIn2()
function slideIn2(){
    const triggerBottom= window.innerHeight/ 5 * 4;
    object2.forEach(element => {
    const boxTop=element.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
      element.classList.add('show');
    } 
  //   else {
  //     element.classList.remove('show');
  // }
  ;
});
}


let object3=Array.from(document.querySelectorAll(".slidin"));
window.addEventListener("scroll", slideIn3);
slideIn3()
function slideIn3(){
    const triggerBottom= window.innerHeight/ 5 * 4;
    object3.forEach(element => {
    const boxTop=element.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
      element.classList.add('show');
    } 
  //   else {
  //     element.classList.remove('show');
  // }
  ;
});
}

let object4=Array.from(document.querySelectorAll(".slidin2"));
window.addEventListener("scroll", slideIn4);
slideIn4()
function slideIn4(){
    const triggerBottom= window.innerHeight/ 5 * 4;
    object4.forEach(element => {
    const boxTop=element.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
      element.classList.add('show');
    }
  //    else {
  //     element.classList.remove('show');
  // }
  ;
});
}

let sunmoon=document.getElementById("ndmode");
let skillbox=document.getElementsByClassName("box");
let header=document.getElementsByClassName("darkheader");
let footer=document.getElementsByClassName("darkfooter");
let navmenu=document.getElementsByClassName("nav-menu");
let titleSkills=document.getElementsByClassName("titl");
let aboutTitle=document.getElementsByClassName("about");
let aboutPara=document.getElementsByClassName("aboutpara");
let contacts=document.getElementsByClassName("contacts");
let anchor=Array.from(document.getElementsByClassName("nav-link"));
let project=Array.from(document.getElementsByClassName("proj"));
let aboutbg=document.getElementsByClassName("video-container");
let cv=document.getElementsByClassName("cv");
let video = document.querySelectorAll("video");
let message=document.getElementsByClassName("message");
let videosrc= true;
console.log(videosrc);
sunmoon.addEventListener('click',()=>{
  document.body.classList.toggle("lightbody");
  header[0].classList.toggle("lightheader");
  skillbox[0].classList.toggle("lightskills");
  footer[0].classList.toggle("lightfooter");
  navmenu[0].classList.toggle("lightnav-menu");
  titleSkills[0].classList.toggle("lighttitl");
  aboutTitle[0].classList.toggle("lightabout");
  aboutPara[0].classList.toggle("lightaboutpara");
  contacts[0].classList.toggle("lightcontacts");
  aboutbg[0].classList.toggle("lightvideo-container");
  cv[0].classList.toggle("lightcv");
  message[0].classList.toggle("lightmessage");
  anchor.forEach(x => {x.classList.toggle("lightnav-link");
});
  project.forEach(n => {n.classList.toggle("lightproj");
});
 
  if (videosrc===true){
    video[0].src = '/image/video.mp4';
    videosrc=false;
    console.log(videosrc);
  } else {
    video[0].src = '/image/earthzoomout.mp4';
        videosrc=true;
        console.log(videosrc);
      }
});





