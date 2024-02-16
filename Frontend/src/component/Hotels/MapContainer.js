import React, { useEffect, useState } from 'react';
const imageUrls = [
  'https://img.freepik.com/free-photo/background_53876-32170.jpg?size=626&ext=jpg&uid=R94532173&ga=GA1.2.515790002.1685285021&semt=sph',
  'https://img.freepik.com/free-photo/background_53876-32170.jpg?size=626&ext=jpg&uid=R94532173&ga=GA1.2.515790002.1685285021&semt=sph',
  'https://img.freepik.com/free-vector/flat-design-organic-food-facebook-template_23-2149112098.jpg?size=626&ext=jpg',
  'https://img.freepik.com/free-vector/flat-design-food-landing-page_23-2149083214.jpg?size=626&ext=jpg',
  'https://img.freepik.com/free-vector/flat-design-food-facebook-template_23-2149083216.jpg?w=1060&t=st=1697375151~exp=1697375751~hmac=d1d2518204eb55fc5acbb57426b1816d370d2d271eeb8faeb367b278d1385c57',
  'https://img.freepik.com/free-vector/flat-horizontal-thanksgiving-sale-banner_23-2149130286.jpg',
  'https://img.freepik.com/free-vector/watercolor-food-facebook-ad_23-2149054520.jpg?w=1060&t=st=1697378051~exp=1697378651~hmac=1c77a0f96d9b1ce25e05cdc83699aa96785b112571231d117b291585c646c14a',
  'https://img.freepik.com/free-vector/flat-horizontal-thanksgiving-sale-banner_23-2149130287.jpg?size=626&ext=jpg',
  
];


function ImageGallery() {
  
  return (
    <div>
    
      <div className='slider-image-wow'>

          {imageUrls.map((imageUrl) => (
            <img
              key={imageUrl}
              src={imageUrl}
              height='200px'
            />
          ))}
          
      </div>
     
    </div>
  );
}


export default ImageGallery;
