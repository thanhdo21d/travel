import React from 'react'
import './app.css'
import Home from './components/home/Home'
import Navbar from './components/navber/Navbar'
import Main from './components/main/Main';
import Footer from './components/Footer/Footer';
const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Main />
            <Footer />
        </div>
    )
}

export default App