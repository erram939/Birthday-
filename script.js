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



/* page switch */

function nextPage(page){

document.querySelectorAll("section").forEach(s=>s.classList.remove("active"))

document.getElementById("page"+page).classList.add("active")

}



/* flip cards */

function flipCard(card){

card.classList.toggle("flipped")

}



/* photo slider */

let photos=[
"pic1.jpg",
"pic2.jpg",
"pic3.jpg",
"pic4.jpg"
]

let photoIndex=0

setInterval(()=>{

photoIndex=(photoIndex+1)%photos.length

document.getElementById("memoryPhoto").src=photos[photoIndex]

},3000)



/* balloon pop */

function popBalloon(el,msg){

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



/* greeting card */

function openGreeting(){

document.querySelector(".envelope").style.display="none"

document.getElementById("greetingCard").style.display="block"

confetti({

particleCount:150,

spread:100

})

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

if(i < message.length){

document.getElementById("greetingText").innerHTML += message.charAt(i)

i++

setTimeout(type,40)

}
else{

document.getElementById("finalPhoto").style.display="block"

}

}

type()

}
