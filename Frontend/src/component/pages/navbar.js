import React, { useEffect, useRef, useState } from "react";
import '../css/nav.css'
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userslice";
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { useUser } from "../Context/usercontext";
import '../happytummy.png'
import '../logobg.png'
export default function NavBar({isLoggedIn}){
    const dispatch=useDispatch();
    const navigate=useNavigate();
   
    const {logout:userLogout}=useUser();
    const SubmitLogout=(e)=>{
        e.preventDefault();
        localStorage.clear();
        navigate('/login');
        
    }
   

   
    return(
        <div className="navbar">
            <div className="overlay-head">
            HAPPY TUMMY
               
                </div>
            <div className="log" activeclassName="actives">
       <Link to='/landing' className="linked" style={{color:'black'}}><div className="prof">HOME
            </div></Link> 
        
            <Link to='/cart'className="linked" style={{color:'black'}}><div className="prof">CART
            </div></Link>
            <Link to='/profile'className="linked" style={{color:'black'}}><div className="prof">PROFILE
            </div></Link>
       
             <div className="prof">
             {{isLoggedIn} ? (
            <div onClick={SubmitLogout}>LOGOUT</div>
          ) : (
            <div onClick={SubmitLogout}>LOGOUT</div>
          )}
        </div>

        </div>
          </div>
              
            
       
    )
}