import React, { useState } from "react";
import mlogo from "../../media/images/i-message.png";
import clogo from "../../media/images/telephone-call.png";
import plogo from "../../media/images/property.png";
import one from "../../media/images/number-one.png";
import two from "../../media/images/number-2.png";
import three from "../../media/images/number-3.png";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { KeyboardArrowDownIcon } from '@mui/icons-material';
// import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Repeat } from "@mui/icons-material";
import "./support.css"
import WhatsAppWidget from "react-whatsapp-chat-widget";
import companyLogo from "../../media/images/logowithtext.png"

const Support = () => {
  const [isStyleVisible, setIsStyleVisible] = useState(false);
  const toggleStyle = () => {
    setIsStyleVisible(!isStyleVisible);
  };
  const [isStyleVisible1, setIsStyleVisible1] = useState(false);
  const toggleStyle1 = () => {
    setIsStyleVisible1(!isStyleVisible1);
  };
  const [isStyleVisible2, setIsStyleVisible2] = useState(false);
  const toggleStyle2 = () => {
    setIsStyleVisible2(!isStyleVisible2);
  };
  const [isStyleVisible3, setIsStyleVisible3] = useState(false);
  const toggleStyle3 = () => {
    setIsStyleVisible3(!isStyleVisible3);
  };
  const [isStyleVisible4, setIsStyleVisible4] = useState(false);
  const toggleStyle4 = () => {
    setIsStyleVisible4(!isStyleVisible4);
  };
  const [isStyleVisible5, setIsStyleVisible5] = useState(false);
  const toggleStyle5 = () => {
    setIsStyleVisible5(!isStyleVisible5);
  };
  const handleImageClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=918591975256&text&type=phone_number&app_absent=0")
  }

  return (
    <div style={{ backgroundColor: "#f5f5f5" , marginTop:"-30px", marginBottom:"-25px" }}>
      <div  className="big-container" style={{ width: "75%", margin: "30px auto", minHeight: "100vh"}}>
        <h1 style={{ fontSize: "45px", marginBottom: "1rem",padding:"15px"}}>
          Customer Service
        </h1>
        <p style={{ fontSize: "18px", marginLeft: "2.5rem", fontWeight: "bold" }}>
          {" "}
          We are here to help!{" "}
        </p>
        <div className="logo"
        style={{ display: "flex", gap: "4.5rem" }}>
          <div className="logo1"
          >
            <div>
              <img
                src={mlogo}
                alt="message icon"
                onClick={handleImageClick}
                style={{
                  width: "80px",
                  height: "80px",
                  flex: "1",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                  marginLeft: "0.8rem",
                  marginRight: "0.5rem",
                }}
              />
            </div>
            <div>
              <div className="text1">
              <p
                style={{
                  flex: "2",
                  marginLeft: "9rem",
                  fontWeight: "bold",
                  marginTop: "0.5rem",
                }}
              >
                Text Us
              </p>
              </div>
              <p
                style={{
                  marginLeft: "1.8rem",
                  marginTop: "0.3rem",
                  marginBottom: "1rem",
                }}
              >
                Feel free to reach out to our agents regarding your booking, and
                we'll respond promptly to assist you.
              </p>
            </div>
          </div>
          <div className="logo2"
          >
            <div>
              <img
                src={clogo}
                alt="call icon"
                style={{
                  width: "80px",
                  height: "80px",
                  flex: "1",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                  marginLeft: "0.8rem",
                  marginRight: "0.5rem",
                }}
              />
            </div>
            <div>
              <div className="text2">
              <p
                style={{
                  flex: "2",
                  marginLeft: "9rem",
                  fontWeight: "bold",
                  marginTop: "0.5rem",
                }}
              >
                Call Us
              </p>
              </div>
              <p
                style={{
                  marginLeft: "1.8rem",
                  marginTop: "0.3rem",
                  marginBottom: "1rem",
                }}
              >
                For immediate assistance, please call our 24/7 helpline at
                080480 36907. We are here to help.
              </p>
            </div>
          </div>
          <div className="logo3"
          >
            <div>
              <img
                src={plogo}
                alt="property icon"
                style={{
                  width: "80px",
                  height: "80px",
                  flex: "1",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                  marginLeft: "0.8rem",
                  marginRight: "0.5rem",
                }}
              />
            </div>
            <div>
              <div className="text3">
              <p
                style={{
                  flex: "2",
                  marginLeft: "3rem",
                  fontWeight: "bold",
                  marginTop: "0.5rem",
                }}
              >
                Reach Out to the Property
              </p>
              </div>
              <p
                style={{
                  marginLeft: "1.8rem",
                  marginTop: "0.3rem",
                  marginBottom: "1rem",
                }}
              >
                For the most accurate information regarding your stay, our
                knowledgeable staff are your best resource.
              </p>
            </div>
          </div>
        </div>
        <h1
          style={{ fontSize: "45px", marginBottom: "1rem", marginTop: "4rem" }}
        >
          Support Hub
        </h1>
        <div style={{ display: "flex" }}>
          <img
            src={one}
            alt="no. 1 icon"
            style={{
              width: "70px",
              height: "70px",
              marginTop: "2rem",
              marginBottom: "0.5rem",
              marginLeft: "0.8rem",
              marginRight: "0.5rem",
            }}
          />
          <div>
            <p
              style={{
                fontWeight: "bold",
                marginTop: "2.7rem",
                marginLeft: "2rem",
                fontSize: "17px",
              }}
            >
              Personalized Customer Care
            </p>
            <p
              style={{
                marginTop: "0.7rem",
                marginLeft: "2rem",
                fontSize: "15.3px",
              }}
            >
              Feel free to share any issues you encounter, and we'll be here to
              offer you step-by-step guidance.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "0.8rem" }}>
          <img
            src={two}
            alt="no. 2 icon"
            style={{
              width: "70px",
              height: "70px",
              marginTop: "2rem",
              marginBottom: "0.5rem",
              marginLeft: "0.8rem",
              marginRight: "0.5rem",
            }}
          />
          <div>
            <p
              style={{
                fontWeight: "bold",
                marginTop: "2.7rem",
                marginLeft: "2rem",
                fontSize: "17px",
              }}
            >
              Available Round the Clock - Reach Out to Us Anytime
            </p>
            <p
              style={{
                marginTop: "0.7rem",
                marginLeft: "2rem",
                fontSize: "15.3px",
              }}
            >
              Effortless Communication: Message or call us anytime, our agents
              are here to assist.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "0.8rem" }}>
          <img
            src={three}
            alt="no. 2 icon"
            style={{
              width: "70px",
              height: "70px",
              marginTop: "2rem",
              marginBottom: "0.5rem",
              marginLeft: "0.8rem",
              marginRight: "0.5rem",
            }}
          />
          <div>
            <p
              style={{
                fontWeight: "bold",
                marginTop: "2.7rem",
                marginLeft: "2rem",
                fontSize: "17px",
              }}
            >
              Everything You Need in a Single Location
            </p>
            <p
              style={{
                marginTop: "0.7rem",
                marginLeft: "2rem",
                fontSize: "15.3px",
              }}
            >
              Contact the property directly for inquiries and access essential
              information regarding your stay.
            </p>
          </div>
        </div>
      </div>
      <div style={{width: "75%", margin: "30px auto", minHeight: "100vh"}}>
        <h1
          style={{ fontSize: "30px", marginBottom: "1rem", marginTop: "6rem" }}
        >
          Frequently asked questions
        </h1>  
        <div className="ques1"
            style={{
                marginLeft: "0rem",
                display: "flex",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                // width: "850px",
                // height: "120px",
                alignItems: "center",
                marginTop:"2rem"
            }} 
    >
         <div>
            <div 
            style={{display: "grid", gridTemplateColumns: "1fr auto"}}>
            <div style={{gridColumn: "1"}}>
            <p
              style={{
                fontWeight: "bold",
                // marginTop: "-0.1rem",
                marginLeft: "2rem",
                fontSize: "17px",
                marginTop: "9px"
                
              }}
            >
                Is it possible to cancel my booking? 
            </p>
            </div>
            <div className="arr1"
            style={{gridColumn: "2"}}>
            <div className="arr1">
            <ArrowDropDownIcon onClick={toggleStyle}
                 style={{
                    fontSize: "40px",
                    // marginLeft: "447px",
                 }}
            />
           </div>
            </div>       
            </div>
            <div className={isStyleVisible ? 'mystyle' : 'display-none'}>
            <p
              style={{
                marginTop: "0.7rem",
                marginLeft: "2rem",
                fontSize: "15px",
                
              }}
            >
               Yes, the cancellation fees are specified by the property and outlined in your cancellation policy. Any extra charges incurred will be settled directly with the property.
            </p>
            </div>  
          </div>
    </div>    
        <div className="ques2"
            style={{
                marginLeft: "0rem",
                display: "flex",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                // width: "850px",
                // height: "120px",
                alignItems: "center",
            }} 
    >
         <div>
            <div style={{display: "grid", gridTemplateColumns: "1fr auto"}}>
            <div style={{gridColumn: "1"}}>
            <p
              style={{
                fontWeight: "bold",
                marginLeft: "2rem",
                fontSize: "17px",
                marginTop: "9px"
                
              }}
            >
              Are there any cancellation fees associated with my booking if I need to cancel? 
            </p>
            </div>
            <div style={{gridColumn: "2"}}>
            <div className="arr2">
            <ArrowDropDownIcon onClick={toggleStyle1}
                 style={{
                    fontSize: "40px",
                    marginLeft: "102px",
                 }}
            />
            </div>
            </div>       
            </div>
            <div className={isStyleVisible1 ? 'mystyle' : 'display-none'}>
            <p
              style={{
                marginTop: "0.7rem",
                marginLeft: "2rem",
                fontSize: "15px",
              }}
            >
              If your booking includes free cancellation, no cancellation fee will be charged. However, if your booking is no longer eligible for free cancellation or falls under a non-refundable policy, a cancellation fee may apply. The specific cancellation fees are determined by the property, and any additional costs will be settled directly with them.
            </p>
            </div> 
          </div>
    </div> 
    <div className="ques3"
            style={{
                marginLeft: "0rem",
                display: "flex",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                alignItems: "center",
                // width: "850px",
                // height: "120px",

            }} 
    >
         <div>
            <div style={{display: "grid", gridTemplateColumns: "1fr auto"}}>
            <div style={{gridColumn: "1"}}>
            <p
              style={{
                fontWeight: "bold",
                marginLeft: "2rem",
                fontSize: "17px",
                marginTop: "9px"
                
              }}
            >
                
                Is it possible to modify my booking, such as changing the dates of my reservation?
            </p>
            </div>
            <div style={{gridColumn: "2"}}>
            <div className="arr3">
            <ArrowDropDownIcon onClick={toggleStyle5}
                 style={{
                    fontSize: "40px",
                    marginLeft: "69px",
                 }}
            />
            </div>
            </div>       
            </div>
            <div className={isStyleVisible5 ? 'mystyle' : 'display-none'}>
            <p
              style={{
                marginTop: "0.7rem",
                marginLeft: "2rem",
                fontSize: "15px",
                
              }}
            >
                For any changes to your booking, kindly reach out to the central reservation team for assistance and support.
            </p>
            </div>  
          </div>
    </div>    
        <div className="ques4"
            style={{
                marginLeft: "0rem",
                display: "flex",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                // width: "850px",
                // height: "120px",
                alignItems: "center",
            }} 
    >
         <div>
            <div style={{display: "grid", gridTemplateColumns: "1fr auto"}}>
            <div style={{gridColumn: "1"}}>
            <p
              style={{
                fontWeight: "bold",
                // marginTop: "-0.1rem",
                marginLeft: "2rem",
                fontSize: "17px",
                marginTop: "9px"
                
              }}
            >
              What should I do if I cannot locate my confirmation email?
            </p>
            </div>
            <div style={{gridColumn: "2"}}>
            <div className="arr4">
            <ArrowDropDownIcon onClick={toggleStyle4}
                 style={{
                    fontSize: "40px",
                    marginLeft: "273px",
                 }}
            />
            </div>
            </div>       
            </div>
            <div className={isStyleVisible4 ? 'mystyle' : 'display-none'}>
            <p
              style={{
                marginTop: "0.7rem",
                marginLeft: "2rem",
                fontSize: "15px",
              }}
            >
              Please check your email inbox, including spam and junk folders. If you cannot find your confirmation email, visit wbhotels.in/help to request a resend.
            </p>
            </div> 
          </div>
    </div> 
    <div className="ques5"
            style={{
                marginLeft: "0rem",
                display: "flex",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                // width: "850px",
                // height: "120px",
                alignItems: "center",
            }} 
    >
         <div>
            <div style={{display: "grid", gridTemplateColumns: "1fr auto"}}>
            <div style={{gridColumn: "1"}}>
            <p
              style={{
                fontWeight: "bold",
                // marginTop: "-0.1rem",
                marginLeft: "2rem",
                fontSize: "17px",
                marginTop: "9px"
                
              }}
            >
              How can I determine if the property allows pets?
            </p>
            </div>
            <div style={{gridColumn: "2"}}>
            <div className="arr5">
            <ArrowDropDownIcon onClick={toggleStyle2}
                 style={{
                    fontSize: "40px",
                    marginLeft: "355px",
                 }}
            />
            </div>
            </div>       
            </div>
            <div className={isStyleVisible2 ? 'mystyle' : 'display-none'}>
            <p
              style={{
                marginTop: "0.7rem",
                marginLeft: "2rem",
                fontSize: "15px",
                
              }}
            >           
            To find out if pets are allowed, please refer to the property's page and review the "House rules" section where the pet policies are usually provided.
            </p>
            </div>  
          </div>
    </div>    
        <div className="ques6"
            style={{
                marginLeft: "0rem",
                display: "flex",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                // width: "850px",
                // height: "120px",
                alignItems: "center",
            }} 
    >
         <div>
            <div style={{display: "grid", gridTemplateColumns: "1fr auto"}}>
            <div style={{gridColumn: "1"}}>
            <p
              style={{
                fontWeight: "bold",
                // marginTop: "-0.1rem",
                marginLeft: "2rem",
                fontSize: "17px",
                marginTop: "9px"
                
              }}
            >
              Is it possible to make a reservation without providing a credit card?
            </p>
            </div>
            <div style={{gridColumn: "2"}}>
            <div className="arr6">
            <ArrowDropDownIcon onClick={toggleStyle3}
                 style={{
                    fontSize: "40px",
                    marginLeft: "200px",
                 }}
            />
            </div>
            </div>       
            </div>
            <div className={isStyleVisible3 ? 'mystyle' : 'display-none'}>
            <p
              style={{
                marginTop: "0.7rem",
                marginLeft: "2rem",
                fontSize: "15px",
              }}
            >
              The ability to make a reservation without a credit card varies depending on the hotel's policies. It is advisable to check directly with the hotel to inquire about alternative payment options.
            </p>
            </div> 
          </div>
    </div>  
    </div>    
    </div>
    
  );
};

export default Support;
