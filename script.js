const apiKey = 'd2071db8ff4cde6f21b41a33d3b84228';  // Replace with your OpenWeatherMap API key

async function getWeather() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            if (data.cod === 200) {
                document.getElementById('location').innerText = `Location: ${data.name}, ${data.sys.country}`;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
                document.getElementById('conditions').innerText = `Conditions: ${data.weather[0].description}`;
                document.getElementById('weatherInfo').style.display = 'block';
            } else {
                alert('Location not found. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
            console.error('Error:', error);
        }
    } else {
        alert('Please enter a location.');
    }
}
