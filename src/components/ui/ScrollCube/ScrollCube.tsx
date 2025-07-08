import { FaArrowLeft } from "react-icons/fa";

import styles from "./ScrollCube.module.scss";

const ScrollCube = () => {
  return (
    <div
      className="absolute left-[50%] transform -translate-x-1/2 bottom-[20vh] flex justify-center items-center
    sm:right-[5vw] sm:left-auto sm:bottom-[10vh]"
    >
      <div className="perspective-distant">
        <div className={` ${styles.cube} relative h-20 w-28`}>
          <div
            className={` ${styles.front} face front w-28 h-20 absolute bg-[#fbf4f9]/40 backdrop-blur-sm flex justify-center items-center text-[#5a4f84] border-[0.3px] border-solid border-[#fbf4f9]`}
          >
            <h4> SCROLL</h4>
          </div>
          <div
            className={` ${styles.back} face back w-28 h-20 absolute bg-[#fbf4f9]/40 backdrop-blur-sm flex justify-center items-center text-[#5a4f84] border-[0.3px] border-solid border-[#fbf4f9]`}
          >
            <h4> SCROLL</h4>
          </div>
          <div
            className={` ${styles.left} face left w-20 h-20 absolute bg-[#fbf4f9]/40 backdrop-blur-sm flex justify-center items-center text-[#5a4f84] border-[0.3px] border-solid border-[#fbf4f9]`}
          >
            <FaArrowLeft />
          </div>
          <div
            className={` ${styles.right} face right w-20 h-20 absolute bg-[#fbf4f9]/40 backdrop-blur-sm flex justify-center items-center text-[#5a4f84] border-[0.3px] border-solid border-[#fbf4f9]`}
          >
            <FaArrowLeft />
          </div>
          <div
            className={` ${styles.top} face top w-28 h-20 absolute bg-[#fbf4f9]/40 backdrop-blur-sm flex justify-center items-center text-[#5a4f84] border-[0.3px] border-solid border-[#fbf4f9]`}
          >
            <h4>DOWN</h4>
          </div>
          <div
            className={` ${styles.bottom} face bottom w-28 h-20 absolute bg-[#fbf4f9]/40 backdrop-blur-sm flex justify-center items-center text-[#5a4f84] border-[0.3px] border-solid border-[#fbf4f9]`}
          >
            <h4>DOWN</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCube;
