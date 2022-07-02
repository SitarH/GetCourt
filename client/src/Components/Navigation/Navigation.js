import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useContext, Switch } from 'react';
import Home from '../../Pages/Home';
import Login from '../../Pages/Login';
import Register from '../../Pages/Register';
import Shop from '../../Pages/Shop';
import Profile from '../../Pages/Profile';
import Location from '../../Pages/Location';
import Court from '../../Pages/Courts';
import ManageProduct from '../../Pages/ManageProduct';
import Friends from '../../Pages/Friends';
import Payments from '../../Pages/Payments';
import History from '../../Pages/History';
import Settings from '../../Pages/Settings';
import Contact from '../../Pages/Contact';
import Admin from '../Admin/Admin';


function Navigation() {
  //const { token } = useContext(UserContext);

  return (
    <>
      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/location" element={<Location />} />
        <Route path="/court" element={<Court />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/profile/manageProduct" element={<ManageProduct />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </>
  )
}

export default Navigation