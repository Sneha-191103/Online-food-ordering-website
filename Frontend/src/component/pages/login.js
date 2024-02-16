import React, { useEffect, useState } from "react"; 
import '../css/login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaAddressBook, FaAt, FaLock, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import {register, userlogin , } from '../Service/Api';
import { useUser } from "../Context/usercontext";
export default function Login(){
    const [isRegistering, setIsRegistering] = useState(false);

    const switchToRegister = () => {
      setIsRegistering(true);
    };
  
    const switchToLogin = () => {
      setIsRegistering(false);
    };
  
    return (
      <div className="name-login">
        <div className="imglogin">
                <div>
                <img src="https://images.pexels.com/photos/4050990/pexels-photo-4050990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      width='100%'
                      height='100%'
                    //   style={{ opacity: 0.6 ,
                    //     backgroundColor: 'white', }}
                >
                </img>
            </div>
        </div>
        <div className="login-form-bg-colour">
        {isRegistering ? (
          <UserRegistration switchToLogin={switchToLogin} />
        ) : (
          <UserLogin switchToRegister={switchToRegister} />
        )}
        </div>
      </div>
    );  
}


function UserLogin({ switchToRegister })
{
    const { login: userLogin } = useUser();
    const navigate = useNavigate();
   
    const [user,setUser]=useState({
        email:'',
        password:''
    });
    const [error, setError] = useState(""); // State for error message
    const [successMessage, setSuccessMessage] = useState(""); 
    const handlechange=(e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        });
    }
  
    const SubmitLogin=async (e)=>{
        e.preventDefault();
        try{
        const res = await userlogin(user);
        console.log(res.data);
        console.log(res.status);
        if ((res.status) === 200 && (res.data.role)=== "CUSTOMER")  {
            console.log(res.data);
            
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('Role', res.data.role);
   

            const getuid = (res.data.uid);
            console.log(getuid)
            localStorage.setItem('xuserName', res.data.name);
            localStorage.setItem('xuserEmail', res.data.email);
            localStorage.setItem('xuserId', res.data.uid);
            localStorage.setItem('xuserPhone', res.data.phone);
            localStorage.setItem('xuserAddress', res.data.address);
            toast.success('Login Successful !', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate(`/landing`);
            }, 1500);
        }
        else if((res.status)=== 200 && (res.data.role)=== "ADMIN"){
            console.log(res.data);

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('Role', res.data.role);
            localStorage.setItem('AdminEmail', res.data.email);

            toast.success('Login Successful !', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/sidebar/dash');
            }, 1500);
        }
        
        else {
           toast.error('Login Failed!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        } 
    }
        catch(exception)
    {
        toast.error('Login Failed !', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    };


        // const formValues = Object.values(user);
        // if (!formValues.some((value) => !value)) {
           
        //     userLogin();
        //     dispatch(login({
        //         username:user.username
                
        //      }))
        //      setSuccessMessage("Login successful!")
        //      setError("");
        //      setTimeout(() => {
        //         navigate("/landing")
        //       }, 1000);
            
        // } 
        // else{
        //     setError("Incorrect username or password.");
        // }
    
    const dispatch=useDispatch();
   
    
    return(
        <div className='login-form' >
             <ToastContainer/>
  
            <div className="formbground">
           <form className="form_main" onSubmit={(e)=>SubmitLogin(e)}>
                <div className="heading">USER LOGIN</div>
                <div className="inputContainer-login">
                <FaAt/>
                <input type="text" placeholder="Email" name="email" value={user.email} onChange={handlechange} className="inputField-login"></input>
                </div>
                <div className="inputContainer-login">
                <FaLock/>
                <input type="password"  placeholder="Password" name="password" value={user.password} onChange={handlechange} className="inputField-login"></input>
                </div><br></br>
                {error && <div className="error-message">{error}</div>}
               {successMessage && <div className="success-message">{successMessage}</div>}
               <br></br>
                <div>
                    <button className="loginbutton" type="submit">LOGIN</button>
                </div>
                <br></br>
                <div>create account?<button className="link-signup" onClick={switchToRegister}>signup</button></div>
                
            </form>
            </div>
           
        </div>
    )
}
function UserRegistration({ switchToLogin })
{
    const [error, setError] = useState(""); // State for error message
    const [successMessage, setSuccessMessage] = useState(""); 
      const navigate=useNavigate();
      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const res = await register(user);
        if (res.data === "User registered successfully" && res.status==200) {
            toast.success('Registration Successful !', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate(`/login`);
                window.location.reload(false);
            }, 1500);

        } 
         else if (res.data==="Sommething went wrong!" && res.status==="400") {
           toast.error('Registration Failed !', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        }
    }
    catch(exception)
    {
        toast.error('Registration Failed !', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    };


     
  
   
     
   
    const [user, setUser] = useState({
        name: '',
        phone: 0,
        email: '',
        password: '',
        address:'',
        role:'customer'
    });
    const handlechange=(e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        });
    }
   
    
    return(
        <div className="login-form">
             <ToastContainer/>
  
         <div className="formbground">
       <form className="form_main" onSubmit={handleSubmit}>
      <div className="heading">REGISTER</div>
           <div className="inputContainer-login">
           <FaAt/>
           <input type="text"  placeholder="Username" name="name" value={user.name} onChange={handlechange} className="inputField-login"></input>
           </div>
           <div className="inputContainer-login">
           <FaMailBulk/>
           <input type="text"  placeholder="Email" name="email" value={user.email} onChange={handlechange} className="inputField-login"></input>
           </div>
            <div className="inputContainer-login">
           <FaPhoneAlt/>
           <input type="number" placeholder="Phone Number" name="phone" value={user.phonenumber} onChange={handlechange} className="inputField-login"></input>
           </div>
            <div className="inputContainer-login">
            <FaLock/>
           <input type="password"  placeholder="Password" name="password" value={user.password} onChange={handlechange} className="inputField-login"></input>
           </div>
           <div className="inputContainer-login">
           <FaAddressBook/>
           <input type="text" placeholder="Address" name="address" value={user.address} onChange={handlechange} className="inputField-login"></input>
           </div>
           <br></br>
                {error && <div className="error-message">{error}</div>}
               {successMessage && <div className="success-message">{successMessage}</div>}
               <br></br>
           <div>
               <button type="submit" className="loginbutton">SIGNUP</button>
           </div>
           <br></br>
           <div>already have an account?<button className="link-signup" onClick={switchToLogin}>login</button></div>
       </form>
       </div>
       
   </div>
    )
}