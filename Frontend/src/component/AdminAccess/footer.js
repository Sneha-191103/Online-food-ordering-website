import React from "react";
import { Link } from "react-router-dom";
export default function Footer(){
    return (
        <>
        <div className="footer">
        <div className="foot">
            <div className="ft">Copyright©2023</div>
            </div>
            <div className="foots">
            <Link to='/faq' style={{color:'white'}}><div className="ft">FAQ</div></Link>
            <Link to='/privacy' style={{color:'white'}}><div className="ft">Privacy Policy</div></Link>
            <Link to='/terms' style={{color:'white'}}><div className="ft">Terms and Conditions</div></Link>
            <Link to='/feedback' style={{color:'white'}}><div className="ft">Feedback</div></Link>
            </div>
           
       
        </div>
        </>
    )
}