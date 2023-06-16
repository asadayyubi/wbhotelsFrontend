import about from "../../media/images/aboutus_banner.png";
import { cardData } from "./cardData";
import "./aboutus.css";
import Teamcard from "../../components/Teamcard/Teamcard";

const AboutUs = () => {
  return (
    <>
      <div
        style={{
          width: "90%",
          margin: "50px auto",
          minHeight: "10vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
            <img
              src={about}
              alt="About Us Banner"
              style={{width: "100%", objectFit: "cover"}}
            /> 
        </div> 
        <div style={{marginTop:"5px"}}>
            <p style={{fontWeight: "bold", fontSize: "2.5rem", textAlign: "center", marginTop: "1rem", fontFamily:"sans-serif"}}>About Us</p>
            <p style={{marginTop: "1rem", fontSize: "1.6rem", lineHeight: "1.4", fontFamily:"sans-serif", alignItems:"flex-start", marginBottom: "2rem"}}>
            WB Hotels is India's No # 1 Online tech-based hotel brand with over 45000 rooms, 1600 hotels and 200 destinations across India. We work with property owners as online franchisee setup. We enable these properties with proprietary technology (One of the largest Hotel Management Software and Channel Manager) and then sell these hotels via OTA’S and our own iOS/Android App, a strong corporate sales team. (We are one of the largest sources of room supply in India for MMT, GI, Booking.com, Expedia, Clear trip etc).  
            </p> 
        </div>         
        </div>
        <h1 style={{textAlign:"center", marginBottom:"2rem", marginTop:"-18rem"}}>Our Team</h1>
        <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: "40px", gridRowGap: "30px", marginBottom:"2rem", width:"80%", margin:"auto"}}>
            {cardData.map((item, i) => <Teamcard key={i} {...item} style={{   flexBasis: 'auto', flexGrow: "1", width: "100%"}}/> ) }       
        </div>
        </>
    )
}
export default AboutUs;
