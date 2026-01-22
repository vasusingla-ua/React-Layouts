import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LayoutNavbar from './components/LayoutNavbar/LayoutNavbar'
import DataTable from './layouts/DataTable/DataTable'
import Homepage from './pages/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homepage/>
    </>
  )
}

export default App
