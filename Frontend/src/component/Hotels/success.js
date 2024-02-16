import React, { useState, useEffect } from 'react';
import animationData from '../lottie/orderplaced.json'
import animationD from '../lottie/onthewayorder.json'
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

export default function Success() {
  const [showFirstLottie, setShowFirstLottie] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationD,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    // Set a timeout to switch to the second Lottie animation after 10 seconds
    const timeoutId = setTimeout(() => {
      setShowFirstLottie(false);
    }, 1000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {showFirstLottie && (
        <div style={{ padding: '20px 20px 20px 20px' }}>
          <br />
          <br />
          <Lottie
            options={defaultOptions}
            height={250}
            width={350}
          />
          <br />
          <div><center><h2 style={{ color: 'green' }}>ORDER PLACED SUCCESSFULLY!</h2></center></div>
        </div>
      )}

      {!showFirstLottie && (
        <div style={{ padding: '20px 20px 20px 20px' }}>
          <br />
          <br />
          <Lottie
            options={defaultOption}
            height={350}
            width={650}
          />
          <br />
          <div><center><h2 style={{ color: 'green' }}>YOUR ORDER IS ON THE WAY!</h2></center></div>
          <br></br>
          <center><Link to="/landing"><button className='continuebutton'>Continue Ordering!</button></Link></center>
        </div>
      )}
    </div>
  );
}
