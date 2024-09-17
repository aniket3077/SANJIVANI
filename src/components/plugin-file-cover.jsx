import { memo } from "react";
import PropTypes from "prop-types";
import "./plugin-file-cover.css";

const PluginFileCover = memo(({ className = "" }) => {
  return (
    <div className={`plugin-file-cover-1 ${className}`}>
      <div className="drag-drop" />
      <div className="file-upload-container">
        <div className="upload-area">
          <div className="ant-designcloud-upload-outlin-wrapper">
            <img
              className="ant-designcloud-upload-outlin-icon"
              loading="lazy"
              alt=""
              src="/antdesignclouduploadoutlined.svg"
            />
          </div>
          <div className="drag-and-drop1">Drag and Drop here</div>
          <div className="upload-label">
            <div className="or-wrapper">
              <div className="or">or</div>
            </div>
          </div>
          <button className="select-file-button">
            <div className="select-file">Select file</div>
          </button>
        </div>
        <div className="drag-drop-area">
          <div className="drag-drop-background" />
          <h1 className="drag-and-drop2">Drag and Drop + File Upload</h1>
        </div>
      </div>
      <div className="file-upload-02">
        <div className="upload-file">UPLOAD FILE</div>
      </div>
    </div>
  );
});

PluginFileCover.propTypes = {
  className: PropTypes.string,
};

export default PluginFileCover;
