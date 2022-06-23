import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/Profile',
    icon: <FaIcons.FaUserAlt />,

  },
  {
    title: 'Payments',
    path: '/Payments',
    icon: <FaIcons.FaRegCreditCard />,

  },
  {
    title: 'History',
    path: '/History',
    icon: <FaIcons.FaHistory />,

  },
  {
    title: 'Friends',
    path: '/Friends',
    icon: <FaIcons.FaUserFriends />,

  },
  {
    title: 'Contact',
    path: '../Contact',
    icon: <AiIcons.AiFillContacts />,

  },
  {
    title: 'Settings',
    path: '../Settings',
    icon: <AiIcons.AiFillSetting />,
    
  }
];