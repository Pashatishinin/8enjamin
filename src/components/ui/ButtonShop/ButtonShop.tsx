import GsapMagnetic from "../../animation/GsapMagnetic";

import styles from "./ButtonShop.module.scss";

const ButtonShop = ({ title = "GO SHOPPING", link = "#" }) => {
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
      <GsapMagnetic data-cursor="eye">
        <a
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          href={link}
          className={`${styles.btn} relative inline-block py-3 px-5 text-[#fbf4f9] rounded-xl tracking-widest text-base border border-solid border-[#9189cb]`}
          data-cursor="eye"
        >
          {title}
        </a>
      </GsapMagnetic>
    </>
  );
};
export default ButtonShop;
