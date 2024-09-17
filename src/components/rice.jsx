import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import "./rice.css";

const Rice = memo(
  ({
    className = "",
    propLeft,
    rectangle10,
    propLeft1,
    healthyCrops,
    propLeft2,
    propWidth,
    earlyDiseaseDetectionAndManagem,
  }) => {
    const riceStyle = useMemo(() => {
      return {
        left: propLeft,
      };
    }, [propLeft]);

    const rectangleIconStyle = useMemo(() => {
      return {
        left: propLeft1,
      };
    }, [propLeft1]);

    const healthyCropsStyle = useMemo(() => {
      return {
        left: propLeft2,
        width: propWidth,
      };
    }, [propLeft2, propWidth]);

    return (
      <div className={`rice ${className}`} style={riceStyle}>
        <div className="rice-child" />
        <img
          className="rice-item"
          alt=""
          src={rectangle10}
          style={rectangleIconStyle}
        />
        <div className="healthy-crops" style={healthyCropsStyle}>
          {healthyCrops}
        </div>
        <div className="early-disease-detection">
          {earlyDiseaseDetectionAndManagem}
        </div>
      </div>
    );
  }
);

Rice.propTypes = {
  className: PropTypes.string,
  rectangle10: PropTypes.string,
  healthyCrops: PropTypes.string,
  earlyDiseaseDetectionAndManagem: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propLeft1: PropTypes.any,
  propLeft2: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Rice;
