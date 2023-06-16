import "./career.css";
import img from "../../media/images/logowithtext.png";

const Careers = () => {
  return (
    <>
      {/* div1 start from here */}
      <div className="career-banner">
        <div className="newlook-caption-title">
          <h1>WB Hotels & Resorts Careers</h1>
        </div>
      </div>
      {/* div1 end here */}

      {/* div2 start from here */}
      <div className="newlook-footerPage-nav">
        <ul className="newlook-footerPage-nav-container">
          <li className="newlook-footerPage-nav-item  checked">
            <a href="">Careers</a>
          </li>
          <li className="newlook-footerPage-nav-item">
            <a
              href="https://www.linkedin.com/company/wb-hotels-resorts/?originalSubdomain=in"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
      {/* div2 end here */}

      {/* div3 start from here */}
      <div className="newlook-memberrewards-content-main">
        <div className="newlook-memberrewards-content">
          <div className="rich-text-content readmore__content">
            <h4>Careers at WB Hotels & Resorts</h4>
            <p>
              <strong>
                At WB Hotels & Resorts, our aim is for you to have a career that
                brings you so much satisfaction that you can't help but talk
                about it.
              </strong>
            </p>
            <p>&nbsp;</p>
            <p>
              Being at the forefront of the hospitality technology industry, WB
              Hotels & Resorts is committed to recruiting top-tier professionals
              who can provide unparalleled services and enhance the experience
              of our guests and hotel owners with exceptional value.{" "}
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>
                If you possess a genuine passion for hospitality, a warm and
                welcoming nature, and a consistent desire to go the extra mile
                for others, there's a potential role for you at WB Hotels &
                Resorts.
              </strong>
            </p>
          </div>

          <div className="newlook-memberrewards-image"></div>
        </div>
      </div>
      {/* div3 end here */}

      {/* div4 start from here */}

      <div className="newlook-memberrewards-content-main">
        <div className="newlook-memberrewards-content">
          <div className="newlook-memberrewards-community-image"></div>

          <div className="rich-text-content readmore__content">
            <h4>Be part of our community</h4>
            <p>
              <strong>
                Being a part of our team at WB Hotels & Resorts is akin to
                belonging to a global community that prioritizes both people and
                the environment. By taking care of both, we foster a culture of
                success and achievement.
              </strong>
            </p>
            <p>&nbsp;</p>
            <p>
              At WB Hotels & Resorts, we uphold the belief in acknowledging
              familiar faces, embracing newcomers, and treating everyone we
              encounter with the same kindness and respect that we would expect
              for ourselves.
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>
                Regardless of whether you are an employee, a guest on a journey,
                or an explorer discovering new experiences with us, our goal at
                WB Hotels & Resorts is to craft lasting impressions that will
                stay with you throughout your lifetime.
              </strong>
            </p>
          </div>
        </div>
      </div>
      {/* div4 end here */}

      {/* div5 start from here */}
      <div className="newlook-memberrewards-content-main">
        <div className="newlook-memberrewards-content">
          <div className="rich-text-content readmore__content">
            <h4>Commitment to our people</h4>
            <p>
              <strong>
                Irrespective of your background, at WB Hotels & Resorts, we
                encourage you to explore, rediscover, and nurture your passion.
                Guiding our team members on a transformative journey, our aim is
                to present you with challenges that push you to achieve your
                utmost potential.
              </strong>
            </p>
            <p>&nbsp;</p>
          </div>

          <div className="newlook-memberrewards-commitment-image"></div>
        </div>
      </div>
      {/* div5 end here */}

      {/* div6 start from here */}

      <div className="newlook-memberrewards-content-main">
        <div className="newlook-memberrewards-content">
          <div className="newlook-memberrewards-driving-image"></div>

          <div className="rich-text-content readmore__content">
            <h4>Driving hospitality experience together</h4>
            <p>
              <strong>
                As a prominent global player in the hospitality technology
                industry, we offer a diverse range of preferred destinations
                worldwide. Our unwavering commitment lies in providing
                extraordinary and distinctive experiences to customers from
                every background, reflecting our dedication to delivering
                unparalleled service.
              </strong>
            </p>
            <p>&nbsp;</p>
            <p>
              To create an unforgettable experience for all our guests and hotel
              owners, we understand the importance of fostering a welcoming
              environment within our team and workplaces. We strive to ensure
              that every individual feels embraced and valued, enabling them to
              contribute their utmost capabilities and make a meaningful impact.
            </p>
            <p>&nbsp;</p>
            <p>
              If you share our values and vision, we invite you to join our
              family and become part of a like-minded community today.
            </p>
          </div>
        </div>
      </div>
      {/* div6 end here */}

      {/* div7 start from here */}
      <div className="newlook-careers-hero-bar">
        <div className="newlook-careers-hero-bar-wrapper">
          <div className="newlook-careers-hero-bar-item">
            <div className="m4b-homepage-hero-bar-name">
              Find us on LinkedIn
            </div>
            <div className="m4b-homepage-hero-bar-desc">
              Wherever you may be based, search for opportunities and find out
              more on LinkedIn.{" "}
            </div>
          </div>
          <div className="newlook-careers-hero-bar-item">
            <a
              href="https://www.linkedin.com/company/wb-hotels-resorts/?originalSubdomain=in"
              className="m4b-homepage-hero-bar-link"
              target="_blank"
            >
              Search Now
            </a>
          </div>
        </div>
      </div>
      {/* div7 end here */}

      <div className="logo-region">
        <img alt="WbHotel" src={img}></img>
      </div>
      {/* div8 end here. */}

      <div className="career-font">
        <div className="font-">Looking for a change?</div>
        <div className="font-semibold ">We are hiring!</div>
        <div className="font-normal">
          We are looking for talented engineers and <br></br> designers who can
          help us build future data platforms. <br></br> Send us your resume to{" "}
          <br></br> <div className="wb-hotel">WB Hotels & Resorts</div>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/company/wb-hotels-resorts/?originalSubdomain=in"
            className="career-btn"
          >
            I want to join!
          </a>
        </div>
      </div>
    </>
  );
};
export default Careers;
