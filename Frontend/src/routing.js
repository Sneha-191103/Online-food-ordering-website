import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./component/pages/login";
import Register from "./component/pages/register";
import Sidebar from "./component/AdminAccess/Sidebar";
import UserManagement from "./component/AdminAccess/usermanagement";
import HotelView from "./component/AdminAccess/HotelView";
import AddHotels from "./component/AdminAccess/AddHotels";
import Comments from "./component/AdminAccess/comments";
import DeliveryPartner from "./component/AdminAccess/deliverypartner";
import { useUser } from "./component/Context/usercontext";
import AdminManagement from "./component/AdminAccess/adminManagement";
import Dash from "./component/AdminAccess/dash";
import LandingPage from "./component/Hotels/Landingpage";
import Privacy from "./component/pages/privacy";
import Terms from "./component/pages/terms";
import Faq from "./component/pages/faq";
import NavBar from "./component/pages/navbar";
import Hotels from "./component/Hotels/Hotels";
import Menu from "./component/Hotels/menu";
import { useAdmin } from "./component/Context/adminContext";
import Settings from "./component/pages/settings";
import { Cart } from "./component/Hotels/cart";
import MapContainer from "./component/Hotels/MapContainer";
import LocationToDistrict from "./component/AdminAccess/dashboard";
import CurrentAddress from "./component/AdminAccess/dashboard";
import Checkout from "./component/Hotels/Checkout";
import Feedback from "./component/pages/Feedback"
import Home from "./component/pages/home";
import { UserAuth } from "./component/Hotels/UserAuth";
import { AdminAuth } from "./component/AdminAccess/AdminAuth";
import Success from "./component/Hotels/success";


// const PrivateRoute = ({ children }) => {
  //   const { isUserLoggedIn } = useUser();
  //   const navigate = useNavigate();


//   if (isUserLoggedIn && window.location.pathname === "/login") {
   
  //     navigate("/dash");
//     return null;  
//   }

//   return children;
// };
export default function Routing() {
  const {isUserLoggedIn}=useUser();
  

  return (
    <>
          <Routes>
          <Route element={<AdminAuth />}>
            <Route path='sidebar' element={<Sidebar/>}>
                <Route path="dash" element={<Dash />}/>
                <Route path="adminmanagement" element={<AdminManagement />} />
               <Route path="hotelview" element={<HotelView/>}/>
               <Route path="addhotel" element={<AddHotels/>}/>
                <Route path="usermanagement" element={<UserManagement />} />
                <Route path="comments" element={<Comments />} /> 
                <Route path="menumanagement" element={<DeliveryPartner />} />
            </Route>
            </Route>
          </Routes>
    <div>
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="privacy" element={<Privacy/>}/>
        <Route path="faq" element={<Faq/>}/>
        <Route path="terms" element={<Terms/>}/>
        <Route path="feedback" element={<Feedback/>}/>
      </Routes>
    </div>

    <div>
        <Routes>
          <Route element={<UserAuth />}>
          <Route path="landing" element={<LandingPage/>}/>
          <Route path="navbar" element={<NavBar isLoggedIn={isUserLoggedIn}/>}/>
          <Route path="hotel" element={<Hotels/>}/>
          <Route path="menu/:hid" element={<Menu/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="success" element={<Success/>}/>
          <Route path="loc" element={<CurrentAddress/>}/>
          </Route>
        </Routes>
      
      
    </div>
     
    
  
     
  
    </>
  );
}