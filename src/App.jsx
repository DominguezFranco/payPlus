import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import Landing from './component/Landing/Landing'
import Footer from './component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Landing/>
      <Footer/>
    </>
  )
}

export default App
