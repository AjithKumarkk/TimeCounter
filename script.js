"using strict";
let time = document.getElementsByClassName("timer");
let timing = 35;
let i = 0;
let myInterval = setInterval(Timeout,1000);
function Timeout () {
    if ((timing*60-i) % 60 >= 10) {
        time[0].innerHTML = parseInt(`${(timing*60-i)/60}`)+":"+`${(timing*60-i)%60}`;
    }
    else {
        time[0].innerHTML = parseInt(`${(timing*60-i)/60}`)+":0"+`${(timing*60-i)%60}`;
    }
    i++;
}