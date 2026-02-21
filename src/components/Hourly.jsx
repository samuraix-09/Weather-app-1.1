import { faClock, faTimeline, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { faTemperature1 } from "@fortawesome/free-solid-svg-icons/faTemperature1"
import { faTimesSquare } from "@fortawesome/free-solid-svg-icons/faTimesSquare"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Hourly({ time, temp , units }) {
  const showTime = time ? time.slice(11, 16) : '-'
  const showTemp = temp !== undefined && temp !== null ? temp : '-'

  return (
    <div className="forecast-item">
      <h4>
        <FontAwesomeIcon icon={faClock} color="greenyellow"/>
        {showTime}
        </h4>
      <p>
        <FontAwesomeIcon icon={faTemperature1} color="greenyellow"/>
        Harorat: {showTemp} {units === "imperial" ? "°F" : "°C"}
        </p>
    </div>
  )
}

export default Hourly
