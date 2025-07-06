import React, { forwardRef } from "react";
import "./EyesCursor.scss";

const EyesCursor = forwardRef(({ style, className }, ref) => {
  return (
    <div className={`eyes ${className || ""}`} ref={ref}>
      <div className="left-eye">
        <div className="eye"></div>
      </div>
      <div className="right-eye">
        <div className="eye"></div>
      </div>
    </div>
  );
});

export default EyesCursor;
