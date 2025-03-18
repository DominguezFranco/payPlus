import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './component/NavBar/NavBar'
import Landing from './component/Landing/Landing'
import Footer from './component/Footer/Footer'
import Register from './component/Register/Register'
import Wallet from './component/Wallet/Wallet'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Landing/>
      <Footer/>

      <Routes>
        <Route path='/wallet' element={<Wallet/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
