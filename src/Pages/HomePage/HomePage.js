import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Sidenav } from "../../Components/Sidenav/Sidenav"
import "./homepage.css"
import { Navbar } from '../../Components/Navbar/Navbar'
const HomePage = () => {
    return (
        <div className="products-layout">
            <Navbar />
            <Sidenav />
            <Link to="/test1">test1</Link>
            <Link to="/test2">test2</Link>
            <Link to="/test3">test3</Link>
            <Outlet />
        </div>
    )
}

export { HomePage }