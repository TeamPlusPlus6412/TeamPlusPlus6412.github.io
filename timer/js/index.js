var seconds = 0;
var time = '0:00';
var auto = 30;
var teleop = 150;
var minutes = 0;
var seconds = 0;
var timer;

updatetime();

function autorun() {
  clearTimeout(timer);
  seconds = auto;
  timer = window.setInterval(updatetime, 1000);
}

function teleoprun() {
  clearTimeout(timer);
  seconds = teleop;
  timer = window.setInterval(updatetime, 1000);
}

function timetosec() {
  if(seconds > 0){
    minutes = Math.floor(seconds / 60); // 7
    secondsadj = seconds % 60; // 30
    return minutes + ':' + String("0" + secondsadj).slice(-2);
  }
  else {
    return "0:00"
  }
}
function updatetime() {
  time = timetosec();
  if(seconds <= 0) {
    document.body.style.backgroundColor = "#e74c3c"; 
  }
  else if(seconds <= 30) {
    document.body.style.backgroundColor = "#e67e22"; 
  }
  else {
    document.body.style.backgroundColor = "#2ecc71"; 
  }
  seconds--;
  document.getElementById("timer").innerHTML = time;
}