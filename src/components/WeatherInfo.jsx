const labels = {
  0: "Ochiq osmon",
  1: "Asosan ochiq",
  2: "Qisman bulutli",
  3: "Bulutli",
  45: "Tuman",
  48: "Qirovli tuman",
  51: "Yengil maydalab yomg'ir",
  53: "O'rtacha maydalab yomg'ir",
  55: "Qalin maydalab yomg'ir",
  61: "Yengil yomg'ir",
  63: "O'rtacha yomg'ir",
  65: "Kuchli yomg'ir",
  71: "Yengil qor",
  73: "O'rtacha qor",
  75: "Kuchli qor",
  80: "Qisqa yomg'irlar",
  95: "Momaqaldiroq",
}

function WeatherInfo({ city, weatherData, error , units }) {
  if (error) return <div className="weather-card error">{error}</div>
  if (!city || !weatherData || !weatherData.current) return <div className="weather-card">Shahar tanlang.</div>

  const c = weatherData.current

  return (
    <div className="weather-card">
      <h3>
        {city.name}, {city.country}
      </h3>
      <p>Holat: {labels[c.weather_code] || "Noma'lum ob-havo"}</p>
      <p>Harorat: {c.temperature_2m} {units === 'imperial' ? 	"°F" :"°C"}</p>
      <p>Namlik: {c.relative_humidity_2m}%</p>
      <p>Shamol tezligi: {c.wind_speed_10m} {units === 'imperial' ? "km/h" : "mph"}</p>
    </div>
  )
}

export default WeatherInfo
