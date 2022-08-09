var up=document.getElementById("up")
var refresh=document.getElementById("refresh")
var down=document.getElementById("down")
var display=document.getElementById("display")
var upshow=document.getElementById("upshow")
var downshow=document.getElementById("downshow")
var audio=document.getElementById("audio")
var count=0;
var count2=0;

function upvote(){
    count=count+1;
    up.style.color="blue";
    // display.textContent=count;
    upshow.textContent=count;
    // display.style.color="green";
    up.style.color="blue";
    audio.play()
  
}
function refreshing(){
    refresh.style.color="green";
    upshow.textContent="0";
    downshow.textContent="0";
   
}

function downvote(){
    count2=count2+1;
    audio.play()
    down.style.color="red";
    // display.textContent=count2;
    downshow.textContent=count2;
    down.style.color="red";
    display.style.transition=".5s";
   
}