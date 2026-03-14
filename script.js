document.addEventListener("DOMContentLoaded",function(){

/* countdown */

let count=10

let timer=setInterval(()=>{

count--

document.getElementById("countdown").innerText=count

if(count==0){

clearInterval(timer)

nextPage(2)

}

},1000)



/* photo slider */

let photos=["photo1.jpg","photo4.png","photo3.jpg","photo2.jpg"]

let index=0

setInterval(()=>{

let img=document.getElementById("memoryPhoto")

if(img){

index=(index+1)%photos.length

img.src=photos[index]

}

},3000)

})



function nextPage(page){

document.querySelectorAll("section").forEach(s=>s.classList.remove("active"))

document.getElementById("page"+page).classList.add("active")

}



function flipCard(card){

card.classList.toggle("flipped")

}



function popBalloon(el,msg){

el.classList.add("pop")

document.getElementById("balloonMsg").innerText=msg

}



function celebrate(){

confetti({particleCount:200,spread:120})

setTimeout(()=>{

nextPage(6)

},2000)

}



function openGreeting(){

document.querySelector(".envelope").style.display="none"

document.getElementById("greetingCard").style.display="block"

confetti({particleCount:150,spread:100})

let message=`Happy Birthday ❤️

I just want you to know
how lucky I feel
to have you in my life.

You are not just my best friend,
you are someone very special to me.

Enjoy your special day 🎂`

let i=0

function type(){

if(i<message.length){

document.getElementById("greetingText").innerHTML+=message.charAt(i)

i++

setTimeout(type,40)

}
else{

document.getElementById("finalPhoto").style.display="block"

}

}

type()

}
