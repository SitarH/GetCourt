import React from 'react'
import NavBar from './NavBar/NavBar';
import { GoThreeBars } from "react-icons/go";
import { useState } from 'react';
import HeaderUI from './UI/HeaderUI';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import Logo from '../Asset/Images/logo2.png'


function Header() {

  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <HeaderUI>
        
        <GoThreeBars onClick={() => setToggleNav(!toggleNav)}/>

        {toggleNav && <NavBar togglenavbar={toggleNav} setToggleNav={setToggleNav} />}
        {/* <img src={Logo}></img> */}
        <div className="icons">
        <FaHeart />
        <FaShoppingCart />
        </div>

      </HeaderUI>
    </>
  )
}

export default Header;