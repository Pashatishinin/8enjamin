import React, { forwardRef } from "react";
import styles from "./EyesCursor.module.scss";

type EyesCursorProps = {
  style?: React.CSSProperties;
  className?: string;
};

const EyesCursor = forwardRef<HTMLDivElement, EyesCursorProps>(
  ({ style, className = "" }, ref) => {
    return (
      <div
        className={`flex gap-0.5 justify-center items-end fixed top-0 left-0 pointer-events-none z-[9999] origin-center ${className}`}
        ref={ref}
        style={style}
      >
        <div className={`${styles.lefteye} relative bg-white w-5 h-8`}>
          <div
            className={`${styles.eye}  absolute bg-[#5a4f84] w-2 h-2 rounded-4xl bottom-1 left-1`}
          ></div>
        </div>
        <div className={`${styles.righteye} relative bg-white w-5 h-10`}>
          <div
            className={`${styles.eye}  absolute bg-[#5a4f84] w-2 h-2 rounded-4xl bottom-1 left-1`}
          ></div>
        </div>
      </div>
    );
  }
);

export default EyesCursor;
