import { memo } from "react";
import PropTypes from "prop-types";
import "./elevated.css";

const Elevated = memo(({ className = "" }) => {
  return (
    <button className={`elevated ${className}`}>
      <img className="favorite-icon" alt="" src />
      <div className="label">Diagnose Now</div>
    </button>
  );
});

Elevated.propTypes = {
  className: PropTypes.string,
};

export default Elevated;
