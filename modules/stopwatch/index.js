function updateTime(text){
    document.getElementById('time').innerHTML = text 
}
let startTime;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    return `${formattedHH}:${formattedMM}:${formattedSS}`;
  }

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateTime(timeToString(elapsedTime));
    }, 10);
    showButton("stop");
  }
  
  function stop() {
    clearInterval(timerInterval);
    showButton("start");
  }
  function showButton(buttonKey) {
    const buttonToShow = buttonKey === "start" ? playbutton : pausebutton;
    const buttonToHide = buttonKey === "start" ? pausebutton : playbutton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
  
  }
  
  function reset() {
    clearInterval(timerInterval);
    updateTime("00:00:00");
    elapsedTime = 0;
    showButton("play");
  }


document.getElementById('resetButton').addEventListener("click",reset)
document.getElementById('stopButton').addEventListener("click",stop)
document.getElementById('startButton').addEventListener("click",start)