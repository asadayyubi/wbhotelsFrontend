import tcbanner from '../../media/images/tandcOriginal.jpg'
import "./tandc.css"

const TermsAndConditions = () => {
    return (
        <>
        {/* <div style={{width: "95%", margin: "-110px auto", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 10"}}>
        <div style={{ flex: "0.8", paddingLeft:"2rem", paddingRight: "4rem", boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}>
            <p style={{marginTop: "2rem", fontSize: "1.6rem", lineHeight: "1.4", fontFamily:"sans-serif", alignItems:"flex-start", marginBottom: "2rem", color:"#475569"}}>
            Welcome to our website. This website is offered to you, the customer, in good faith for personal perusal only on the condition that your access should not impair the performance, corrupt the contents or reduce the overall functionality of this website. The content of the pages of this website is for your general information and use only. It is subject to change without notice. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be absolutely your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
            </p> 
        </div>  
        <div style={{ flex: "2", marginLeft:"2rem"}}>
            <img
              src={tcbanner}
              alt="About Us Banner"
              style={{width: "100%", objectFit: "cover"}}
            /> 
        </div>        
        </div> */}
        <div style={{backgroundColor:"#f5f5f5", marginTop:"-50px", marginBottom:"-50px" }}>
        <div style={{width: "90%", margin: "50px auto", minHeight: "100vh", display: "flex", alignItems: "center", flexDirection: "column"}}>
        <div className='banner'>
            <img
              src={tcbanner}
              alt="T&C Banner"
              style={{width:"90%", marginTop:"80px"}}
            /> 
        </div> 
        <div className='content-tc'
        style={{marginTop:"5px"}}>
            {/* <p style={{fontWeight: "bold", fontSize: "2.5rem", textAlign: "center", marginTop: "1rem", fontFamily:"sans-serif"}}>About Us</p> */}
            <p style={{marginTop: "1.8rem", fontSize: "1.8rem", lineHeight: "1.4", fontFamily:"sans-serif", textAlign:"justify", marginBottom: "2rem", width:"75%", marginLeft:"180px"}}>
                <ul>
                    <li>
                    Welcome to our website, intended for personal perusal only.
                    </li>
                    <li>
                    Your access should not impair performance, corrupt content, or reduce functionality.
                    </li>
                    <li>
                    The content on this website is for general information and may change without notice.
                    </li>
                    <li>
                    Neither we nor any third parties provide warranty or guarantee for accuracy, timeliness, performance, completeness, or suitability of the information and materials.
                    </li>
                    <li>
                    Your use of this website and any available products, services, or information is at your own risk and responsibility to meet your specific requirements.
                    </li>
                </ul>
            </p> 
        </div>         
        </div>
        </div>
        </>
    )
}
export default TermsAndConditions;
