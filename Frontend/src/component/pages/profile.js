import React from "react";

import { useRef } from "react";
import { PiUserLight } from 'react-icons/pi';
import { PiPaintBrushLight } from 'react-icons/pi';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { GoAlert } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import Footer from "../AdminAccess/footer";
import NavBar from "./navbar";

const UserProfile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));
    const [fileUrl, setFileUrl] = useState('');
    const userprofile = useRef(null);
  const scrollToUser = () => {
    if (userprofile.current) {
        userprofile.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const orders = useRef(null);
  const scrollToOrders = () => {
    if (orders.current) {
        orders.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const artcollections = useRef(null);
  const scrollToArtCollections = () => {
    if (artcollections.current) {
        artcollections.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const id = localStorage.getItem('xuserId')
    const name = localStorage.getItem('xuserName')
    const phone = localStorage.getItem('xuserPhone')
    const email = localStorage.getItem('xuserEmail')
    const address = localStorage.getItem('xuserAddress')
    const userimg=null

    const navigate = useNavigate();
    const logOutHandler = () => {
        localStorage.clear();
        window.location.reload(false);
        navigate('/login')
    }
    const handleLogin = () => {
        navigate('/login')
    }
    const handleEdit = (id) => {
        navigate(`/profile/edit/${id}`);
      }
    return(
        <>
        <div style={{position: "absolute"}}>
           
            <br/>
            
            <div>
                <div style={{marginTop: "70px"}}>
            {/* <button onClick={logOutHandler} className="profile-logout">Logout</button> */}
            <div className="profile-text1">User Profile</div>
            <div style={{display: "inline-flex", marginLeft: "645px", marginTop: "20px"}}><button onClick={scrollToUser} className="profile-btn"><PiUserLight size={40}/></button><button onClick={scrollToOrders} className="profile-btn"><LiaClipboardListSolid size={40}/></button><button onClick={scrollToArtCollections} className="profile-btn"><PiPaintBrushLight size={40}/></button><button onClick={logOutHandler} className="profile-btn"><AiOutlineLogout size={40}/></button></div>
            <div ref={userprofile} style={{marginLeft: "400px"}}>
                <br/><br/><br/>
                <div className="profile-text2">Profile Details</div>
            <div style={{display: "inline-flex", marginTop: "35px"}}>
                <div>
            {/* <Stack direction="row" spacing={2}><Avatar alt="" src={userimg} sx={{ width: 120, height: 120 }} /></Stack> */}
                </div>
            <div className="profile-text4">Welcome
            <div className="profile-text3">{name}</div>
            <div style={{marginTop: "40px", display: "inline-flex"}}>
                <div className="profile-box">
            <div className="profile-text5">Email Address</div><br/>
           <div className="profile-text5">Phone Number</div><br/>
           <div className="profile-text5">Address</div><br/>
                </div>
                <div className="profile-box">
                <div className="profile-text6">{email}</div><br/>
                <div className="profile-text6">{phone}</div><br/>
                <div className="profile-text6">{address}</div><br/>
                </div>
            </div><br/>
            <button className="profile-edit" onClick={() => handleEdit(id)}>Edit</button>
            </div>
            </div>
            </div>
            </div>
            </div>
           
            
            <Footer />
        </div>
        </>
    )
}
export default UserProfile;