import React from 'react'
import NavBar from "./NavBar"
import MainPage from './MainPage'
import Footer from './footer'


const Home = () => {
    return(
        <div className='home'>
            <NavBar />
            <MainPage />
            <Footer />
        </div>
    )
}

export default Home;