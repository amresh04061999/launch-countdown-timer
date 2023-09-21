// Set the target date (December 31, 2023)
const dataShowDate = new Date("2023-12-31T00:00:00").getTime();
updateCountdown();

// Update the countdown every second
const countdown = setInterval(updateCountdown, 1000);

// Function to update the countdown and trigger animation
function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = dataShowDate - currentDate;

    if (timeLeft <= 0) {
        // Countdown has reached its end

    } else {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Display the countdown and trigger the flip animation
        updateTimerElement("days", days);
        updateTimerElement("hours", hours);
        updateTimerElement("mintues", minutes);
        updateTimerElement("seconds", seconds);
    }
}

// Function to update a timer element and trigger the flip animation
function updateTimerElement(id, newValue) {
    const timerElement = document.getElementById(id);
    const upperSideElement = timerElement.previousElementSibling; // Get the .upper-side element

    // Check if the time has changed to trigger the animation
    if (timerElement.innerHTML !== newValue.toString()) {

        // Remove animation class
        timerElement.classList.remove("animate");
        // console.log(upperSideElement);
        upperSideElement.classList.remove('timer-flip');

        // Set the new value after a small delay to allow the animation to reset
        setTimeout(() => {
            timerElement.innerHTML = newValue;
            timerElement.classList.add("animate");
            upperSideElement.classList.add('timer-flip');
        }, 100);

    }
}


