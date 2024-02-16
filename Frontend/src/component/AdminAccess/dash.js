import React, { useEffect, useState } from "react"; 
import { FaCartPlus, FaMoneyBill, FaMoneyBillAlt, FaMoneyBillWaveAlt, FaMoneyCheckAlt, FaShoppingBag, FaShoppingCart, FaUserTie, FaUsers } from 'react-icons/fa'
import CanvasJSReact from '@canvasjs/react-charts';
import Sidebar from "./Sidebar";
import {GrMoney} from 'react-icons/gr'
import '../css/dashboard.css'
import { getAllOrder, getAllUser, getHotels, getOrderCount } from "../Service/Api";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Dash()
{
    useEffect(() => {
    const count = async () => {
        try {
            const response = await getAllUser();
           console.log(response.data);
             const numberOfUsers = response.data.length;
            console.log(`Number of users: ${numberOfUsers}`);
            setNumberofUsers(numberOfUsers);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
      count();
      },[])

      useEffect(() => {
        const count = async () => {
            try {
                const response = await getHotels();
               console.log(response.data);
                 const numberOfHotels = response.data.length;
                console.log(`Number of hotels: ${numberOfHotels}`);
                setNumberofHotels(numberOfHotels);
              } catch (error) {
                console.error('Error fetching user data:', error);
              }
            };
        
          count();
          },[])

      useEffect(() => {
        const count = async () => {
            try {
                const response = await getOrderCount();
               console.log(response.data);
                setNumberofOrders(response.data.count);
              } catch (error) {
                console.error('Error fetching order data:', error);
              }
            };
        
          count();
          },[])

          useEffect(() => {
            const count = async () => {
                try {
                    const response = await getAllOrder();
                    const orders = response.data;

      // Calculate the sum of orderTotal values
      const totalOrderSum = orders.reduce((sum, order) => sum + order.orderTotal, 0);

      setProfit(totalOrderSum)
                    
                  } catch (error) {
                    console.error('Error fetching order data:', error);
                  }
                };
            
              count();
              },[])

   const [numberOfUsers,setNumberofUsers]=useState('');
   const [numberOfOrders,setNumberofOrders]=useState('');
   const [profit,setProfit]=useState('');
   const [numberOfHotels,setNumberofHotels]=useState('');
   
    return(
        <div style={{padding:'20px 20px 20px 20px'}}>
            <div className="headings">DASHBOARD</div>
            <div className="dash-bord">
                <div className="dashb">
                    <div className="dash-box-gap">
                        <div className="dashboard-box"><div className="dashboard-text">Total Users<br></br>{numberOfUsers}<br></br><FaUsers style={{fontSize:'30px',marginLeft: "180px", marginTop: "40px"}}/></div></div>
                        <div className="dashboard-box"><div className="dashboard-text">Net Profit<br></br>₹ {profit}<br></br><FaMoneyCheckAlt style={{fontSize:'30px',marginLeft: "180px", marginTop: "40px"}} /></div></div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="dash-box-gap">
                        <div className="dashboard-box"><div className="dashboard-text">Total Orders<br></br>{numberOfOrders}<br></br><FaCartPlus style={{fontSize:'30px',marginLeft: "180px", marginTop: "40px"}}/></div></div>
                        <div className="dashboard-box"><div className="dashboard-text">Total Hotels<br></br>{numberOfHotels}<br></br><FaUserTie style={{fontSize:'30px',marginLeft: "180px", marginTop: "40px"}} /></div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}