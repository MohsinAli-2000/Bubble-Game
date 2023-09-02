var timer=60;
var score=0;
var randomNumber;

function makebubbles(){
    var bubbles="";
for(i=1; i<=176; i++){
    var number=Math.floor(Math.random()*10)
    bubbles += `<div class="bubble">${number}</div>`
}
document.querySelector("#bubble-box").innerHTML=bubbles;
}
makebubbles();

function runtimer(){
    var timerdown=setInterval(function(){
        if(timer>0){
            timer--;
        }
        else{
            clearInterval(timerdown);
            document.querySelector("#bubble-box").innerHTML="<h1>Game Over!</h1>";
        }
        
        document.querySelector("#timer").textContent=timer;
    },1000)
}

function getNewHit(){
    randomNumber=Math.floor(Math.random()*10);
    document.querySelector("#rn").textContent=randomNumber;
}

function increaseScore(){
    score+=10;
    document.querySelector("#score").textContent=score;
       
    }

    document.querySelector("#bubble-box").addEventListener('click',function(dets){
        var clickedNumber=Number(dets.target.textContent);
        if (clickedNumber===randomNumber){
            increaseScore();
            makebubbles();
            getNewHit();
        }
    })   
    

runtimer();
getNewHit();

