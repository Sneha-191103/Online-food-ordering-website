import React, { useEffect, useState } from 'react';
import '../css/deliverypartner.css'
import '../css/management.css'
import { FaEdit, FaEnvelope, FaLocationArrow, FaPhoneAlt, FaSearchLocation, FaUnlock, FaUserAlt, FaUserTie } from 'react-icons/fa';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import animationData from '../lottie/driver.json';
import { GrImage, GrLocation, GrStar } from 'react-icons/gr';
import {MdFoodBank, MdOutlineEdit} from 'react-icons/md';
import {LuContact} from 'react-icons/lu';
import {SiMaildotru} from 'react-icons/si';
import { addHotels, editHotel, getHotelById, getHotels } from '../Service/Api';


export default function HotelView(){
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
       <div className="headings">HOTEL LISTS</div>
      <div>
      <table>
          <thead>
            <tr>
              <th>Hotel id</th>
              <th>Hotel Name</th>
              <th>Hotel Location</th>
              <th>Hotel Ratings</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {hotelData.map((hotel, index) => (
              <tr key={index}>
                  <td>{hotel.hid}</td>
                <td>{hotel.hotelName}</td>
                <td>{hotel.location}</td>
                <td>{hotel.rating}</td>
                <td><MdOutlineEdit onClick={() => switchToHotelEdit(hotel.hid)}/></td>
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
   
    const [hotel,setHotel]=useState({
        hotelName:null,
        rating:0,
        location:null,
        hotelImg:null
    });

    const fetchHotel = async () => {
        try {
          const response = await getHotelById(hid);
          setHotel(response.data);
          console.log(response.data)
        }
        catch (error) {
          console.log(error);
        }
    
      }
      useEffect(() => {
        fetchHotel()
      }, [])

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
        setHotel({
            ...hotel,[e.target.name]:e.target.value
        });
    }
    const SubmitLogin=async(e)=>{
        e.preventDefault();
    try {
      const res=await editHotel(hid, hotel);
      if (res.status == 200) {
        setSuccessMessage("Updated Successfully!");
        setTimeout(() => {
          navigate('/sidebar/hotelview')
          window.location.reload(false);
        }, 1000)
      }
    }
    catch (error) {
      console.log(error);
    }
  }
        
   

    console.log(hid);
    return(
        <div style={{padding:'20px 20px 20px 20px'}}>
           <div className="headings">EDIT HOTELS</div>
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
                {error && <div className="error-message">{error}</div>}
               {successMessage && <div className="success-message">{successMessage}</div>}
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