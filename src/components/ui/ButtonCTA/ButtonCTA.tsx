"use client";

import GsapMagnetic from "../../animation/GsapMagnetic";

import styles from "./ButtonCTA.module.scss";

type Props = {
  title?: string;
  link?: string;
};

const ButtonCTA = ({ title = "GO SHOPPING", link = "#" }: Props) => {
  // console.log("MESSAGE" + GsapMagnetic);
  const handleMouseEnter = () => {
    const event = new CustomEvent("show-eyes-cursor", { detail: true });
    window.dispatchEvent(event);
  };

  const handleMouseLeave = () => {
    const event = new CustomEvent("show-eyes-cursor", { detail: false });
    window.dispatchEvent(event);
  };

  return (
    <>
      <GsapMagnetic>
        <a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href={link}
          className={`${styles.btn} relative inline-block py-3 px-5 text-[#fbf4f9] rounded-xl tracking-widest text-base border border-solid border-[#9189cb]`}
          data-cursor="eye"
          target="_blank"
        >
          {title}
        </a>
      </GsapMagnetic>
    </>
  );
};
export default ButtonCTA;
