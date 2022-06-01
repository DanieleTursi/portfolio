var messageArray= ["D.TURSI"];
var textPosition= 0;
var speed= 200;

typewriter = ()=> {
    document.querySelector("#message").innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

    if (textPosition++ != messageArray[0].length)
        setTimeout(typewriter,speed);
        else
        document.querySelector("#message").innerHTML = "D.TURSI"

}

window.addEventListener("load", typewriter());


let object=Array.from(document.querySelectorAll(".proj"));

window.addEventListener("scroll", slideIn);
slideIn()
function slideIn(){
    const triggerBottom= window.innerHeight/ 5 * 4;
    object.forEach(element => {
      const boxTop=element.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
  };
});
}

// window.addEventListener("scroll", ()=>{
//     let object=Array.from(document.querySelectorAll("#projright"));
    
//     object.forEach(element => {element.classList.add('animate__animated', 'animate__backInRight' ,'animate__slower');
// });
// }
// );

window.addEventListener("scroll", ()=>{
    let object=Array.from(document.querySelectorAll("input"));
    
    object.forEach(element => {element.classList.add('animate__animated', 'animate__delay-5s', 'animate__backInRight' ,'animate__slower');
});
}
);

window.addEventListener("scroll", ()=>{
    let object=Array.from(document.querySelectorAll("button"));
    
    object.forEach(element => {element.classList.add('animate__animated', 'animate__delay-5s', 'animate__backInLeft' ,'animate__slower');
  });
}
);

let moon=document.getElementById("nightdaymode");

moon.addEventListener('click',()=>{
    let checkBodyColor= document.body.style.backgroundColor;
    if (checkBodyColor==='black'){
      document.body.style.backgroundColor='white';
    } else if (checkBodyColor==='black'){
        document.body.style.backgroundColor='white';
      };
      console.log(document.body.style.backgroundColor)
  });

