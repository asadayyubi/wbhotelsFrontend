import React from 'react'
import "./award.css";
import award1 from "../../media/images/Award-1.jpg";
import award2 from "../../media/images/Award-2.jpg";
import award3 from "../../media/images/Award-3.jpg";
import award4 from "../../media/images/Award-4.jpg";
import award5 from "../../media/images/Award-5.jpg";
import award6 from "../../media/images/Award-6.jpg";
import award7 from "../../media/images/Award-7.jpg";
import award8 from "../../media/images/Award-8.jpg";

const Award = () => {
  return (


    <div>
        <br></br><br></br> 
        <div className='title1'>
        Awards and Recognition
        </div>
        <br></br><br></br>
        <div className='img1'>
        <img className='award1' src={award1} alt="pic" />
        </div><br></br><br></br><br></br><br></br>
        <div className='img5'>
        <img className='award5' src={award5} alt="pic" />
        </div><br></br><br></br><br></br><br></br>
        <div className='img7'>
        <img className='award7' src={award7} alt="pic" />
        </div><br></br><br></br><br></br><br></br>
        <div className='title1'>
        Articles
        </div>
        <br></br><br></br>
        <p><div className='img2'>
        <img className='award2' src={award2} alt="pic" />
        </div><br></br><br></br><br></br><br></br>
        <div className='img4'>
        <img className='award4' src={award4} alt="pic" />
        </div></p><br></br><br></br><br></br><br></br>
        <div className='img3'>
        <img className='award3' src={award3} alt="pic" />
        </div>       
        <div className='img6'>
        <img className='award6' src={award6} alt="pic" />
        </div><br></br><br></br><br></br><br></br>
        <p>
        <div className='img8'>
        <img className='award8' src={award8} alt="pic" />
        </div><br></br><br></br><br></br><br></br>
        </p>
    </div>


  )
}

export default Award