import React, { useState } from 'react';
import './Navba.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  //let navigate = useNavigate();

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div >
          <Link to='#' >
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav>
          <ul onClick={showSidebar}>
            <li >
              <Link to='#' >
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                   <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;