import './App.css'
import "./index.css"
import Home from './pages/Home'
import {library} from "@fortawesome/fontawesome-svg-core"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

function App() {
  library.add(fas, far, fab)
  return <Home/>
}

export default App
