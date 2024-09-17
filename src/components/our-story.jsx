import { memo } from "react";
import PropTypes from "prop-types";
import "./our-story.css";

const OurStory = memo(({ className = "" }) => {
  return (
    <div className={`our-story ${className}`}>
      <div className="story-paragraph">
        <h1 className="our-commitment-to">
          Our commitment to Agriculture: Harnessing AI for Healthy Crops and a
          Sustainable Future.
        </h1>
        <div className="agricultural-challenges-know-n-wrapper">
          <div className="agricultural-challenges-know">
            Agricultural challenges know no borders. Using the universal
            language of technology, we empower farmers to protect crops and
            ensure a sustainable future.
          </div>
        </div>
        <div className="story-paragraph-inner">
          <button className="group-button">
            <div className="frame-item" />
            <div className="get-started">Get Started</div>
          </button>
        </div>
      </div>
      <div className="our-story-inner">
        <div className="frame-div">
          <img className="frame-inner" alt="" src="/rectangle-10@2x.png" />
          <div className="frame-child1" />
        </div>
      </div>
    </div>
  );
});

OurStory.propTypes = {
  className: PropTypes.string,
};

export default OurStory;
