import { faClock, faTemperature0, faTemperature4 } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Daily({ date, max, min , units }) {
  const showMax = max !== undefined && max !== null ? max : '-'
  const showMin = min !== undefined && min !== null ? min : '-'

  return (
    <div className="forecast-item">
      <h4>
        <FontAwesomeIcon icon={faClock} color="greenyellow"/>
        {date || '-'}
        </h4>
      <p>
        <FontAwesomeIcon icon={faTemperature4} color="greenyellow"/>
        Maksimum: {showMax} {units === "imperial" ? "°F" :"°C"}
        </p>
      <p>
        <FontAwesomeIcon icon={faTemperature0} color="greenyellow"/>
        Minimum: {showMin} {units === "imperial" ? "°F" : "°C"}
        </p>
    </div>
  )
}

export default Daily
