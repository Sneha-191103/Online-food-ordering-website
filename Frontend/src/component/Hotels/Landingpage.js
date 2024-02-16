import React from "react";
import { useState, useEffect } from "react";
import '../css/landing.css'
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import { GrSearch } from "react-icons/gr";
import "react-alice-carousel/lib/alice-carousel.css";
import NavBar from "../pages/navbar";
import Footer from "../AdminAccess/footer";
import { FaFacebook, FaInstagram, FaStar, FaTwitter } from "react-icons/fa";
import { getHotels } from "../Service/Api";
import Hotels from "./Hotels";
import '../css/landing.css'
import ImageGallery from "./MapContainer";

export default function LandingPage() {


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
  
 const [filteredHotels, setFilteredHotels] = useState(hotel);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchError, setSearchError] = useState('');


  console.log(hotel);

  const handleSearch = () => {
    setSearchError('');

    const filtered = hotel.filter((hotel) =>
      Object.values(hotel).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    setFilteredHotels(filtered);
  };
  
  if (!hotel) {
    window.location.reload(false);
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="landing">
     
       <br></br>
       <div className="menuItems">
        <div >
            <img src='https://img.freepik.com/premium-photo/brazilian-food_300636-385.jpg' width='100px' height='100px'></img>
            <div>All</div>
        </div>
        <div>
            <img src='https://img.freepik.com/premium-photo/national-food-india-with-white-background-high-q_889056-6602.jpg' width='100px' height='100px'></img>
            <div>South Indian</div>
        </div>
        <div>
            <img src='https://img.freepik.com/premium-photo/stack-flatbread-rustic-wooden-background-toned_890887-10600.jpg' width='100px' height='100px'></img>
            <div>North Indian</div>
        </div>
        <div>
            <img src='https://img.freepik.com/premium-photo/photo-biryani_931878-31255.jpg' width='100px' height='100px'></img>
            <div>Briyani</div>
        </div>
        <div>
            <img src='https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?size=626&ext=jpg&uid=R94532173&ga=GA1.2.515790002.1685285021&semt=sph' width='100px' height='100px'></img>
            <div>Shawarma</div>
        </div>
        <div>
            <img src='https://img.freepik.com/free-photo/hamburger-with-cheese-lettuce-it_1340-31392.jpg' width='100px' height='100px'></img>
            <div>Burger</div>
        </div>
        <div>
            <img src='https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&uid=R94532173&ga=GA1.2.515790002.1685285021&semt=sph' width='100px' height='100px'></img>
            <div>Pizza</div>
        </div>
        <div>
            <img src='https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?size=626&ext=jpg&uid=R94532173&ga=GA1.2.515790002.1685285021&semt=sph' width='100px' height='100px'></img>
            <div>Sandwich</div>
        </div>
        </div>
        <br></br>
        <br></br>
        <div style={{padding:'20px 50px'}}>
        <div class="flex-row scrollable">
          <ImageGallery/>
  </div>
    </div>
{/* <div style={{padding:'20px 50px'}}>

  <div class='flex-row-scrollable'>
 <Hotels/>
  </div> 
  </div>  */}
  <br></br>
          <div className="hotel-menu-card">
          {hotel.map((hotel, index) => (
            <div key={hotel.hid} className="menu-card">
              {hotel.menus.map((menu,index)=>(
                <Link to={`/menu/${hotel.hid}`}>
                  <div key={menu.mid} className="menu-items-card">
                    <div><img src={menu.foodImage} className='foodImage-tag' width='390px' height='300px'></img></div>
                    <div className="menu-card-items">
                      <div className="left">
                        <div className="hotel-name-card">
                        <b>{hotel.hotelName}</b>
                        </div>
                        <div className="food-item-card">
                          <b>{menu.foodName}</b>
                        </div>
                      </div>
                      <div className="right">
                        <div className="rating-hotel">
                        <FaStar style={{width:'15px', height:'15px'}}/>{hotel.rating}
                        </div>
                        {/* <div className="price-card">
                       <b> ₹ {menu.foodPrice}</b>
                        </div> */}
                      </div>
                    </div>                   
                  </div>
                  <br></br>
                  </Link>
                ))
              }
            </div>
          ))}
          </div>
      </div>
    </>
  )

}
