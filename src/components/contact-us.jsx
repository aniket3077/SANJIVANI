import { memo } from "react";
import PropTypes from "prop-types";
import "./contact-us.css";

const ContactUs = memo(({ className = "" }) => {
  return (
    <footer className={`contact-us1 ${className}`}>
      <div className="contact-us-child" />
      <div className="contact-us2">
        <div className="contact-info">
          <div className="sanjivani-parent">
            <h2 className="sanjivani1">Sanjivani</h2>
            <div className="agricultural-challenges-know1">
              Agricultural challenges know no borders. Using the universal
              language of technology, we empower farmers to protect crops and
              ensure a sustainable future.
            </div>
          </div>
          <div className="footer-icon">
            <div className="icon1">
              <div className="frame-container">
                <div className="rectangle-parent1">
                  <div className="frame-child3" />
                  <img className="vector-icon4" alt="" src />
                </div>
                <div className="rectangle-parent2">
                  <div className="frame-child3" />
                  <img className="vector-icon4" alt="" src />
                </div>
                <div className="rectangle-parent3">
                  <div className="frame-child3" />
                  <img className="vector-icon4" alt="" src />
                </div>
                <div className="frame-wrapper1">
                  <div className="rectangle-parent1">
                    <div className="frame-child3" />
                    <img className="vector-icon7" alt="" src />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pages-link">
          <div className="pages-parent">
            <div className="pages">
              <div className="pages-title">
                <b className="pages1">Pages</b>
              </div>
              <div className="home-parent">
                <div className="log-insign-up">Home</div>
                <div className="about">About</div>
                <div className="languages1">Languages</div>
                <div className="log-insign-up">Log in/sign up</div>
              </div>
            </div>
            <div className="pages">
              <div className="pages-title">
                <h3 className="about2">About</h3>
              </div>
              <div className="service-contact">
                <div className="our-service1">Our Service</div>
                <div className="contact-us3">Contact Us</div>
                <div className="benefit-wrapper">
                  <div className="benefit1">Benefit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="whatsapp-icon"
          loading="lazy"
          alt=""
          src="/whatsapp@2x.png"
        />
        <img
          className="facebook-icon"
          loading="lazy"
          alt=""
          src="/facebook@2x.png"
        />
        <img
          className="instagram-icon"
          loading="lazy"
          alt=""
          src="/instagram@2x.png"
        />
        <img
          className="twitter-icon"
          loading="lazy"
          alt=""
          src="/twitter@2x.png"
        />
      </div>
    </footer>
  );
});

ContactUs.propTypes = {
  className: PropTypes.string,
};

export default ContactUs;
