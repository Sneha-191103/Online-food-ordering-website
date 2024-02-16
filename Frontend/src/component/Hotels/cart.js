import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci'
import animationData from '../lottie/empty.json'
import { useNavigate } from 'react-router-dom';
import { MdOutlineDelete } from 'react-icons/md'
import NavBar from '../pages/navbar';
import Footer from '../AdminAccess/footer';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';
import { FaMinusCircle, FaPlusCircle, FaTrash } from 'react-icons/fa';
import Lottie from 'react-lottie';




const Cart = () => {
  const cartItems = useSelector(state => state.cart.foodItem);
  const navigate = useNavigate()
  const dispatch = useDispatch();
 
  const handleCheckout = () => {
    navigate('/checkout')
  }


  const handleRemoveItem = (itemId, itemName) => {

    dispatch(removeFromCart(itemId));
    
  
  };


  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };


  const totalAmount = cartItems.reduce((acc,foodItem) => {
    return acc + foodItem.foodPrice * foodItem.quantity;
  }, 0);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div>
   
      {cartItems.length === 0 ? (
        <div style={{padding:'20px 20px 20px 20px'}}>
         <Lottie
         options={defaultOptions}
           height={450}
           width={550}
           />
           <div><center><h2>YOUR CART IS EMPTY!</h2></center></div>
           </div>
      ) : (

        <div style={{padding:'20px 20px 20px 20px'}}>
        
          <div className='cart-title-container'>
            <div>
            <h1 className='cart-title primary'>CART</h1>
            </div>
            <div>
           <button className='cart-checkout-btn' onClick={handleCheckout}>Checkout </button></div> 
          </div>
          <div className="cart-item">
          {cartItems.map((foodItem) => (
                  <div key={foodItem.mid} className='card-cart'>
                    <div className='card-img-cart'>
      <img src={foodItem.foodImage} width="100px" height="100px" className="mini-product-img" />
      </div>
      <div className='cart-desc-card'>
        
        <h3>{foodItem.foodName}</h3>
        <div className='desc-food'>{foodItem.foodDesc}</div>
        <h4> ₹ {foodItem.foodPrice}</h4>
      </div>
      <div className="quantity">
        <div className="action" onClick={() => handleDecreaseQuantity(foodItem.mid)}>
          <span><CiSquareMinus className='action-minus'/></span>
        </div>
        <h3 className="cart-quantity-item">{foodItem.quantity}</h3>
        <div className="action" onClick={() => handleIncreaseQuantity(foodItem.mid)}>
          <span><CiSquarePlus className='action-plus'/></span>
        </div>
      </div>
      <div className="action-remove" onClick={() => handleRemoveItem(foodItem.mid, foodItem.foodName)}>
        <span><MdOutlineDelete/></span>
      </div>
    </div>
    
    ))}
          </div>
          <br></br>
          <center>
          <div className='total'>
          <p className='cart-total'><center>Total: ₹ {totalAmount}</center></p>
          </div></center>
          </div>
        
      )}
      <br></br>
      <br></br>


    
    </div>
  );
};

export { Cart };