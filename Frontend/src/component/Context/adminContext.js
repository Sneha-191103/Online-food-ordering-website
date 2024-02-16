import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const UserContext = createContext();

export const useAdmin = () => {
    return useContext(UserContext);
};

export const AdminProvider = ({ children }) => {
    const [isAdminLoggedIn, setIsAdminLoggedIn] =useState(false);
   
    const login = () => {
        console.log("Called");
        setIsAdminLoggedIn(true);
    };

    const logout = () => {
        setIsAdminLoggedIn(false);
    };

    const userValue = useMemo(() => ({ isAdminLoggedIn, login, logout }), [isAdminLoggedIn]);

    return (
        <UserContext.Provider value={userValue}>
            {children}
        </UserContext.Provider>
    );
};
