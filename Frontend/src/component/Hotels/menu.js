import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHotelById } from "../Service/Api";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import '../css/hotel.css';

export default function Menu(){
    const {hid}=useParams();
    const dispatch = useDispatch();
  const handleAdd = (foodItem ) => {
   
    dispatch(addToCart( foodItem));
    toast.success('Added to cart!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  });
  

    
};
    console.log({hid});
    const [hotel, setHotels] = useState(null);

    useEffect(() => {
        const fetchHotelData = async () => {
          try {
            const response = await getHotelById(hid);
           
            setHotels(response.data);
          } catch (error) {
            console.error('Error fetching hotel data:', error);
          }
        };
    
        fetchHotelData();
      }, [hid]);
 console.log(hotel);
 if (!hotel) {
    return <div>Loading...</div>;
  }
  
    return(
        <>
       <ToastContainer/>
        {/* <div><img src={hotel.hotelImg} width='100%' height='200px'></img></div>
        <br></br>
        <hr></hr> */}
        <div className="div-tag"> <div>
                        <div className="name-card-hid">{hotel.hotelName}</div>
                        <div className="location">{hotel.location}</div>
                        <div className="rating-hotel">
                       <br></br>
                        <FaStar style={{width:'10px', height:'10px'}}/>{hotel.rating}
                        </div></div>
                        </div>
                        <br></br>
<hr></hr>
      <div className="hotel-menu-card">
      {hotel.menus.map((menu,index)=>(
                  <div key={menu.mid} className="menu-items-card">
                    <div><img src={menu.foodImage} className='foodImage-tag' width='390px' height='300px'></img></div>
                  
                    <div className="menu-card-items">
                      <div className="left">
                        <div className="hotel-name-card">
                        <b>{menu.foodName}</b>
                        </div>
                        <div className="food-desc-card">
                          {menu.foodDesc}
                        </div>
                      </div>
                      <div className="right">
                      <button className='cart-btn' onClick={() => handleAdd(menu)}>
                                Add+
                            </button>
                        <div className="price-card">
                       <b> ₹ {menu.foodPrice}</b>
                        </div>
                        
                      </div>
                    </div>
                   
                   
                   
                  </div>
                ))
              }
              <br></br><br></br>
      </div>
     
        </>
    )
}