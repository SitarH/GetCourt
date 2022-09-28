import React from 'react'
import Navigation from '../Navigation';
// import Header from '../Header';
import Footer from '../UI/Footer';
// import Header from '../UI/Header';
import Header from '../../Components/Header';
import Wrapper from '../UI/Wrapper';

function MainLayout() {
    return (
        <div style={{marginLeft:"10px", marginRight:"10px"}}>
            <Header/>
           
            <Navigation/>
           
            <Footer/>
        </div>
    )
}

export default MainLayout