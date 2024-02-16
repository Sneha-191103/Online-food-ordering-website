import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import NavBar from '../pages/navbar';
import Footer from '../AdminAccess/footer';

export const UserAuth = () => {
    const Token = localStorage.getItem('token') !== null;
    const Role =  localStorage.getItem('Role') === "CUSTOMER";

    return (

        Token && Role ? (
        <div><NavBar/><Outlet /><Footer/> 
        </div>): <Navigate to='/login' />
    )
};