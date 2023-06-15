import contact from '../../media/images/CONTACT US-01.jpg'
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
                <div style={{ position: "absolute", top: "100%", bottom: "0", left: "0", width: "100%", paddingLeft: "15%", paddingRight:"15%" }}>
                  <div className='contactus-container' style={{ display: "flex", justifyContent: "space-between", padding: "0 20"}}>
                    <div className='first' style={{ flex: "0 0 48%", backgroundColor: "#d4dcfb", padding: "1rem", borderRadius: "3px", marginTop: "-3.5%", background: "linear-gradient(transparent 10%, #d4dcfb 50%)"}}>
                    {/* Contact Box 1 */}
                    <h3 style={{ marginBottom: "1rem", color: "black", fontFamily:"sans-serif"}}>Address </h3>
                    <p style={{ color: "black", fontFamily:"sans-serif", fontSize:"14px", lineHeight:"1.3"}}>WB Hotels & Resorts,  A007, Kanakia Boomerang, Chandivali, Powai, Mumbai  -400072,  <br/>Central Reservations Number:  80480 36907 <br/>E-Mail: booking@wbhotels.in <br/> Website: www.wbhotels.in.</p>
                  </div>
                  <div className='second' style={{ flex: "0 0 48%", backgroundColor: "#d4dcfb", background: "linear-gradient(transparent 1%, #d4dcfb 50%)", padding: "1rem", borderRadius: "3px",marginTop: "-1%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    {/* Contact Box 2 */}
                    <h3 style={{ marginBottom: "1rem", color: "black", fontFamily:"sans-serif"}}>Here's how you can reach us!</h3>
                    <p style={{ color: "white"}}>
                    <button 
                        className='hover-button' 
                        onClick={handleBannerClick}  
                        style={{
                            marginTop: "0.1rem",
                            padding: "1rem 2rem", 
                            fontSize: "1.5rem", 
                            // backgroundColor: "#414E5F", 
                            // color: "white", 
                            border: "none", 
                            borderRadius: "5px", 
                            cursor: "pointer", 
                            textAlign: "center",
                            fontFamily:"sans-serif"
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
