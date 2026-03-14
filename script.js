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

/* page change */

function nextPage(page){

document.querySelectorAll("section").forEach(s=>s.classList.remove("active"))

document.getElementById("page"+page).classList.add("active")

}

/* sliders */

let imgs=["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg"]

let i=0

setInterval(()=>{
i=(i+1)%imgs.length
document.getElementById("slideImg").src=imgs[i]
},3000)

let j=0

setInterval(()=>{
j=(j+1)%imgs.length
document.getElementById("slideImg2").src=imgs[j]
},3000)

/* cards */

setTimeout(()=>card1.classList.add("show"),1000)
setTimeout(()=>card2.classList.add("show"),2500)
setTimeout(()=>card3.classList.add("show"),4000)

/* balloons */

function pop(el,msg){

el.classList.add("pop")

document.getElementById("balloonMsg").innerText=msg

}

/* cake celebration */

function celebrate(){

confetti({
particleCount:200,
spread:120,
origin:{y:0.6}
})

setTimeout(()=>{
nextPage(7)
},2000)

}

/* letter */

let message=`Happy Birthday ❤️

I just want you to know
how lucky I feel
to have you in my life.

You are not just my best friend,
you are someone very special to me.

May your life always be filled
with happiness, love and success.

Enjoy your special day 🎂`

function openLetter(){

document.querySelector(".envelope").classList.add("open")

let i=0

function type(){

if(i<message.length){

document.getElementById("letter").innerHTML+=message.charAt(i)

i++

setTimeout(type,40)

}

}

type()

}
