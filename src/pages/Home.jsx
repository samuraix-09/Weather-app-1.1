import { useContext, useEffect, useState } from "react"
import DataContext from "../DataContext"
import SearchBar from "../components/SearchBar"
import SearchElement from "../components/SearchElements"
import WeatherInfo from "../components/WeatherInfo"

function Home() {
  const { sValue } = useContext(DataContext)

  const [searchElements, setSearchElements] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [loadingCities, setLoadingCities] = useState(false)
  const [loadingWeather, setLoadingWeather] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!sValue) {
      setSearchElements([])
      setSelectedCity(null)
      setWeatherData(null)
      setError("")
      return
    }

    async function getCityData() {
      setLoadingCities(true)
      setError("")

      try {
        const res = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            sValue
          )}&count=5&language=uz&format=json`
        )
        const data = await res.json()
        const results = data.results || []

        if (results.length === 0) {
          setSearchElements([])
          setSelectedCity(null)
          setWeatherData(null)
          setError(`"${sValue}" nomli shahar topilmadi.`)
          return
        }

        setSearchElements(results)
        setSelectedCity(results[0])
      } catch {
        setError("Shaharlarni olishda xatolik yuz berdi.")
      } finally {
        setLoadingCities(false)
      }
    }

    getCityData()
  }, [sValue])

  useEffect(() => {
    if (!selectedCity) {
      return
    }

    async function getWeatherData() {
      setLoadingWeather(true)
      setError("")

      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=auto`
        )
        const data = await res.json()
        setWeatherData(data)
      } catch {
        setError("Ob-havo ma'lumotini olishda xatolik yuz berdi.")
      } finally {
        setLoadingWeather(false)
      }
    }

    getWeatherData()
  }, [selectedCity])

  return (
    <div className="page">
      <h1>SamaWeather</h1>
      <SearchBar />

      {loadingCities && <p>Shaharlar qidirilmoqda...</p>}

      <div className="search-results">
        {searchElements.map((city) => (
          <SearchElement
            key={city.id}
            city={city}
            onSelect={setSelectedCity}
            isActive={selectedCity?.id === city.id}
          />
        ))}
      </div>

      <WeatherInfo
        city={selectedCity}
        weatherData={weatherData}
        loading={loadingWeather}
        error={error}
      />

      <p className="footer-text">Bu sayt SamuraiX tomonidan ishlab chiqilgan (c)</p>
    </div>
  )
}

export default Home
