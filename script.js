var timer = 60;
var score = 0;
var hitRn= 0;

function getNewScore(){
    score +=10;
    document.querySelector("#newScoreVal").textContent=score;
}

function getNewHit(){
    hitRn=Math.floor(Math.random()*10);
    document.querySelector("#newHitVal").textContent=hitRn;
}

function makeBubble(){

var clutter = "";

for (var i=1 ; i<103 ;i++){

    var rn= Math.floor(Math.random() * 10);

    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){

    var settimer=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
    }
    else{
        clearInterval(settimer);
        document.querySelector("#pbtm").innerHTML= `<h2>"Game Over"<\h2>`;
    }
    },1000);
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var targetNumber = Number(dets.target.textContent);
    if(targetNumber === hitRn){
        getNewScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();
