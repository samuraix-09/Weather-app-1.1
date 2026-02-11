import { useState } from 'react'
import './App.css'
import DataContext from './DataContext'
import Home from './pages/Home'

function App() {
  const [sValue, setSValue] = useState('')

  return (
    <DataContext.Provider value={{ sValue, setSValue }}>
      <Home />
    </DataContext.Provider>
  )
}

export default App
