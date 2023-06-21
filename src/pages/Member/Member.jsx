import React from 'react'
import img from "../../media/images/member-logo.jpg"
import "./member.css";

const Member = () => {
  return (
    <div className='member-comingsoon'>
      <img style={{height:"100vh"}} src={img} alt="comingSoon" />
    </div>
  )
}

export default Member;
