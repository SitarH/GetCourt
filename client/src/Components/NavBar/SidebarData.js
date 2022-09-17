import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { MdPayment } from "react-icons/md";
import { CgProfile } from 'react-icons/cg';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/Profile',
    icon: <CgProfile/>
  },
  {
    title: 'Payments',
    path: '/UserPayments',
    icon: <MdPayment />,
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
    path: '/Contact',
    icon: <AiIcons.AiFillContacts />,

  },
  {
    title: 'Shop',
    path: '/Shop',
    icon: <AiIcons.AiFillShop />,
    
  }

];