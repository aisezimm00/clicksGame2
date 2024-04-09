let countPerSecond = document.getElementById("count-per-second");
let count = document.getElementById("count");
let time = document.getElementById("time");
let start = document.getElementById("start");
let restart = document.getElementById("restart");
let recordDisplay = document.getElementById("record");

let interval;
let timeOut;
let timeValue = time.value;
let i = 0;
let record = 0;

time.onchange = (event) => {
    timeValue = event.target.value;
}
start.onclick = () => {
    i++;
    count.textContent = i;
    if (i === 1) {
        timeOut = setTimeout(() => {
            start.disabled = true;
            const clicksPerSecond = i / timeValue;
            countPerSecond.textContent = clicksPerSecond;
            clearInterval(interval);
            if (clicksPerSecond > record) {
                record = clicksPerSecond;
                recordDisplay.textContent = record;
            }
        }, timeValue * 1000);
        interval = setInterval(() => {
            time.value--;
        }, 1000);
    }
}


restart.onclick = () => {
    start.disabled = false;
    time.value = 5;
    timeValue = 5;
    count.textContent = 0;
    countPerSecond.textContent = 0;
    i = 0;
    clearInterval(interval);
    clearTimeout(timeOut);
}