import React from "react";
import "./investorRelation.css";

const InvestorRelation = () => {
  return (
    <>
      {/* div1 start from here */}
      <div className="section-block">
        <div className="section-inner section-fit section-relative">
          <div className="widget investor-bg-img headline  ">
            <div className="contents">
              <h1 className="investor-heading">What We Do</h1>
            </div>
            <div className="inverstor-main-content">
              <p className="investor-para">
                WB Hotels is a global platform that empowers entrepreneurs small
                and medium businesses with hotels and homes by providing
                full-stack technology called RateBotAI with idea to operate
                hotel front desk remotely with 24/7 dedicated tech team based at
                our corporate office in Mumbai . Our proprietary technology
                helps hotels to increase revenue and reduces operating cost by
                omitting front desk hassle with web check in facility , bringing
                easy-to-book, affordable, and trusted accommodation to customers
                around the world. WB Hotels offers 100+ integrated products and
                solutions to patrons who operate over 1700+ Hotels , 45000+
                Rooms across 200+ destination and 2 counties. We are committed
                to provide world class technology to hotelier on most
                competitive pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* div1 end here */}

      {/* div2 start from here */}
      <div class="contents-inv-rel">
        <h1 class="x_7b2817bf">Financial Documents and Downloads</h1>
        <h2 className="annual-report">Annual Report</h2>
        <p className="coming-soon">coming soon....</p>
      </div>
      {/* div2 end here */}

      {/* div3 start from here */}
      <div className="investorRelation-contact">
        <h1>Contact Us</h1>
        <p>For Investor Queries and Grievance Redressal</p>
        <h4>Chandan Pandey</h4>
        <p>Director</p>
        <p>
          {" "}
          <strong>Address</strong>
        </p>
        <p>
          WB Hotels & Resorts, A007, Kanakia Boomerang, Chandivali, Powai,
          Mumbai -400072
        </p>
        <p>
          <strong>Phone Number</strong>
        </p>
        <p>+91 8048036907</p>
        <p>
          <strong>Email</strong>
        </p>
        <p>chandan.pandey@wbhotels.in</p>
      </div>
      {/* div3 end here */}
    </>
  );
};

export default InvestorRelation;
