import React from 'react'
import './Teamcard.css'
import linkedin1 from '../../media/images/linkedin.png'


const Teamcard = ({name, designation, linkedin, image}) => {
    console.log(image);
    const handleBannerClick = () => {
        window.location.href = linkedin;
      };
  return (
    <div className='card2'>
            <img
            src={image}
            alt="poojamai"
            style={{width: "100%", marginBottom:"1rem"}}
            />
            <h1>{name}</h1>
            <div className='title'>
            <p style={{marginTop:"0.4rem"}}>{designation}</p>
            </div>
            {/* <p>
            IIT Bombay
            </p> */}
            <img style={{width:"10%", height:"10%"}}
            src={linkedin1}
            alt="Linkedin"
            onClick={handleBannerClick} 
            />
            {/* <p>
                <button>
                    Contact
                </button>
            </p> */}
        </div>
  )
}

export default Teamcard