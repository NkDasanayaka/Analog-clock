function updateClock() {
    const now = new Date();
    const hours = (now.getHours() % 12) *30 + now.getMinutes() * 0.5; // Calculate the hour hand position
    const minutes = now.getMinutes() * 6; // Calculate the minute hand position
    const seconds = now.getSeconds() * 6; // Calculate the second hand position

    document.getElementById('hourhand').style.transform = `rotate(${hours}deg)`;
    document.getElementById('minutehand').style.transform = `rotate(${minutes}deg)`;
    document.getElementById('secondhand').style.transform = `rotate(${seconds}deg)`;
}