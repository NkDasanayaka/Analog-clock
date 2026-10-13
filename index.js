const hourHand = document.getElementById("hourhand");
const minuteHand = document.getElementById("minutehand");
const secondHand = document.getElementById("secondhand");

// Remember the last angle of each hand so it never spins backwards
// when it passes 360deg -> 0deg (e.g. second 59 -> 0).
const last = { hour: 0, minute: 0, second: 0 };

function smoothAngle(key, angle) {
    while (angle < last[key]) {
        angle += 360;
    }
    last[key] = angle;
    return angle;
}

function updateClock() {
    const now = new Date();

    const hours = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5; // hour hand
    const minutes = now.getMinutes() * 6 + now.getSeconds() * 0.1; // minute hand
    const seconds = now.getSeconds() * 6; // second hand

    hourHand.style.transform = `rotate(${smoothAngle("hour", hours)}deg)`;
    minuteHand.style.transform = `rotate(${smoothAngle("minute", minutes)}deg)`;
    secondHand.style.transform = `rotate(${smoothAngle("second", seconds)}deg)`;
}

updateClock(); // set the clock immediately
setInterval(updateClock, 1000); // update every second
