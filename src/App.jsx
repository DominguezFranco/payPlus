import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import NavBar from './component/NavBar/NavBar'
import Landing from './component/Landing/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Landing/>
    </>
  )
}

export default App
