import { memo } from "react";
import PropTypes from "prop-types";
import "./dark-medium-weather.css";

const DarkMediumWeather = memo(({ className = "" }) => {
  return (
    <div className={`dark-medium-weather ${className}`}>
      <div className="weather-container">
        <div className="friday-wrapper">
          <div className="friday">Friday</div>
        </div>
        <div className="frame-parent">
          <div className="wind-direction-parent">
            <img
              className="wind-direction-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className="kmh">28 km/h</div>
          </div>
          <div className="temperature-icon-parent">
            <img
              className="temperature-icon"
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
            <div className="temperature-value">
              <div className="temperature-number">42%</div>
            </div>
          </div>
        </div>
        <img
          className="subtract-icon"
          loading="lazy"
          alt=""
          src="/subtract@2x.png"
        />
      </div>
      <div className="location-container-parent">
        <div className="location-container">
          <div className="location-details">
            <div className="location-info">
              <div className="updated-time">
                <div className="parent1">
                  <b className="b4">26</b>
                  <div className="updated-icon" />
                </div>
                <div className="last-updated-parent">
                  <div className="last-updated">Last updated</div>
                  <div className="div">11:45</div>
                </div>
              </div>
              <div className="iconlylight-outlinelocation-parent">
                <img
                  className="iconlylight-outlinelocation"
                  loading="lazy"
                  alt=""
                  src="/iconlylight-outlinelocation.svg"
                />
                <div className="location-name">
                  <div className="usanew-york">USA,New York</div>
                </div>
              </div>
            </div>
            <div className="frame-group">
              <div className="high-temp-label-parent">
                <div className="high-temp-label">
                  <b className="h">H</b>
                </div>
                <img
                  className="frame-child2"
                  loading="lazy"
                  alt=""
                  src="/group-40.svg"
                />
              </div>
              <div className="low-temp-label-parent">
                <div className="low-temp-label">
                  <b className="l">L</b>
                </div>
                <div className="low-temp-separator-parent">
                  <b className="low-temp-separator-container">
                    <span>30</span>
                    <span className="span">{` `}</span>
                  </b>
                  <div className="frame-wrapper">
                    <div className="low-temp-icon-value-parent">
                      <b className="low-temp-icon-container">
                        <span>
                          <span>20</span>
                          <span className="span1">{`  `}</span>
                        </span>
                      </b>
                      <div className="low-temp-icon">
                        <img
                          className="low-temp-icon-child"
                          loading="lazy"
                          alt=""
                          src="/group-38.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear">Clear</div>
      </div>
    </div>
  );
});

DarkMediumWeather.propTypes = {
  className: PropTypes.string,
};

export default DarkMediumWeather;
