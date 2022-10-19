import React from 'react'
import NavBar from './NavBar/NavBar';
import { GoThreeBars } from "react-icons/go";
import { useState } from 'react';
import HeaderUI from './UI/HeaderUI';
import Logo from '../Asset/Images/logo122.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

  const navigate = useNavigate();

  const isLogged = useSelector(state => state.auth.isLoggedIn);

  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <HeaderUI>
        {
          isLogged &&
          <GoThreeBars
          style={{cursor: 'pointer'}}
            onClick={() => setToggleNav(!toggleNav)} />
        }

        {toggleNav &&
          <NavBar togglenavbar={toggleNav}
            setToggleNav={setToggleNav} />
        }
        
        <img src={Logo}
          style={{ height: '80px', cursor: 'pointer' }}
          onClick={() => navigate("/home")}></img>

      </HeaderUI>
    </>
  )
}

export default Header;