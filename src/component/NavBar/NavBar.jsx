import React, { useState } from 'react'
import './navbar.css'
import Login from '../Login/Login'

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleClick = () => {
    setShowLogin(!showLogin);
  }

  const handleClose = () => {
    setShowLogin(false);
  }

  return (
    <nav className='nav-container'>
        <img className="logo" src="/PayPlus.jpg" width={100} height={100}></img>
        <h1>PayPlus</h1>
        <div className='btn-container'>
          <button className='btn-login' onClick={handleClick}>Log In</button>
          <button className='btn-register'>Register</button>
        </div>
        {showLogin && <Login onClose={handleClose} />}
    </nav>
  )
}

export default NavBar
