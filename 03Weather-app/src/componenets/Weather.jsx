import { useState, useEffect } from "react";

function WeatherApp() {
  const [city, setCity] = useState("Mumbai"); // default city
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // replace with your OpenWeather key

  useEffect(() => {
    // skip fetch if city is empty
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();

        if (data.cod === "404") {
          setError("City not found!");
          setWeather(null);
        } else {
          setWeather(data);
          setError("");
        }
      } catch {
        setError("Error fetching weather");
      }
    };

    fetchWeather();
  }, [city]); // 👈 runs every time city changes

  return (
    <div className="p-4 text-center">
      <h2>🌤️ Weather App</h2>

      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)} // 👈 changing city triggers useEffect
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>🌡️ {weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
