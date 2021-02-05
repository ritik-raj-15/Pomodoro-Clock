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



//----------Initializing Audio------------------------------
document.getElementById("beepAudio").src = "http://soundbible.com/grab.php?id=1252&type=mp3";

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// total length of rectangle i.e perimeter of rectangle;
var totalLength=2*(myBar.offsetWidth + myBar.offsetHeight);
var progressVal=1;

var natukaka;
function tiktok(y){
 natukaka = setInterval(function()
{
    progressVal = progressVal <= (60*y) ? progressVal : (60*y);
    animate(progressVal,y);
    progressVal++;
},1000);
}

function animate(input,y)
{
       var borderLen = (input / (60*y)) * totalLength;

     if (borderLen <= myBar.offsetWidth) 
     {
     backgroundPos = 'background-position: ' + (-220 + borderLen) + 'px 0px, 210px -220px, 220px 209px, 0px 220px';
     myBar.setAttribute('style', backgroundPos);
     }
       
   else if (borderLen <= (myBar.offsetWidth + myBar.offsetHeight)) 
   {
     backgroundPos = 'background-position: 0px 0px, 210px ' + (-220 + (borderLen - myBar.offsetWidth)) + 'px, 220px 209px, 0px 220px';
     myBar.setAttribute('style', backgroundPos);
   } 
   
   else if (borderLen <= (myBar.offsetWidth * 2 + myBar.offsetHeight)) 
   {
     backgroundPos = 'background-position: 0px 0px, 210px 0px, ' + (220 - (borderLen - myBar.offsetWidth - myBar.offsetHeight)) + 'px 209px, 0px 220px';
     myBar.setAttribute('style', backgroundPos);
   }
   
   else 
   {
     backgroundPos = 'background-position: 0px 0px, 210px 0px, 0px 209px, 0px ' + (220 - (borderLen - (myBar.offsetWidth * 2) - myBar.offsetHeight)) + 'px';
     myBar.setAttribute('style', backgroundPos);
   }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
var f=1;
var x;
var y;
function start(){
  document.getElementById("dec").disabled = true;
  document.getElementById("inc").disabled = true;
  document.getElementById("inc1").disabled = true;
  document.getElementById("dec1").disabled = true;
  startbutton.style.display="none";
  pausebutton.style.display="block";
  if(f!=0)
  {
      tiktok(session);
      sessionTime();
  }
  else
  {
    tiktok(breakk);
    breakTime();
  }
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
            clearInterval(natukaka);
            minutes=0;
            seconds=0;
            modifiedSec=0
            modifiedMin=0;
            f=0;
            progressVal=1;
            document.getElementById("beepAudio").play();
            animate(0,0);
            breakTime();
            document.documentElement.style.setProperty(`--color`, `#F93154`);
            tiktok(breakk);
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
            clearInterval(natukaka);
            progressVal=1;
            document.getElementById("beepAudio").play();
            animate(0,0);
            sessionTime();
            document.documentElement.style.setProperty(`--color`, `#39C0ED`);
            tiktok(session);
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
    clearInterval(natukaka);
}
function reset()
{
    f=1;
    pause();
    progressVal=1;
    animate(0,0);
    minutes=0;
    seconds=0;
    modifiedSec=0
    modifiedMin=0;
   minutes2=0;
   seconds2=0;
   modifiedMin2=0;
   modifiedSec2=0; 
   printSessionCount=1;
   document.getElementById("count").innerHTML=`Session ${printSessionCount}`;
   digitalPrint.style.color="#39C0ED";
   document.documentElement.style.setProperty(`--color`, `#39C0ED`);
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