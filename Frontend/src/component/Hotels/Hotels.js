import React, { useState, useEffect } from "react";
import { getHotels } from "../Service/Api";
export default function Hotel(){
  const [hotel, setHotels] = useState([]);

  const fetchHotel=async(e)=>{
    try{
    const res=await getHotels();
    console.log(res.data);
    setHotels(res.data);
    }
    catch{
      console.error();
    }
  }
 useEffect(()=>{
  fetchHotel();
 },[])
 console.log(hotel);
  return(
    <div>
      <div className='slider-image-wow'>

{hotel.map((imageUrl) => (
  <img
    key={imageUrl.hid}
    src={imageUrl.hotelImg}
    height='200px'
  />
))}

</div>
    </div>
  )
}
