import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import SearchElement from '../components/SearchElements'
import WeatherInfo from '../components/WeatherInfo'

function Home() {
  const [cities, setCities] = useState([])
  const [city, setCity] = useState(null)
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')

  async function search(name) {
    if (!name) return setCities([]), setCity(null), setWeather(null), setError('')
    setError('')
    setCity(null)
    setWeather(null)
    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=5&language=uz&format=json`,
      )
      const list = (await res.json()).results || []
      setCities(list)
      if (!list.length) setError(`"${name}" topilmadi.`)
    } catch {
      setError('Shaharlarni olishda xatolik.')
    }
  }

  async function select(item) {
    setCity(item)
    setError('')
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${item.latitude}&longitude=${item.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=auto`,
      )
      setWeather(await res.json())
    } catch {
      setError("Ob-havo ma'lumotini olishda xatolik.")
    }
  }

  return (
    <div className="page">
      <h1>SamaWeather</h1>
      <SearchBar onSearch={search} />
      <div className="search-results">
        {cities.map((item) => (
          <SearchElement key={item.id} city={item} onSelect={select} isActive={city?.id === item.id} />
        ))}
      </div>
      <WeatherInfo city={city} weatherData={weather} error={error} />
      <p className="footer-text">Bu sayt SamuraiX tomonidan ishlab chiqilgan</p>
    </div>
  )
}

export default Home
