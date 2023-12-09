var enterNumber;
var interval;

var startCounter=document.getElementById('start');
var current=document.querySelector('.current');
var next=document.querySelector('.next');
var counterStarted=document.getElementById('counter-started')

function reset(next,current){
    current.innerHTML=0;
    next.innerHTML=0;
    counterStarted.style.visibility='hidden';
    alert('Counter has Stopped');
}


function animate(){
    next.classList.add('animate');
    setTimeout(function(){
        if(next.innerHTML==enterNumber){
            clearInterval(interval);
            reset(next,current);
        }
        current.innerHTML=next.innerHTML;
        next.classList.remove('animate');
        next.innerHTML = parseInt(next.innerHTML) + 1;
    },500);
}

startCounter.addEventListener('click',function(){
    enterNumber=parseInt(document.getElementById('number').value);
    console.log(enterNumber);
    counterStarted.style.visibility='visible';
    interval=setInterval(animate,1000);
});
