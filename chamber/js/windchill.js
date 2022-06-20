const temperature = document.getElementById("temperature").value;
const fahrenhiet = document.getElementById("windspeed").value;

// function calculateWindChill () {
    // let temperature = document.getElementById("temperature").value;
    // let fahrenhiet = document.getElementById("windspeed").value;
    let result = 35.74 + 0.6215 * temperature - 33.75 * (fahrenhiet ** 0.16) + 0.4275 * temperature * (fahrenhiet ** 0.16);
    

    if (temperature <= 50 && fahrenhiet >= 3) {
    document.getElementById("windchill").value = result.toFixed(4);

    } else if (temperature >= 50 && fahrenhiet <= 3) {
    document.getElementById("windchill").value = "N/A";
    }




// document.getElementById("submit").addEventListener("click", calculateWindChill);