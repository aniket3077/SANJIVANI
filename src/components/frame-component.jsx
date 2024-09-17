import { memo } from "react";
import OurStory from "./our-story";
import DarkMediumWeather from "./dark-medium-weather";
import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = memo(({ className = "" }) => {
  return (
    <section className={`story-content-wrapper ${className}`}>
      <div className="story-content">
        <OurStory />
        <div className="weather-widget">
          <DarkMediumWeather />
        </div>
      </div>
    </section>
  );
});

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
