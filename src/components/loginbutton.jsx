import { memo } from "react";
import PropTypes from "prop-types";
import "./loginbutton.css";

const Loginbutton = memo(({ className = "" }) => {
  return <div className={`navbar-buttons-child ${className}`} />;
});

Loginbutton.propTypes = {
  className: PropTypes.string,
};

export default Loginbutton;
