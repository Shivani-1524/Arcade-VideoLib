import React from 'react'
import { NavLink } from 'react-router-dom'
import "./sidenav.css";

const Sidenav = () => {
    const activeStyle = (isActive) => (isActive ? 'sidenav-link active-link' : 'sidenav-link')

    return (
        <aside className="filters-container light-txt">
            <NavLink to="/" className={({ isActive }) => activeStyle(isActive)}>
                <i className="fa fa-solid fa-compass"></i>
                Explore
            </NavLink>
            <NavLink to="/videos/liked" className={({ isActive }) => activeStyle(isActive)}>
                <i className="fa fa-solid fa-thumbs-up"></i>
                Liked Videos</NavLink>
            <NavLink to="/videos/later" className={({ isActive }) => activeStyle(isActive)}>
                <i className="fa fa-solid fa-clock"></i>
                Watch Later</NavLink>
            <NavLink to="/videos/history" className={({ isActive }) => activeStyle(isActive)}>
                <i className="fa fa-solid fa-hourglass"></i>
                History</NavLink>
            <NavLink to="/da" className={({ isActive }) => activeStyle(isActive)}>
                <i className="fa fa-solid fa-list"></i>
                Library</NavLink>
        </aside >

    )
}

export { Sidenav }