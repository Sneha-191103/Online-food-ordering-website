import React, { useEffect, useState } from 'react';
import '../css/deliverypartner.css'
import '../css/management.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaEnvelope, FaLocationArrow, FaPhoneAlt, FaSearchLocation, FaUnlock, FaUserAlt, FaUserTie } from 'react-icons/fa';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import animationData from '../lottie/driver.json';
import { GrImage, GrLocation, GrMoney, GrNotes, GrStar } from 'react-icons/gr';
import {MdFoodBank, MdOutlineAdd, MdOutlineEdit} from 'react-icons/md';
import {LuContact} from 'react-icons/lu';
import {SiMaildotru} from 'react-icons/si';
import { addHotels, addMenu, editHotel, getHotelById, getHotels } from '../Service/Api';


export default function DeliveryPartner(){
    const [isEditing, setIsEditing] = useState(false);
    const [hid,setHid]=useState('');
    const switchToHotelEdit = (hid) => {
        setHid(hid);
        setIsEditing(true);
    };
    console.log(hid);
  
    const switchToHotelView = () => {
      setIsEditing(false);
    };
    return(
        <div>
        {isEditing ? (
             <HotelEdit switchToHotelView={switchToHotelView} hid={hid} />
          ) : (
            <HotelViewing switchToHotelEdit={switchToHotelEdit} />
          )}
         </div>
    )
}
function HotelViewing({switchToHotelEdit,hid}) {
   
    const [hotelData,setHotelData]=useState([]);
    const fetchHotel=async()=>{
      try{
      const res=await getHotels();
      console.log(res.data);
      setHotelData(res.data);
      }
      catch{
        
      }
    }
  useEffect(()=>{
    fetchHotel();
  },[])

 
    return (
    <div style={{padding:'20px 20px 20px 20px'}}>
       <div className="headings">HOTEL AND MENUS</div>
      <div>
      <table>
          <thead>
            <tr>
              <th>Hotel id</th>
              <th>Hotel Name</th>
              <th>Hotel Location</th>
              <th>Hotel Ratings</th>
              <th>Menu</th>
            </tr>
          </thead>
          <tbody>
            {hotelData.map((hotel, index) => (
              <tr key={index}>
                 
                  <td><MdOutlineAdd onClick={() => switchToHotelEdit(hotel.hid)}/></td>
                  <td><b>{hotel.hotelName}</b></td>
                  <td><b>{hotel.location}</b></td>
                  <td><b>{hotel.rating}</b></td>
                  {hotel.menus.map((menu,index)=>(
                    <tr key={index}>
                         <td>{menu.foodName}</td>
                        <td>{menu.foodPrice}</td>
                        <td>{menu.foodDesc}</td>
                    </tr>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
  }
 function HotelEdit({switchToHotelView,hid}){
    const navigate = useNavigate();
   
    const [menu,setMenu]=useState({
        hid:hid,
       foodName:'',
       foodPrice:'',
       foodImage:'',
       foodDesc:'',
       foodQuantity:1000
    });



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
     
    const handlechange=(e)=>{
        setMenu({
            ...menu,[e.target.name]:e.target.value
        });
    }
    const SubmitLogin=async(e)=>{
        e.preventDefault();
    try {
      const res=await addMenu(menu);
      if (res.status == 200) {
        toast.success('Menu added successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
          navigate('/sidebar/menumanagement')
          window.location.reload(false);
        }, 1000)
      }
    }
    catch (error) {
      console.log(error);
      toast.error('Action Failed!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    }
  }
        
   

    console.log(hid);
    return(
        <div style={{padding:'20px 20px 20px 20px'}}>
            <ToastContainer/>
           <div className="headings">ADD MENU</div>
             <div className="formbg">
            <div>
          
            <form className="form_mains" onSubmit={(e)=>SubmitLogin(e)}>
                <div className="inputContainerd">
                <MdFoodBank style={{fontSize:'35px'}}/>
                <input type="text"  placeholder="Food Name" name="foodName" value={menu.foodName} onChange={handlechange} className="inputField" required></input>
                </div>
                <div className="inputContainerd">
                <GrNotes style={{fontSize:'35px'}}/>
                <input type="text"  placeholder="Food Description" name="foodDesc" value={menu.foodDesc} onChange={handlechange} className="inputField" required></input>
                </div>
                <div className="inputContainerd">
                <GrMoney style={{fontSize:'35px'}}/>
                <input type="number"  placeholder="Price" name="foodPrice" value={menu.foodPrice} onChange={handlechange} className="inputField" required></input>
                </div>
                <div className="inputContainerd">
                <GrImage style={{fontSize:'25px'}}/>
                <input type="text"  placeholder="Food Image Url" name="foodImage" value={menu.foodImage} onChange={handlechange} className="inputField" required></input>
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
    )
 } 