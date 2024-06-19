import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      
      <div>
        <h1>FACA</h1>
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Info</li>
        </ul>
      </div>

      <div id='Buttons'>
      <button id='Login'>Login</button>
      <button id='Signup'>Signup</button>
      </div>

    </nav>
  )
}