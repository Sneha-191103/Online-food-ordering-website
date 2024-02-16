import React, { useState } from "react"; 
import '../css/login.css'
import Lottie from 'react-lottie';
import animationData from '../lottie/order.json';
import { Link, useNavigate } from "react-router-dom";



export default function Register()
{
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const navigate=useNavigate();
    
      const [isPopupVisible, setPopupVisible] = useState(false);
      const [message, setMessage] = useState({
          type: '',
          content: '',
          url: '',
          btn: ''
      });
      const showMessage = (type, content, url = '', btn = 'Got it') => {
          setMessage({ type, content, url, btn });
          setPopupVisible(true);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const formValues = Object.values(user);
        if (!formValues.some(value => !value)) {
            showMessage('success', 'Registration successful!', '/login', 'Login');
        } else {
            showMessage('error', 'Please fill in all fields');
        }
    };
      const handleGotItClick = () => {
          if (message.url) {
              navigate(message.url);
          }
          setPopupVisible(false);
      };
  
   
     
   
    const [user,setUser]=useState({
        username:'',
        password:'',
        email:'',
        phonenumber:''
    });
    const handlechange=(e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        });
    }
    
    return(
        <div className="formbg">
             <div className="lottie">
      <Lottie 
	    options={defaultOptions}
        height={560}
        width={600}
      />
    </div>
    
            <div>

          
            <form className="form_main" onSubmit={handleSubmit}>
           <div className="heading">REGISTER</div>
                <div className="inputContainer">
                &emsp; <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
        </svg>
        
                <input type="text" required placeholder="Username" name="username" value={user.username} onChange={handlechange} className="inputField"></input>
                </div>
                <div className="inputContainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
                <input type="text" required placeholder="Email" name="email" value={user.email} onChange={handlechange} className="inputField"></input>
                </div>
                 <div className="inputContainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
        
                <input type="text" required placeholder="Phone Number" name="phonenumber" value={user.phonenumber} onChange={handlechange} className="inputField"></input>
                </div>
              <div className="inputContainer">
              &emsp; <svg class="inputIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2e2e2e" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
    </svg>
    
                <input type="password" required placeholder="Password" name="password" value={user.password} onChange={handlechange} className="inputField"></input>
                </div><br></br>
               
                <div>
                    <button type="submit" id="button">Signup</button>
                </div>
                <br></br>
                <div>already have an account?<Link to="/login">login</Link></div>
            </form>
            </div>
          
        </div>
    )
}