function Daily({ date, max, min , units }) {
  const showMax = max !== undefined && max !== null ? max : '-'
  const showMin = min !== undefined && min !== null ? min : '-'

  return (
    <div className="forecast-item">
      <h4>{date || '-'}</h4>
      <p>Maksimum: {showMax} {units === "imperial" ? "°F" :"°C"}</p>
      <p>Minimum: {showMin} {units === "imperial" ? "°F" : "°C"}</p>
    </div>
  )
}

export default Daily
