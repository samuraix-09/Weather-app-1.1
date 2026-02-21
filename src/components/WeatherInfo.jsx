import { 
  faSun,
  faCloudSun,
  faCloud,
  faSmog,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faCloudBolt,
  faWater,
  faWind,
  faTemperatureHigh,
  faTemperatureLow
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const weatherConfig = {
  0: { 
    label: "Ochiq osmon", 
    icon: faSun, 
    color: "#fbbf24",
    bg: "linear-gradient(145deg, #0e2b3b, #1b4a5a)"
  },
  1: { 
    label: "Asosan ochiq", 
    icon: faCloudSun, 
    color: "#fbbf24",
    bg: "linear-gradient(145deg, #0e2b3b, #1b4a5a)"
  },
  2: { 
    label: "Qisman bulutli", 
    icon: faCloudSun, 
    color: "#94a3b8",
    bg: "linear-gradient(145deg, #1e293b, #2d3a4a)"
  },
  3: { 
    label: "Bulutli", 
    icon: faCloud, 
    color: "#64748b",
    bg: "linear-gradient(145deg, #1e293b, #2d3748)"
  },
  45: { 
    label: "Tuman", 
    icon: faSmog, 
    color: "#94a3b8",
    bg: "linear-gradient(145deg, #2d3748, #3a4a5a)"
  },
  48: { 
    label: "Qirovli tuman", 
    icon: faSmog, 
    color: "#cbd5e1",
    bg: "linear-gradient(145deg, #2d3748, #3a4a5a)"
  },
  51: { 
    label: "Yengil maydalab yomg'ir", 
    icon: faCloudRain, 
    color: "#60a5fa",
    bg: "linear-gradient(145deg, #1e3a5f, #1e4a6f)"
  },
  53: { 
    label: "O'rtacha maydalab yomg'ir", 
    icon: faCloudRain, 
    color: "#3b82f6",
    bg: "linear-gradient(145deg, #1e3a5f, #1e4a6f)"
  },
  55: { 
    label: "Qalin maydalab yomg'ir", 
    icon: faCloudRain, 
    color: "#2563eb",
    bg: "linear-gradient(145deg, #0e2a4a, #1e3a6a)"
  },
  61: { 
    label: "Yengil yomg'ir", 
    icon: faCloudRain, 
    color: "#38bdf8",
    bg: "linear-gradient(145deg, #0e2a4a, #1e3a6a)"
  },
  63: { 
    label: "O'rtacha yomg'ir", 
    icon: faCloudRain, 
    color: "#0284c7",
    bg: "linear-gradient(145deg, #0e2a4a, #1e3a6a)"
  },
  65: { 
    label: "Kuchli yomg'ir", 
    icon: faCloudShowersHeavy, 
    color: "#0369a1",
    bg: "linear-gradient(145deg, #0a1a3a, #0e2a5a)"
  },
  71: { 
    label: "Yengil qor", 
    icon: faSnowflake, 
    color: "#e2e8f0",
    bg: "linear-gradient(145deg, #2d3a4a, #3d4a5a)"
  },
  73: { 
    label: "O'rtacha qor", 
    icon: faSnowflake, 
    color: "#f1f5f9",
    bg: "linear-gradient(145deg, #2d3a4a, #3d4a5a)"
  },
  75: { 
    label: "Kuchli qor", 
    icon: faSnowflake, 
    color: "#ffffff",
    bg: "linear-gradient(145deg, #1e2a3a, #2d3a4a)"
  },
  80: { 
    label: "Qisqa yomg'irlar", 
    icon: faCloudRain, 
    color: "#38bdf8",
    bg: "linear-gradient(145deg, #1e3a5f, #1e4a6f)"
  },
  95: { 
    label: "Momaqaldiroq", 
    icon: faCloudBolt, 
    color: "#f59e0b",
    bg: "linear-gradient(145deg, #1a1e3a, #2a1e4a)"
  },
}

const defaultWeather = {
  label: "Noma'lum ob-havo",
  icon: faCloud,
  color: "#64748b",
  bg: "linear-gradient(145deg, #1e293b, #2d3748)"
}

function WeatherInfo({ city, weatherData, error, units }) {
  if (error) {
    return (
      <div className="weather-card error">
        <div className="error-content">
          <FontAwesomeIcon icon={faCloudBolt} size="3x" color="#ef4444" />
          <p>{error}</p>
        </div>
      </div>
    )
  }
  
  if (!city || !weatherData || !weatherData.current) {
    return (
      <div className="weather-card empty">
        <div className="empty-content">
          <FontAwesomeIcon icon={faCloud} size="3x" color="#64748b" />
          <p>Shahar tanlang.</p>
        </div>
      </div>
    )
  }

  const c = weatherData.current
  const weather = weatherConfig[c.weather_code] || defaultWeather

  return (
    <div className="weather-card" style={{ background: weather.bg }}>
      <div className="weather-header">
        <div className="weather-title">
          <h3>
            {city.name}, {city.country}
          </h3>
          <p className="weather-condition">
            {weather.label}
          </p>
        </div>
        <div className="weather-icon-large">
          <FontAwesomeIcon 
            icon={weather.icon} 
            size="4x" 
            color={weather.color}
            style={{
              filter: `drop-shadow(0 0 20px ${weather.color})`,
              animation: 'weatherIconFloat 3s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      <div className="weather-temp-section">
        <FontAwesomeIcon icon={faTemperatureHigh} color={weather.color} />
        <span className="weather-temp">
          {c.temperature_2m}°{units === 'imperial' ? 'F' : 'C'}
        </span>
      </div>

      <div className="weather-details-grid">
        <div className="detail-card">
          <div className="detail-icon">
            <FontAwesomeIcon icon={faWater} color="#60a5fa" />
          </div>
          <div className="detail-info">
            <span className="detail-label">Namlik</span>
            <span className="detail-value">{c.relative_humidity_2m}%</span>
          </div>
        </div>

        <div className="detail-card">
          <div className="detail-icon">
            <FontAwesomeIcon icon={faWind} color="#94a3b8" />
          </div>
          <div className="detail-info">
            <span className="detail-label">Shamol</span>
            <span className="detail-value">
              {c.wind_speed_10m} {units === 'imperial' ? 'mph' : 'km/h'}
            </span>
          </div>
        </div>
      </div>

      <div className="weather-footer">
        <span className="system-tag">#WEATHER_DATA</span>
        <span className="system-time">
          {new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  )
}

export default WeatherInfo