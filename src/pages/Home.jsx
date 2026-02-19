import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import SearchElement from '../components/SearchElements'
import WeatherInfo from '../components/WeatherInfo'
import Hourly from '../components/Hourly'
import Daily from '../components/Daily'

function Home() {
  const [cities, setCities] = useState([])
  const [city, setCity] = useState(null)
  const [data, setData] = useState(null)
  const [error, setError] = useState('')

  async function search(name) {
    if (!name) {
      setCities([])
      setCity(null)
      setData(null)
      setError('')
      return
    }
    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=5&language=uz&format=json`,
      )
      const list = (await res.json()).results || []
      setCities(list)
      setCity(null)
      setData(null)
      setError('')
      if (!list.length) setError(`"${name}" topilmadi.`)
    } catch {
      setError('Shaharlarni olishda xatolik.')
    }
  }

  async function select(item) {
    setCity(item)
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${item.latitude}&longitude=${item.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`,
      )
      setData(await res.json())
      setError('')
    } catch {
      setError("Ob-havo ma'lumotini olishda xatolik.")
      setData(null)
    }
  }

  const isHourlyReady = data && data.hourly && data.hourly.time && data.hourly.time.length > 0
  const isDailyReady = data && data.daily && data.daily.time && data.daily.time.length > 0

  return (
    <div className="page">
      <h1>SamaWeather</h1>
      <SearchBar onSearch={search} />
      <div className="search-results">
        {cities.map((item) => (
          <SearchElement key={item.id} city={item} onSelect={select} isActive={city && city.id === item.id} />
        ))}
      </div>
      <WeatherInfo city={city} weatherData={data} error={error} />
      {isHourlyReady && (
        <div className="forecast-section">
          <h3>Soatlik prognoz</h3>
          <div className="forecast-grid">
            {data.hourly.time.slice(0, 6).map((time, i) => (
              <Hourly
                key={time}
                time={time}
                temp={data.hourly.temperature_2m && data.hourly.temperature_2m[i]}
              />
            ))}
          </div>
        </div>
      )}
      {isDailyReady && (
        <div className="forecast-section">
          <h3>Kunlik prognoz</h3>
          <div className="forecast-grid">
            {data.daily.time.slice(0, 5).map((date, i) => (
              <Daily
                key={date}
                date={date}
                max={data.daily.temperature_2m_max && data.daily.temperature_2m_max[i]}
                min={data.daily.temperature_2m_min && data.daily.temperature_2m_min[i]}
              />
            ))}
          </div>
        </div>
      )}
      <p className="footer-text">Bu sayt SamuraiX tomonidan ishlab chiqilgan</p>
    </div>
  )
}

export default Home
