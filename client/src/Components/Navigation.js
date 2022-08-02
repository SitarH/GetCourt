import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Home from '../Pages/Home';
import Welcome from '../Pages/Welcome'
import Login from '../Components/Forms/Login';
import Register from '../Components/Forms/Register';
import Shop from '../Pages/Shop';
import Profile from '../Pages/Profile';
import Location from './Location';
import CourtList from '../Pages/CourtList';
import ManageProduct from '../Pages/ManageProduct'
import Court from '../Pages/Court'
import Admin from './Admin/Admin';
import ErrorPage from '../Pages/ErrorPage';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import Cart from '../Pages/Cart';


function Navigation() {
  //const { token } = useContext(UserContext);

  return (

    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/location" element={<Location />} />
      <Route path="/courts" element={<CourtList />} />
      <Route path="/court" element={<Court />} />
      <Route path="/profile/manageProduct" element={<ManageProduct />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default Navigation