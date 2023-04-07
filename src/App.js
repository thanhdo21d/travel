import React from 'react'
import './app.css'
import Home from './components/home/Home'
import Navbar from './components/navber/Navbar'
import Main from './components/main/Main';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
const App = () => {
    return (
        <div>
            {/* <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<SignUp />} />


            </Routes> */}
            <Navbar />
            <Home />
            <Main />
            <Footer />
        </div>

    )
}

export default App