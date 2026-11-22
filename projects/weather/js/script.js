const getWeatherFromApi = async (lat, lng) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,rain,precipitation,is_day&timezone=Asia/Tehran`

    const result = await fetch(url);
    const response = await result.json();

    return response;
}

const getLatLng = async (city) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=en&format=json`;

    const result = await fetch(url);
    const response = await result.json();
    
    const lat = response.results[0].latitude;
    const lng = response.results[0].longitude;
    
    return [lat, lng];
}

const bootstrap = () => {
    let cityInput = document.getElementById('cityInput');
    let form = document.getElementById('form');

    form.addEventListener('submit', async e => {
        e.preventDefault();        

        try {
            const latlng = await getLatLng(cityInput.value);

            const weather = await getWeatherFromApi(
                latlng[0],
                latlng[1]
            );

            const current = weather.current;

            document.getElementById('box').innerHTML = `
                <div class="weather-header">
                    <h2>${cityInput.value}</h2>
                    <p>Current Weather</p>
                </div>

                <div class="temperature">
                    ${current.temperature_2m}
                    <span>°C</span>
                </div>

                <div class="weather-grid">

                    <div class="weather-card">
                        <div class="icon">💨</div>
                        <p>Wind Speed</p>
                        <h3>${current.wind_speed_10m} km/h</h3>
                    </div>

                    <div class="weather-card">
                        <div class="icon">💧</div>
                        <p>Humidity</p>
                        <h3>${current.relative_humidity_2m}%</h3>
                    </div>

                    <div class="weather-card">
                        <div class="icon">🌧️</div>
                        <p>Precipitation</p>
                        <h3>${current.precipitation} mm</h3>
                    </div>

                    <div class="weather-card">
                        <div class="icon">☀️</div>
                        <p>Time of Day</p>
                        <h3>${current.is_day ? 'Day' : 'Night'}</h3>
                    </div>

                </div>
            `;

        } catch (error) {
            document.getElementById('box').innerHTML = `
                <div class="welcome">
                    <div class="weather-icon">⚠️</div>
                    <h2>City Not Found</h2>
                    <p>Please check the city name and try again.</p>
                </div>
            `;
        }
    });
};

bootstrap();
