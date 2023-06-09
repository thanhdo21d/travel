import React, { useState } from 'react'
import './Navbar.css'
import { FaPlaneDeparture } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const shownav = () => {
        setActive('navBar activeNavBar')
    }
    const removeNav = () => {
        setActive('navBar ')
    }
    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv'>
                    <a href='https://www.facebook.com/DSno01' className='logo flex'>
                        <h1> <FaPlaneDeparture className="icon" /> Travel.</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className='navLists flex'>
                        <li className='navItem'>
                            <a href='https://www.facebook.com/DSno01' className='navLink'>Home</a>
                        </li>
                        <li className='navItem'>
                            <a href='https://www.facebook.com/DSno01' className='navLink'>Packages</a>
                        </li>
                        <li className='navItem'>
                            <a href='https://www.facebook.com/DSno01' className='navLink'>Shop</a>
                        </li>
                        <li className='navItem'>
                            <a href='https://www.facebook.com/DSno01' className='navLink'>Abouts</a>
                        </li>
                        <li className='navItem'>
                            <a href='https://www.facebook.com/DSno01' className='navLink'>Pages</a>
                        </li>
                        <li className='navItem'>
                            <a href='https://www.facebook.com/DSno01' className='navLink'>News</a>
                        </li>
                        <li className='navItem'>
                            <a href='https://www.facebook.com/DSno01' className='navLink'>Contacts</a>
                        </li>
                        <button className='btn'>
                            <a href='https://www.facebook.com/DSno01'>
                                BOOK NOW
                            </a>
                        </button>
                    </ul>
                    <div onClick={removeNav} className='closeNavBar'>
                        <AiFillCloseCircle className='icon' />
                    </div>
                </div>
                <div onClick={shownav} className='toggle'>
                    <TbGridDots className='icon' />
                </div>
            </header>

        </section>
    )
}

export default Navbar