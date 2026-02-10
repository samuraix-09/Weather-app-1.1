import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DataContext from './DataContext'

function App() {
  const router = createBrowserRouter([
    {path:"/",
      element:<Home/>
    }
  ])
  return <DataContext>
    <RouterProvider router={router}/>
  </DataContext>
}

export default App
