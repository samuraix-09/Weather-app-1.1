import { useContext, useState } from 'react'
import DataContext from '../DataContext'

function SearchBar() {
  const { setSValue } = useContext(DataContext)
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setSValue(text.trim())
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Shahar nomini kiriting"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Qidirish</button>
    </form>
  )
}

export default SearchBar
