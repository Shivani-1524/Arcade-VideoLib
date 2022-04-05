import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <h1>Template Routing Common ui</h1>
            <Link to="/test1">test1</Link>
            <Link to="/test2">test2</Link>
            <Link to="/test3">test3</Link>
            <Outlet />
        </div>
    )
}

export { HomePage }