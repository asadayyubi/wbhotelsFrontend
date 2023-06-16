import contact from '../../media/images/CONT_US3.jpg'
import "./contactus.css"

const ContactUs = () => {
    const handleBannerClick = () => {
        window.location.href = 'https://forms.gle/6Bn1Encc4Rb3F9LA6';
      };

    return (
        <>
        <div className='main-container' style={{width: "80%", margin: "50px auto", height: "60vh", position: "relative" }}>
            {/* <p style={{fontWeight: "bold", fontSize: "2.5rem", textAlign: "center", marginBottom: "2rem"}}>Contact Us</p> */}
            <div style={{ position: "relative" }}>
                 <img
                    src={contact}
                    alt="Contact Us Banner"
                    style={{width: "100%", objectFit: "cover"}}
                  /> 
                <div style={{ position: "absolute", top: "100%", bottom: "0", left: "0", width: "100%", paddingLeft: "20%", paddingRight:"20%" }}>
                  <div className='contactus-container' style={{ display: "flex", justifyContent: "space-between", padding: "0 10"}}>
                    <div className='first' style={{ flex: "0 0 48%", backgroundColor: "#DDDDDD", padding: "1rem", borderRadius: "3px", marginTop: "-10%"}}>
                    {/* Contact Box 1 */}
                    <h3 style={{ marginBottom: "1rem", color: "black" }}>Address </h3>
                    <p style={{ color: "black" }}>WB Hotels & Resorts,  A007, Kanakia Boomerang, Chandivali, Powai, Mumbai  -400072,  <br/>Central Reservations Number:  80480 36907 <br/>E-Mail: booking@wbhotels.in <br/> Website: www.wbhotels.in.</p>
                  </div>
                  <div className='second' style={{ flex: "0 0 48%", backgroundColor: "#DDDDDD", padding: "1rem", borderRadius: "3px",marginTop: "-10%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    {/* Contact Box 2 */}
                    <h3 style={{ marginBottom: "1rem", color: "black" }}>Here's how you can reach us!</h3>
                    <p style={{ color: "white"}}>
                    <button  
                        onClick={handleBannerClick}  
                        style={{
                            marginTop: "1rem",
                            padding: "1rem 2rem", 
                            fontSize: "1.5rem", 
                            backgroundColor: "#414E5F", 
                            color: "white", 
                            border: "none", 
                            borderRadius: "5px", 
                            cursor: "pointer", 
                            textAlign: "center"
                            }}
                    > 
                      Contact Support 
                  </button> 
                    </p>
                  </div>
                </div>
              </div>
                {/* #414E5F, WB Hotels & Resorts,  A007, Kanakia Boomerang, Chandivali, Powai, Mumbai  -400072,  <br/>Central Reservations Number:  80480 36907 <br/>E-Mail: booking@wbhotels.in <br/> Website: www.wbhotels.in */}
               </div>
              </div>
            </>
          );
         };
export default ContactUs;
