import { useAuth } from "./Context/auth-provider"
import { Navigate, useLocation, Outlet } from 'react-router-dom'

import React from 'react'

const RequiresAuth = () => {
    const location = useLocation()
    const { isLoggedIn } = useAuth()
    return isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    )
}

export { RequiresAuth }