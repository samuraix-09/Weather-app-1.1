function SearchElement({ city, onSelect, isActive }) {
  return (
    <button type="button" className={`search-element ${isActive ? 'active' : ''}`} onClick={() => onSelect(city)}>
      <p className="city-name">{city.name}</p>
      <p>
        {city.country}
        {city.admin1 ? `, ${city.admin1}` : ''}
      </p>
      <p>Vaqt zonasi: {city.timezone}</p>
    </button>
  )
}

export default SearchElement
