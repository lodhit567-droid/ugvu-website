let btn= document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", function(){
   let x = Math.random() * 100;
   let y = Math.random() * 100;
   let c = Math.floor(Math.random() * 256);
   let c1 = Math.floor(Math.random() * 256);
   let c2 = Math.floor(Math.random() * 256);
   let div = document.createElement("div")
   div.style.height = "100px";
   div.style.width = "100px";
   div.style.position = "absolute";
   div.style.rotate = `${Math.random() * 360}deg`;
   div.style.backgroundColor = `rgb(${c}, ${c1}, ${c2})`;
   div.style.margin = "10px";
   div.style.left = x + "%";
   div.style.top = y + "%";

   main.appendChild(div);
});