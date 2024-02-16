// Comments.jsx
import React, { useEffect, useState } from 'react';
import { getFeedback, deleteFeedback } from '../Service/Api';
import '../css/comment.css'; // Import the CSS file
import { MdOutlineDelete } from 'react-icons/md';
import animationData from '../lottie/emptycomments.json';
import Lottie from 'react-lottie';
export default function Comments() {
  const [feedback, setFeedback] = useState([]);

  const fetchFeedback = async () => {
    try {
      const res = await getFeedback();
      console.log(res.data);
      setFeedback(res.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  const handleDeleteFeedback = async (fid) => {
    try {
      const res = await deleteFeedback({fid});
      if (res.status === 200) {
        // Update the state to reflect the deleted feedback
        setFeedback((prevFeedback) =>
          prevFeedback.filter((item) => item.fid !== fid)
        );
      }
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  if (!feedback) {
    return(
      <div style={{padding:'20px 20px 20px 20px'}}>
      <div className="headings">COMMENTS</div>
       <div className='lottie-for-feedback'> 
    <div>
     <Lottie
    options={defaultOptions}
    height={500}
    width={350}
    /></div>
    <div style={{color:'red'}}><h2>NO COMMENTS</h2></div>
    </div>
    </div>
    )
  }
  return (
    <div style={{padding:'20px 20px 20px 20px'}}>
     <div className="headings">COMMENTS</div>
    <div className="comments-container">
      {feedback.map((feedbackItem) => (
        <div key={feedbackItem.fid} className="feedback-box">
          <div className="feedback-item">
            <div className="user-info">
              <span className="username">{feedbackItem.username}</span>
              <span className="user-email">{feedbackItem.useremail}</span>
            </div>
            <div className="answer">{feedbackItem.answer}</div>
          </div>
          <div className='feedback-delete'>
            <MdOutlineDelete onClick={() => handleDeleteFeedback(feedbackItem.fid)} />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
