// timer variables for session function
let minutes=0;
let seconds=0;
let modifiedMin=0;
let modifiedSec=0; 
// timer variables for break function
let minutes2=0;
let seconds2=0;
let modifiedMin2=0;
let modifiedSec2=0; 


// var of session and break time to increase the timer 
var session=20;//default value 20 min;
var breakk=5;//default value 5 min;

// id's of buttons and progress bar 
var myBar=document.querySelector(".progresss");
var startbutton=document.getElementById("startbutton");
var pausebutton=document.getElementById("pausebutton");
pausebutton.style.display="none";

// id's of session and break time from p tag
var st=document.getElementById("st");
var bt=document.getElementById("bt");

var printSessionCount=1;

var digitalPrint=document.getElementById("digitalPrint");
digitalPrint.style.color="#39C0ED";
digitalPrint.innerHTML="20 : 00";

var f=1;
var x;
var y;
function start(){
  //  myBar.style.animation=`progresss ${setTime}s linear forwards 1`; 
  document.getElementById("dec").disabled = true;
  document.getElementById("inc").disabled = true;
  document.getElementById("inc1").disabled = true;
  document.getElementById("dec1").disabled = true;
  startbutton.style.display="none";
  pausebutton.style.display="block";
  if(f!=0)
  sessionTime();
  else
  breakTime();
}
function sessionTime()
{
    document.getElementById("count").innerHTML=`Session ${printSessionCount}`;
    x = setInterval(()=>{
        if(seconds<59)
            seconds++;
        else{
        minutes++;
        seconds=0;
        }
        if(minutes==session)
        {
            clearInterval(x);
            minutes=0;
            seconds=0;
            modifiedSec=0
            modifiedMin=0;
            f=0;
            breakTime();
        }
         modifiedSec=seconds<10 ? `0${seconds}`:seconds;
         modifiedMin=minutes<10 ? `0${minutes}`:minutes;
        digitalPrint.style.color="#39C0ED";
        digitalPrint.innerHTML=`${modifiedMin} : ${modifiedSec}`;
    },1000);
}
function breakTime()
{
    y = setInterval(()=>{
        if(seconds2<59)
            seconds2++;
        else{
        minutes2++;
        seconds2=0;
        }
        if(minutes2==breakk)
        {
            clearInterval(y);
            minutes2=0;
            seconds2=0;
            modifiedSec2=0
            modifiedMin2=0;
            printSessionCount++;
            f=1;
            sessionTime();
        }
         modifiedSec2=seconds2<10 ? `0${seconds2}`:seconds2;
         modifiedMin2=minutes2<10 ? `0${minutes2}`:minutes2;
        digitalPrint.style.color="#F93154";
        digitalPrint.innerHTML=`${modifiedMin2} : ${modifiedSec2}`;
    },1000);
}

function pause()
{
    startbutton.style.display="block";
    pausebutton.style.display="none";
    clearInterval(x);
    clearInterval(y);
}
function reset()
{
    f=1;
    pause();
    minutes=0;
    seconds=0;
    modifiedSec=0
    modifiedMin=0;
   minutes2=0;
   seconds2=0;
   modifiedMin2=0;
   modifiedSec2=0; 
   digitalPrint.style.color="#39C0ED";
   document.getElementById("digitalPrint").innerHTML=`${modifiedMin}0 : ${modifiedSec}0`;
   document.getElementById("dec").disabled = false;
   document.getElementById("inc").disabled = false;
   document.getElementById("inc1").disabled = false;
   document.getElementById("dec1").disabled = false;
}

function inc()
{
    session++;
    st.innerHTML=`${session} min`;
}
function dec()
{
    if(session>1)
    {
     session--;
    st.innerHTML=`${session} min`;
    }
}

function inc1()
{
    breakk++;
    bt.innerHTML=`${breakk} min`;
}
function dec1()
{
    if(breakk>0)
    {
        breakk--;
    bt.innerHTML=`${breakk} min`;
    }
}