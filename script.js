let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;
let lapCount = 1;

function updateDisplay() {
    let display = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
    document.querySelector(".display").textContent = display;
    return display;
}

document.getElementById("start").addEventListener("click", () => {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) { seconds = 0; minutes++; }
            if (minutes === 60) { minutes = 0; hours++; }
            updateDisplay();
        }, 1000);
    }
});

document.getElementById("stop").addEventListener("click", () => {
    running = false;
    clearInterval(timer);
});

document.getElementById("reset").addEventListener("click", () => {
    running = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCount = 1;
    document.getElementById("laps").innerHTML = "";
    updateDisplay();
});

document.getElementById("lap").addEventListener("click", () => {
    if (running) {
        let lapTime = updateDisplay();
        let lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
        lapCount++;
    }
});

updateDisplay();
