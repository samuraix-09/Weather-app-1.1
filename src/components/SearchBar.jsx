function SearchBar({ onSearch }) {
  return (
    <form className="searchbar" onSubmit={(e) => (e.preventDefault(), onSearch(e.target.city.value.trim()))}>
      <input name="city" type="search" placeholder="Shahar nomini kiriting" />
      <button type="submit">Qidirish</button>
    </form>
  )
}

export default SearchBar
