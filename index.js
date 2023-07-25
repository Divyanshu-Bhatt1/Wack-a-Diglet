const holes=document.querySelectorAll(".hole");
const curs=document.querySelector(".cursor img");

let started=1;
let t=90;
let prev=-1;


window.addEventListener("mousemove",(e)=>{
         curs.style.top=e.pageY + "px";
         curs.style.left=e.pageX + "px";
});

window.addEventListener("click",()=>{
        curs.style.animation="hit 0.1s ease";
        setTimeout(()=>{
        curs.style.removeProperty("animation");
        },100)
})

let hole;
let pts=0;

function starting(){

let startGame=setInterval(()=>{

      t=t-1;
      document.body.querySelector("div").lastElementChild.innerHTML="Time : "+t;

      let arrNum=Math.floor( Math.random()*9 );
      hole=holes[arrNum];
      
      let image=document.createElement("img");
      image.setAttribute("src","images/Daco_622318.png")
      image.setAttribute("class","digi");

      hole.appendChild(image);

      setTimeout(()=>{
        hole.removeChild(image);
        
      },800);

       if(t<=0)
       {
        document.getElementById("level-title").innerHTML="Game Over ! , Please refress to start again";
        document.getElementById("level-title").hidden=false;
        
        clearInterval(startGame);
       }

},1000)
}

window.addEventListener("click",(e)=>{
  
     if(e.target===hole && prev!==hole)
     {
      pts=pts+10;
      prev=hole;
      document.body.querySelector("div").firstElementChild.innerHTML ="Score : " + pts;
     }
})

document.addEventListener('keydown',function()
{

document.getElementById("level-title").hidden=true;

if(started)
{
started=0;

// this starting fx is defined below

starting();
}
});


