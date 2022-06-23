import React from 'react'
import NavBar from './NavBar/NavBar';
import Shop from './Shop';

function Header() {
  return (
    <div>
      <h1>header </h1>
      <Shop/>
      <NavBar />
      
    </div>
  )
}

export default Header