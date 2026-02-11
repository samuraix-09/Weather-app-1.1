function getWeatherLabel(code) {
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

  return labels[code] || "Noma'lum ob-havo"
}

function WeatherInfo({ city, weatherData, loading, error }) {
  if (loading) {
    return <div className="weather-card">Ob-havo ma'lumoti yuklanmoqda...</div>
  }

  if (error) {
    return <div className="weather-card error">{error}</div>
  }

  if (!city || !weatherData?.current) {
    return <div className="weather-card">Shahar tanlang, ma'lumot shu yerda chiqadi.</div>
  }

  const current = weatherData.current

  return (
    <div className="weather-card">
      <h3>
        {city.name}, {city.country}
      </h3>
      <p>Holat: {getWeatherLabel(current.weather_code)}</p>
      <p>Harorat: {current.temperature_2m} C</p>
      <p>His qilinadigan harorat: {current.apparent_temperature} C</p>
      <p>Namlik: {current.relative_humidity_2m}%</p>
      <p>Shamol tezligi: {current.wind_speed_10m} km/soat</p>
    </div>
  )
}

export default WeatherInfo
