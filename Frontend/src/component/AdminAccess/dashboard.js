// src/CurrentAddress.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrentAddress = () => {
  const [currentLocation, setCurrentLocation] = useState({});
  const [currentAddress, setCurrentAddress] = useState('');

  useEffect(() => {
    // Get current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Fetch current address from reverse geocoding service
        try {
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_OPENCAGE_API_KEY`
          );

          const results = response.data.results;
          if (results.length > 0) {
            setCurrentLocation({ latitude, longitude });
            setCurrentAddress(results[0].formatted);
          }
        } catch (error) {
          console.error('Error fetching current address:', error);
        }
      });
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  }, []);

  return (
    <div>
      <h1>Your Current Address:</h1>
      <p>Latitude: {currentLocation.latitude}</p>
      <p>Longitude: {currentLocation.longitude}</p>
      <p>{currentAddress}</p>
    </div>
  );
};

export default CurrentAddress;
