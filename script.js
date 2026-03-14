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

function flipCard(card){

card.classList.toggle("flipped")

}

function nextPage(page){

document.querySelectorAll("section").forEach(s=>s.classList.remove("active"))

document.getElementById("page"+page).classList.add("active")

}

/* card animation */

setTimeout(()=>card1.classList.add("show"),1000)
setTimeout(()=>card2.classList.add("show"),2500)
setTimeout(()=>card3.classList.add("show"),4000)

/* photo slider */

let photos=[
"photo1.jpg",
"photo4.png",
"photo3.jpg",
"photo2.jpg"
]

let photoIndex=0

setInterval(()=>{

photoIndex=(photoIndex+1)%photos.length

document.getElementById("memoryPhoto").src=photos[photoIndex]

},3000)

/* balloon */

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
nextPage(6)
},2000)

}

/* letter typing */

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

document.getElementById("letterCard").style.display="block"

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

document.getElementById("letterText").innerHTML+=message.charAt(i)

i++

setTimeout(type,40)

}

}

type()

}
