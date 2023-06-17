import React from 'react'
import img from "../../media/images/member-logo.jpg"

const Member = () => {
  return (
    <div className='member-comingsoon' style={{width: "100%", height: "90vh", margin:"auto",backgroundColor: "#f8ffff" }}>
      <img style={{width: "60%",margin:"auto",height:"450px",paddingTop:"100px",display:"flex", justifyContent:"center" }} src={img} alt="comingSoon" />
    </div>
  )
}

export default Member;
