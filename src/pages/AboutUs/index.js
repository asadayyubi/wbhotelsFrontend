import about from '../../media/images/ABOUT_US1.jpg'

const AboutUs = () => {
    return (
        <>
        <div style={{width: "80%", margin: "50px auto", minHeight: "100vh"}}>
            <p style={{fontWeight: "bold", fontSize: "2.5rem", textAlign: "center", marginBottom: "2rem"}}>About Us</p>
            {/* <p> */}
            {/* WB Hotels is India's No # 1 Online tech-based hotel brand with over 40,000+ rooms, 2000+ hotels and 170 destinations across India. We work with property owners as online franchisee setup r. We enable these properties with proprietary technology (One of the largest Hotel Management Software and Channel Manager) and then sell these hotels via OTA’S and our own iOS/Android App, a strong corporate sales team. (We are one of the largest sources of room supply in India for MMT , GI ,Booking.com, Expedia, Clear trip etc).  */}
            {/* </p> */}
            <img
              src={about}
              alt="About Us Banner"
              style={{width: "100%", objectFit: "cover"}}
            /> 
        </div>
        </>
    )
}
export default AboutUs;
