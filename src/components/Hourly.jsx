function Hourly({ time, temp }) {
  const showTime = time ? time.slice(11, 16) : '-'
  const showTemp = temp !== undefined && temp !== null ? temp : '-'

  return (
    <div className="forecast-item">
      <h4>{showTime}</h4>
      <p>Harorat: {showTemp} C</p>
    </div>
  )
}

export default Hourly
