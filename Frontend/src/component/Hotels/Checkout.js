import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addOrder } from '../Service/Api';
import { removeAllFromCart } from '../redux/cartSlice';
import '../css/order.css'
const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ordered, setOrdered] = useState(false);
    const idString = localStorage.getItem('xuserId');
    const id = parseInt(idString, 10); 
    const name = localStorage.getItem('xuserName')
    const phone = localStorage.getItem('xuserPhone')
    const email = localStorage.getItem('xuserEmail')
    const address = localStorage.getItem('xuserAddress')
    const datex = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString().slice(-2);
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        return `${formattedDay}/${formattedMonth}/${year}`;
    }
    const currentdate = datex();

    const cartItems = useSelector((state) => state.cart.foodItem);
    console.log(cartItems);


    const foodData = () => {
        const pData = cartItems.map((menu) => {
            const amount = menu.foodPrice * menu.quantity;
            return {
              foodName: menu.foodName,
              quantity: menu.quantity,
              foodPrice: menu.foodPrice,
            };
          });
        const pTotal = cartItems.reduce((acc, menu) => acc + menu.foodPrice * menu.quantity, 0);
        
        return { pData, pTotal };
    };
    useEffect(() => {
        if (data.pTotal == 0) {
            navigate('/landing')
        }
    }, [])

    const data = foodData();
    const handleOrder = async () => {
        setOrdered(true);
        const orderdata = {
            uid:id,
            orderAddress: address,
            paymentMode: "cod",
            menus: cartItems.map((cartItem) => ({
                fid: cartItem.mid,
                quantity: cartItem.quantity,
            }))
            
        }
        console.log(orderdata);
        const checkstatus = await addOrder(orderdata)
        if (checkstatus.status == 200) {
            dispatch(removeAllFromCart());
            navigate('/success')
            // console.log(orderdata);
        }
        else {
            setOrdered(false);
        }

    }
    
    return (
        <>
  <div className="order">
    <div className="order-main">
      <div className="cart-order-items">
        <div className="head-order-title">
          <h3>ORDER DETAILS</h3>
        </div>
        <div className="order-item-title">
          <h3>Cart Items</h3>
        </div>
        <div className="order-foodItems">
          {cartItems.map((menu, index) => (
            <div key={index} className="order-items-details">
              <div className='title-card'>{menu.foodName}</div>
              <div>{menu.quantity}</div>
              <div>x</div>
              <div>₹ {menu.foodPrice}</div>
              <div>=</div>
              <div className='subtotal'>₹ {menu.foodPrice * menu.quantity}</div>
            </div>
          ))}
        </div>
      </div>
      <br></br><br></br>
      <div className="cart-r-3 shadow bg-white">
        <div className="order-element-title">Order Date</div>
        <div className="order-element-data-r-3">
          <h4>{currentdate}</h4>
        </div>
      </div>

      <div className="cart-r-2 shadow bg-white">
        <div className="order-element-title">Shipping Address</div>
        <div className="order-element-data-r-2">
          <h4>{address}</h4>
        </div>
      </div>

      <div className="cart-r-3 shadow bg-white">
        <div className="order-element-title">Payment Mode</div>
        <div className="order-element-data-r-3">
          <h4>Cash on Delivery</h4>
        </div>
      </div>


      <button className="bg-green white checkout-btn" onClick={handleOrder} disabled={ordered}>
        {ordered ? 'Processing' : 'Place Order'}
      </button>
    </div>
  </div>
</>

    );
};

export default Checkout;