import React, { useEffect, useState } from "react"; 

import Lottie from 'react-lottie';
import animationData from '../lottie/admin3.json';
import { Link, useNavigate } from "react-router-dom";  
import { FaEnvelope, FaPhoneAlt, FaUnlock, FaUserTie } from 'react-icons/fa'
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

export default function AdminManagement()
{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
   
    
   
    
    return(
        <div style={{padding:'20px 20px 20px 20px'}}>
      <div className='headings'>ADMIN MANAGEMENT</div>
        <div className="formbg" style={{padding:'20px 20px 20px 20px'}}>
            <div style={{backgroundColor:'#f0f0f0' , padding:'90px 30px 90px 30px'}}>
          {/* <div style={{fontSize:'25px'}}>Admin:<b>{user.username}</b></div>
           <div>Email:<b>{admin.email}</b></div>
           <div>Contact Number:<b>{admin.contactNumber}</b></div> */}
            </div>
            <div className="lottie">
      <Lottie 
	    options={defaultOptions}
        height={500}
        width={490}
        />
    </div>
      
        </div>
        </div>
    )
}