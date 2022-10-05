import React from 'react'
import Navigation from '../Navigation';
// import Header from '../Header';
// import Header from '../UI/Header';
import Header from '../../Components/Header';
import Wrapper from '../UI/Wrapper';
import Footer from '../Footer'

function MainLayout() {
    return (
        <div style={{marginLeft:"10px", marginRight:"10px"}}>
            <Header/>
           
            <Navigation/>
          
            <Footer /> 
        </div>
    )
}

export default MainLayout