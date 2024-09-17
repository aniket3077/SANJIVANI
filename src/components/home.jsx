import { memo } from "react";
import PropTypes from "prop-types";
import "./home.css";

const Home = memo(({ className = "" }) => {
  return <a className={`home ${className}`}>Home</a>;
});

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
