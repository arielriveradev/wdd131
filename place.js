document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind chill calculation (1 line, only if valid)
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

function calculateWindChill(t, s) {
  return (t <= 50 && s > 3)
    ? `${(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)).toFixed(1)}°F`
    : 'Not applicable';
}

document.getElementById("windchill").textContent = "Wind Chill: " + calculateWindChill(temp, wind);