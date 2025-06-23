// Digital Clock
const clock = document.querySelector("#clock");

setInterval (() => {
    const date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    clock.innerHTML = `${hrs} : ${mins} : ${secs}`;
}, 1000)