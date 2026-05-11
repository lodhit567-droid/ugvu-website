let btn= document.querySelector("button");
let inner= document.querySelector(".inner");
let h1= document.querySelector("h1");
let grow = 0;
btn.addEventListener("click",()=>{
   btn.style.pointerEvents = "none";
   let a = setInterval(()=>{
   grow++;
   h1.innerHTML= grow+"%";
   inner.style.width= grow+"%";
},50)
setTimeout(() => {
   clearInterval(a);
   h1.innerHTML= "Download Complete";
   btn.style.opacity = 0.1;
}, 5000);
})