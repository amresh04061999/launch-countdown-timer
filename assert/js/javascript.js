
const targetDate = new Date("2023-11-31T00:00:00").getTime();
// Function to update the countdown 
function updateCountdown() {
    const leftTime = Math.max(targetDate - Date.now(), 0);
    if (leftTime <= 0) {
    } else {
        const units = [86400000, 3600000, 60000, 1000];
        const [days, hours, minutes, seconds] = units.map(unit =>
            Math.floor((leftTime % (unit * 60)) / unit)
        );
        updateTimer("days", days);
        updateTimer("hours", hours);
        updateTimer("mintues", minutes);
        updateTimer("seconds", seconds);
    }
}
// Function to update a timer element and trigger the flip animation
function updateTimer(id, Value) {
    const timer = document.getElementById(id);
    const upperSide= timer.previousElementSibling; 
    if (timer.innerHTML !== Value.toString()) {
        timer.classList.remove("animate");
        upperSide.classList.remove('timer-flip');
        setTimeout(() => {
            timer.innerHTML = Value;
            timer.classList.add("animate");
            upperSide.classList.add('timer-flip');
        }, 100);
        
    }
}
updateCountdown();
const countdown = setInterval(updateCountdown, 1000);
