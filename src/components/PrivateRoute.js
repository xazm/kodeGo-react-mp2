import React from "react";
import {  Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ userData, redirectPath = '/', children }) => {
    if (userData.isAuthenticated === false|| userData.isAuthenticated === 'error') {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};
export default PrivateRoute;



