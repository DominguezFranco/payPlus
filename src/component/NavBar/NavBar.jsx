import React, { useState } from 'react'
import './navbar.css'
import Login from '../LogIn/LogIn'
import Register from '../Register/Register'

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClick = () => {
    setShowLogin(!showLogin);
  }

  const handleClose = () => {
    setShowLogin(false);
  }

  const handleClickRegister = () => {
    setShowRegister(!showRegister);
  }

  const handleCloseRegister = () => {
    setShowRegister(false);
  }

  return (
    <nav className='nav-container'>
        <img className="logo" src="/PayPlus.jpg" width={100} height={100}></img>
        <h1>PayPlus</h1>
        <div className='btn-container'>
          <button className='btn-login' onClick={handleClick}>Log In</button>
          <button className='btn-register' onClick={handleClickRegister}>Register</button>
        </div>
        {showLogin && <Login onClose={handleClose} />}
        {showRegister && <Register onClose={handleCloseRegister} />}
    </nav>
  )
}

export default NavBar
