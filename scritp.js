const city = document.getElementById("city");
const country = document.getElementById("country");
const btnSearch = document.getElementById("btnSearch");
const weatherContent = document.getElementById("result");

const wmoCodes = {
    0: "cielo despejado",
    1: "cielo poco nublado",
    2: "cielo nublado",
    3: "cielo muy nublado",
    51: "lluvia ligera",
    52: "lluvia moderada",
};

const API_BASE_GEOCODING = "https://geocoding-api.open-meteo.com/v1/search";
const API_BASE_WEATHER = "https://api.open-meteo.com/v1/forecast";

async function getCoordinates(city, country) {
    const res = await fetch(`${API_BASE_GEOCODING}?name=${city}&country=${country}`);
    const data = await res.json();
    console.log(data.results);

    if (data.results && data.results.length > 0) {
        return {
            latitude: data.results[0].latitude,
            longitude: data.results[0].longitude,
            
        };
    } else {
        throw new Error("Ciudad no encontrada. Verifique los datos ingresados.");
    }
}

async function getWeather(latitude, longitude) {
    const res = await fetch(`${API_BASE_WEATHER}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weathercode`);
    const data = await res.json();

    if (data.hourly && data.hourly.temperature_2m && data.hourly.weathercode) {
        return data.hourly;
    } else {
        throw new Error("Datos meteorológicos no encontrados.");
    }
}

btnSearch.addEventListener("click", async () => {
    const cityValue = city.value.trim();
    const countryValue = country.value.trim();

    if (!cityValue || !countryValue) {
        weatherContent.innerHTML = "<p style='color: red;'>Por favor, ingrese una ciudad y un país válidos.</p>";
        return;
    }

    try {
        weatherContent.innerHTML = "<p>Cargando datos del clima...</p>";

        const coordinates = await getCoordinates(cityValue, countryValue);
        const weatherData = await getWeather(coordinates.latitude, coordinates.longitude);

        weatherContent.innerHTML = `
            <h2>Clima en ${cityValue}, ${countryValue}</h2>
            <p>Temperatura: ${weatherData.temperature_2m[0]}°C</p>
            <p>Condición: ${wmoCodes[weatherData.weathercode[0]] || "Desconocida"}</p>
            <p>Probabilidad de precipitación: ${weatherData.precipitation_probability[0]}%</p>
        `;

    } catch (error) {
        weatherContent.innerHTML = `<p style='color: red;'>${error.message}</p>`;
    }
});

btnReset.addEventListener("click", async () => {

    try {
        city.value = "";
        country.value = "";
        weatherContent.textContent = `Aquí aparecerá el resultado`;

    } catch (error) {
        weatherContent.innerHTML = `<p style='color: red;'>No se Pudo hacer el reinicio</p>`;
    }
});