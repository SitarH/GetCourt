import React from 'react'
import NavBar from './NavBar/NavBar';
import { GoThreeBars } from "react-icons/go";
import { useState } from 'react';
import HeaderUI from './UI/HeaderUI';


function Header() {

  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <HeaderUI>
        <GoThreeBars togglenavbar={toggleNav} setToggleNav={setToggleNav} onClick={()=>setToggleNav(!toggleNav)}/>
       
        {toggleNav && <NavBar /> }
        
      </HeaderUI>
    </>
  )
}

export default Header;