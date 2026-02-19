function Daily({ date, max, min }) {
  const showMax = max !== undefined && max !== null ? max : '-'
  const showMin = min !== undefined && min !== null ? min : '-'

  return (
    <div className="forecast-item">
      <h4>{date || '-'}</h4>
      <p>Maksimum: {showMax} C</p>
      <p>Minimum: {showMin} C</p>
    </div>
  )
}

export default Daily
