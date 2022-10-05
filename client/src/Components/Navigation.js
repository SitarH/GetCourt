import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Components/Forms/Login';
import Register from '../Components/Forms/Register';
import Shop from '../Pages/Shop';
import Profile from '../Pages/Profile';
import Location from './Location';
import Settings from '../Pages/Settings';
import CourtList from '../Pages/CourtList';
import Court from '../Pages/Court'
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import Cart from '../Pages/Cart';
import EditProfile from './Forms/EditProfile';
import UserPayments from '../Pages/UserPayments';
import Admin from '../Components/Admin/Admin'
import Contact from '../Pages/Contact';
import History from '../Pages/History';
import Friends from '../Pages/Friends';

function Navigation() {

  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/location" element={<Location />} />
      <Route path="/courts" element={<CourtList />} />
      <Route path="/court" element={<Court />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/History" element={<History />} />
      <Route path="/UserPayments" element={<UserPayments />} />
      <Route path="/profile/Yaara1/edit" element={<EditProfile/>} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default Navigation