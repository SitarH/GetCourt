import React from 'react'
import Navigation from '../Navigation';
import Header from '../Header';
import Footer from '../Footer';

function MainLayout() {
    return (
        <div>
            <Header />
                <Navigation />
            <Footer/>
        </div>
    )
}

export default MainLayout