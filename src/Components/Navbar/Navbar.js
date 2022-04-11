import React from 'react';
import { Link } from "react-router-dom"
import NavLogo from "../../Assets/nav-logo.png"
import { useAuth } from '../../Context/auth-provider'

const Navbar = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth()
    const handleUserLogout = () => {
        localStorage.removeItem('userToken');
        setIsLoggedIn(false)
    }
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={NavLogo} alt="logo" />
            </div>
            <div className="nav-space"></div>
            <div className="nav-icon-items">
                {isLoggedIn ? <Link to='/profile'>
                    <button id="dark-bg-icon" className="btn icon-btn hide-md">
                        <i className="fa fas fa-solid fa-circle-user"></i>
                    </button>
                </Link> : <Link to='/login'>
                    <button id="dark-bg-icon" className="btn icon-btn hide-md">
                        <i className="fa fa-solid fa-user"></i>
                    </button>
                </Link>}
                {isLoggedIn && <Link to='/logout'>
                    <button onClick={handleUserLogout} id="dark-bg-icon" className="btn icon-btn hide-md">
                        <i className="fa fas fa-solid fa-arrow-right-from-bracket logout-icon"></i>
                    </button>
                </Link>}
                <button id="dark-bg-icon" className="btn icon-btn show-md">
                    <i className="fas fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
    )
}

export { Navbar }