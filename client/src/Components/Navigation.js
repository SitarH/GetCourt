import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Home from '../Pages/Home';
import Login from '../Components/Forms/Login';
import Register from '../Components/Forms/Register';
import Shop from '../Pages/Shop';
import Profile from '../Pages/Profile';
import Location from '../Pages/Location';
import Court from '../Pages/Court';
import ManageProduct from '../Pages/ManageProduct'
import Admin from './Admin/Admin';
import ErrorPage from '../Pages/ErrorPage';

function Navigation() {
  //const { token } = useContext(UserContext);

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/location" element={<Location />} />
      <Route path="/court" element={<Court />} />
      <Route path="/profile/manageProduct" element={<ManageProduct />} />
    </Routes>
  )
}

export default Navigation