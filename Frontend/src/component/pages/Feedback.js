import React, { useState } from 'react';
import Footer from '../AdminAccess/footer';
import NavBar from './navbar';
import '../css/feedback.css'
import { addFeedback } from '../Service/Api';
import { useNavigate } from 'react-router-dom';
function Feedback() {
  const navigate=useNavigate();
  const [feedback,setFeedback]=useState(
    {
        useremail:'',
        username:'',
        question:"what",
        answer:''
    }
  );
const handleChange=(e)=>{
    setFeedback({
    ...feedback,[e.target.name]:e.target.value
});
}
console.log(feedback);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addFeedback(feedback);
        if (res.status===200) {
          //  setSuccessMessage("Registration Successful!");
            setTimeout(() => {
                navigate('/feedback');
                window.location.reload(false);
            }, 1500);

        } 
         else if (res.status===400) {
          //  setError("Something went wrong!");
        }
   
  };

  return (
    <>
    <NavBar/>
    <div className='feee'>
      <div className='feedback-img'>
        <img src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?size=626&ext=jpg&ga=GA1.1.631111132.1694682562&semt=ais"></img>
      </div>
    <div className='feedback-form'>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={feedback.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="useremail"
            value={feedback.useremail}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            name="question"
            value={feedback.question}
            onChange={handleChange}
          />
        </div> */}
        <div>
          <label htmlFor="answer"> Your Feedback:</label>
          <textarea
            name="answer"
            value={feedback.answer}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    <Footer/>
    
    </>
  );
}

export default Feedback;
