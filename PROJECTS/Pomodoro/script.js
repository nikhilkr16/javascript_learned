// DOM elements access
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");
let timerDisplay = document.getElementById("timer");

let initialWorkTimer = 25*60; // Initial work timer value
let initialBreakTimer = 5*60; // Initial break timer value
let workTimer = initialWorkTimer;
let breakTimer = initialBreakTimer;

updateTimer = () => {
    let minutes = Math.floor(workTimer / 60);
    let seconds = workTimer % 60;
    timerDisplay.innerHTML = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

updateTimerBreak = () => {
    let minute = Math.floor(breakTimer / 60);
    let second = breakTimer % 60;
    timerDisplay.innerHTML = `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
}

let interval = null;
let intervalBreak = null;

let startCountDown = () => {
    interval = setInterval(() => {
        workTimer--;
        updateTimer();

        if (workTimer === 0) {
            clearInterval(interval);
            alert("Time's up!");
            workTimer = initialWorkTimer; // Reset work timer
            intervalBreak = setInterval(() => {
                breakTimer--;
                updateTimerBreak();
                if (breakTimer === 0) {
                    clearInterval(intervalBreak);
                    alert("Break's up!");
                    breakTimer = initialBreakTimer; // Reset break timer
                    updateTimer();
                }
            }, 1000);
        }
    }, 1000);
};

let pauseCountDown = () => {
    clearInterval(interval);
    clearInterval(intervalBreak);
}

let resetCountDown = () => {
    clearInterval(interval);
    clearInterval(intervalBreak);
    workTimer = initialWorkTimer; // Reset work timer
    breakTimer = initialBreakTimer; // Reset break timer
    updateTimer();
};

// Event listeners
startButton.addEventListener("click", startCountDown);
pauseButton.addEventListener("click", pauseCountDown);
resetButton.addEventListener("click", resetCountDown); 

