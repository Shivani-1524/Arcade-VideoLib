import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidenav } from "../../Components/Sidenav/Sidenav"
import "./templatepage.css"
import { Navbar } from '../../Components/Navbar/Navbar'
const TemplatePage = () => {
    return (
        <div className="page-layout">
            <Navbar />
            <Sidenav />
            <div className="outlet-container">
                <Outlet />
            </div>
        </div>
    )
}

export { TemplatePage }