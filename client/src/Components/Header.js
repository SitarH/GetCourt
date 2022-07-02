import React from 'react'
import NavBar from './NavBar/NavBar';
import { GoThreeBars } from "react-icons/go";
import { useState } from 'react';


function Header() {

  const [toggleNav, SetToggleNav] = useState(false);

  return (
    <>
      <p>
        <GoThreeBars onClick={()=>SetToggleNav(!toggleNav)}/>
        Header
        {toggleNav && <NavBar /> }
        
      </p>
    </>
  )
}

export default Header