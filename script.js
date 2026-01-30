function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (location === "") {
        alert("Please enter a location");
        return;
    }

    const apiKey = "f830b1a9f62a4667b6f120435263001";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("weatherResult").innerHTML =
                    `<p>Location not found ❌</p>`;
            } else {
                const temp = data.current.temp_c;
                const condition = data.current.condition.text;
                const city = data.location.name;

                document.getElementById("weatherResult").innerHTML = `
                    <h3>${city}</h3>
                    <p>Temperature: <b>${temp} °C</b></p>
                    <p>Condition: ${condition}</p>
                `;
            }
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML =
                `<p>Error fetching data ⚠️</p>`;
        });
}
