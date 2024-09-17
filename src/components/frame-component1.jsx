import { memo } from "react";
import PluginFileCover from "./plugin-file-cover";
import PropTypes from "prop-types";
import "./frame-component1.css";

const FrameComponent1 = memo(({ className = "" }) => {
  return (
    <section className={`file-upload ${className}`}>
      <PluginFileCover />
    </section>
  );
});

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
