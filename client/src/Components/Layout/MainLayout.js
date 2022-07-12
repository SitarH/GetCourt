import React from 'react'
import Navigation from '../Navigation';
// import Header from '../Header';
import Footer from '../Footer';
// import Header from '../UI/Header';
import Header from '../../Components/Header';

function MainLayout() {
    return (
        <div>
            <Header/>
            <Navigation/>
            <Footer/>
        </div>
    )
}

export default MainLayout