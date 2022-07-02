import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import styled from 'styled-components';


const Nav = styled.nav`
    width: 100%;
    text-decoration: none;
    align-items: column;
    padding: 0 1.5em;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  width: 100%;
  text-decoration: none;
`;

const Ul = styled.ul`
  position:fixed;
  text-decoration: none;
  height: 100vh;
  width: 90px;
  text-align:center; 
`;

const Text = styled.text`
  text-decoration: none;
`;

const Li = styled.li`
    text-decoration: none;
    display:flex;
    flex-direction:column;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  //let navigate = useNavigate();

  return (
    <>

      <IconContext.Provider value={{ color: '#fff' }}>
        <Wrapper>
          <Link to='#' >
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Title>
            <Nav className="container">
              <Ul onClick={showSidebar} className="sidebar">
                  {SidebarData.map((item, index) => {
                    return (
                      <Li key={index} className={item.cName}>
                          <Link to={item.path}>
                            {item.icon}
                            <Text>{item.title}</Text>
                          </Link>
                      </Li>
                    );
                  })}
              </Ul>
            </Nav>
          </Title>
        </Wrapper>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;