import React, { useState } from 'react';
import '../css/sidebar.css'
import {
    FaTh,
    FaBars,
    FaShoppingBag,
    FaUserTie,
    FaUsers,
    FaUserShield,
    FaUtensils,
    FaRegHandshake,
    FaMoneyCheckAlt,
    FaChartLine,
    FaComments,
    FaUser,
    FaSignOutAlt
}from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../pages/navbar';
import { useSelector } from 'react-redux';
import Footer from './footer';
import NavAdmin from './navAdmin';
import { MdFastfood, MdFoodBank, MdHotel, MdOutlineFoodBank } from 'react-icons/md';
import { SiFoodpanda } from 'react-icons/si';
import { GrHome } from 'react-icons/gr';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/sidebar/dash",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/sidebar/adminmanagement",
            name:"Admin Management",
            icon:<FaUserShield/>
        },
        {
            path:"/sidebar/usermanagement",
            name:"User Management",
            icon:<FaUsers/>
        },
        {
            path:"/sidebar/hotelview",
            name:"View Hotels",
            icon:<MdFoodBank/>
        },
        {
            path:"/sidebar/addhotel",
            name:"AddHotels",
            icon:<MdOutlineFoodBank/>
        },
        {
            path:"/sidebar/menumanagement",
            name:"Menu Management",
            icon:<MdFastfood/>
        },
        {
            path:"/sidebar/Comments",
            name:"Feedbacks",
            icon:<FaComments/>
        }
    ]
    const navigate=useNavigate();
   
    const name=localStorage.getItem('AdminEmail');
    const SubmitLogout=(e)=>{
        e.preventDefault();
       
        localStorage.clear();
        
        navigate('/login');
        
    }
    
    return (
        <>
      
      
                  
        <div className="containered">
            
           <div style={{width: isOpen ? "300px" : "50px" ,height:"100%"}} className='sidebar'>
               <div className="top_section">
            {/* <h1><FaUser/></h1> */}
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">{name}</h1>
                   <div style={{marginLeft: isOpen ? "10px" : "-15px"}} className="bars">
                       <FaBars onClick={toggle}/>
               </div>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
                   </div>
                  <br></br>
                   <br></br>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="iconed">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <br>
               </br>
               <br></br>
               <div  className="link" activeclassName="active">
                           <div className="iconed"><FaSignOutAlt/></div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text" onClick={SubmitLogout}>Logout</div>
                       </div>
               <br></br>
              
           </div>
          <main>
           
          <Outlet>
           <div className='child' >
            {children}   </div>
                
           </Outlet>
           </main>
           <Footer/>
        </div>
        </>
    );
};

export default Sidebar;