import React from 'react'
import './navbar.css'


const NavBar = () => {
  return (
    <nav className='nav-container'>
        <img className="logo" src="/PayPlus.jpg" width={100} height={100}></img>
        <h1>PayPlus</h1>
        <div className='btn-container'>
          <button className='btn-login'>Log In</button>
          <button className='btn-register'>Register</button>
        </div>
        
    </nav>
  )
}

export default NavBar
