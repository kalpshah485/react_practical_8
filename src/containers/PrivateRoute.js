import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute(Component) {
    const { user } = useSelector(state => state);
    if (user) {
        return Component
    }
    return <Navigate to='/signup' />
}


export default PrivateRoute