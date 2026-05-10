const screens=document.querySelectorAll(".screen");
let current=0;

function showScreen(i){
screens.forEach(s=>s.classList.remove("active"));
screens[i].classList.add("active");
current=i;
typeEffect();
}

document.querySelectorAll(".next").forEach(b=>{
b.onclick=()=>showScreen(current+1);
});
document.querySelectorAll(".prev").forEach(b=>{
b.onclick=()=>showScreen(current-1);
});

/* TYPEWRITER */
function typeEffect(){
const el=document.querySelector(".screen.active .type");
if(!el)return;
el.textContent="";
let text=el.dataset.text;
let i=0;
let interval=setInterval(()=>{
el.textContent+=text[i];
i++;
if(i>=text.length)clearInterval(interval);
},40);
}

/* GIFT */
const gift=document.getElementById("gift");

gift.onclick=()=>{
gift.classList.add("shake");

setTimeout(()=>{
gift.querySelector(".lid").style.transform="translateY(-50vh) rotate(25deg)";
gift.classList.remove("shake");
burstHearts();

setTimeout(()=>{
showScreen(1);
},3000);

},1000);
};

function burstHearts(){
for(let i=0;i<120;i++){
let heart=document.createElement("span");
heart.innerHTML="❤️";
heart.classList.add("burst");
heart.style.left=Math.random()*100+"vw";
heart.style.top="0px";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),3000);
}
}

/* Floating background hearts */
const bg=document.querySelector(".bg-hearts");
for(let i=0;i<25;i++){
let heart=document.createElement("span");
heart.innerHTML="❤️";
heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=Math.random()*4+3+"vw";
heart.style.animationDuration=Math.random()*10+10+"s";
bg.appendChild(heart);
}

/* FINAL HEART EXPLOSION */
const finalHeart=document.getElementById("finalHeart");
finalHeart.onclick=()=>{
finalHeart.classList.add("explode");
setTimeout(()=>finalHeart.classList.remove("explode"),1000);
};
