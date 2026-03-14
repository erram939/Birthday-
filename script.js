/* COUNTDOWN */

let count=10

let timer=setInterval(()=>{

count--

document.getElementById("countdown").innerText=count

if(count==0){

clearInterval(timer)

nextPage(2)

}

},1000)

/* PAGE CHANGE */

function nextPage(page){

document.querySelectorAll("section").forEach(s=>s.classList.remove("active"))

document.getElementById("page"+page).classList.add("active")

}

/* CARD FLIP */

function flipCard(card){

card.classList.toggle("flipped")

}

/* PHOTO SLIDER */

let photos=["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg"]

let index=0

setInterval(()=>{

index=(index+1)%photos.length

let img=document.getElementById("memoryPhoto")

if(img){

img.src=photos[index]

}

},3000)

/* BALLOON POP */

function pop(el,msg){

el.classList.add("pop")

document.getElementById("balloonMsg").innerText=msg

}

/* CAKE CONFETTI */

function celebrate(){

confetti({

particleCount:200,

spread:120,

origin:{y:0.6}

})

setTimeout(()=>{

nextPage(6)

},2000)

}

/* LETTER MESSAGE */

function openLetter(){

document.getElementById("letterCard").style.display="block"

let message=`Happy Birthday ❤️

I just want you to know
how lucky I feel
to have you in my life.

You are not just my best friend,
you are someone very special to me.

May your life always be filled
with happiness and love.

Enjoy your special day 🎂`

let i=0

function type(){

if(i<message.length){

document.getElementById("letterText").innerHTML+=message.charAt(i)

i++

setTimeout(type,40)

}

}

type()

}
