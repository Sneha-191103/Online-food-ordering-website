import React, { useEffect, useState } from 'react';
import '../css/deliverypartner.css'
import '../css/management.css'
import { FaEdit, FaEnvelope, FaLocationArrow, FaPhoneAlt, FaSearchLocation, FaUnlock, FaUserAlt, FaUserTie } from 'react-icons/fa';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import animationData from '../lottie/hotel.json';
import { GrImage, GrLocation, GrStar } from 'react-icons/gr';
import {MdFoodBank} from 'react-icons/md';
import {LuContact} from 'react-icons/lu';
import {SiMaildotru} from 'react-icons/si';
import { addHotels, getHotels } from '../Service/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AddHotels() {
    const [error, setError] = useState(""); // State for error message
      const [successMessage, setSuccessMessage] = useState(""); 
      const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        };
        const navigate = useNavigate();
     
      const [hotel,setHotel]=useState({
          hotelName:null,
          rating:0,
          location:null,
          hotelImg:null
      });
      const handlechange=(e)=>{
          setHotel({
              ...hotel,[e.target.name]:e.target.value
          });
      }
      const SubmitLogin=async(e)=>{
          e.preventDefault();
          try{
          const res = await addHotels(hotel);
          if (res.data === "Hotel added successfully" && res.status==200) {
            toast.success('Hotel added successfully!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
           
              setTimeout(() => {
                  navigate('/sidebar/merchantmanagement');
              }, 1500);
  
          } 
           else if (res.data==="Sommething went wrong!" && res.status==="400") {
            toast.error('Something went wrong!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
           
          }
          else{
            toast.error('Add Fields!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        
          }}
          catch(exception){
            toast.error('Add Fields!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

          }
        }
  
     
      
      return(
          <div style={{padding:'20px 20px 20px 20px'}}>
    <ToastContainer/>
             <div className="headings">ADD HOTELS</div>
          <div className="formbg">
              <div>
            
              <form className="form_mains" onSubmit={(e)=>SubmitLogin(e)}>
                  <div className="inputContainerd">
                  <MdFoodBank style={{fontSize:'35px'}}/>
                  <input type="text"  placeholder="Hotel Name" name="hotelName" value={hotel.hotelName} onChange={handlechange} className="inputField" required></input>
                  </div>
                  <div className="inputContainerd">
                  <GrLocation style={{fontSize:'35px'}}/>
                  <input type="text"  placeholder="Hotel Location" name="location" value={hotel.location} onChange={handlechange} className="inputField" required></input>
                  </div>
                  <div className="inputContainerd">
                  <GrStar style={{fontSize:'35px'}}/>
                  <input type="number"  placeholder="Hotel Rating" name="rating" value={hotel.rating} onChange={handlechange} className="inputField" required></input>
                  </div>
                  <div className="inputContainerd">
                  <GrImage style={{fontSize:'25px'}}/>
                  <input type="text"  placeholder="Hotel Image Url" name="hotelImg" value={hotel.hotelImg} onChange={handlechange} className="inputField" required></input>
                  </div>
                  
              
                  <div>
                      <button id="button" type="submit" style={{width:'120px'}}>Add</button>
                  </div>
                  <br></br>
                
                 <br></br>
                 
                  
              </form>
              </div>
              <div className="lottie">
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
          />
      </div>
          </div>
          </div>
      );
  }