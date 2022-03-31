import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function PublicRoute(Component) {
    const { user } = useSelector(state => state);
    if (user) {
        return <Navigate to='/home' />
    }
    return Component
}

export default PublicRoute