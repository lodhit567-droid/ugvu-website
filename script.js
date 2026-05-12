let img = document.querySelector('img')
let i = document.querySelector('i')

addEventListener('dblclick',function(){
   i.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)"
   i.style.opacity = "1"
   setTimeout(function(){
      i.style.transform = "translate(-50%, -200%) scale(1) rotate(0deg)"
   },700)
   setTimeout(function(){
      i.style.opacity = "0"
   },1000)
   setTimeout(function(){
      i.style.transform = "translate(-50%, -50%) scale(0) rotate(0deg)"
   },1200)
})
