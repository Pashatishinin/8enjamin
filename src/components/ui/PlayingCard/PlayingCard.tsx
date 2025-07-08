import logo from "../../../../public/logo_black.png";
import ButtonCTA from "../ButtonCTA/ButtonCTA";

import { forwardRef, useEffect, useRef } from "react";

import styles from "./PlayingCard.module.scss";

interface PlayingCardProps {
  title: string;
  img: string;
  link: string;
}

const PlayingCard = forwardRef<HTMLDivElement, PlayingCardProps>(
  ({ title, img, link }, ref) => {
    return (
      <div
        className="w-full h-auto max-h-[650px] min-h-[500px] aspect-[3/4]"
        ref={ref}
      >
        <div
          className={` ${styles.card}  card w-full h-full transition-all duration-500 ease-in-out`}
        >
          <div
            className={` ${styles.content} w-full max-w-[450px] min-w-[300px] mx-auto my-0 aspect-[3/4] bg-[#ff2962] rounded-3xl
          text-center overflow-hidden absolute h-full text-white`}
          >
            <div
              className={` ${styles.hover} absolute bg-white w-full h-full rounded-3xl top-1/2 left-1/2 opacity-25`}
            ></div>

            <div>
              <div className="rounded-t-[15px] h-[300px] overflow-hidden mx-[clamp(10px,2vw,20px)] mt-[clamp(10px,2vw,20px)] mb-[clamp(5px,1vw,10px)] border-[0.5px] border-solid border-[#a4a1d8]">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <h3>{title}</h3>
            </div>

            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2">
              <ButtonCTA title={"READ MORE"} link={link} />
            </div>
          </div>
          <div
            className={` ${styles.contentback} w-full max-w-[450px] min-w-[300px] mx-auto my-0 aspect-[3/4] bg-[#ff2962] rounded-3xl
          absolute h-full text-white `}
          >
            <div
              className={` ${styles.hover} absolute bg-white w-full h-full rounded-3xl top-1/2 left-1/2 opacity-25`}
            ></div>
            <div
              className={` ${styles.inside} 
            w-[90%] h-[91%] top-1/2 left-1/2 absolute rounded-2xl blur-[1px] flex flex-col justify-between p-[30px] `}
            >
              <img className="w-[60%] mx-auto " src={logo.src} alt="" />
              <img
                className="w-[60%] rotate-180 flex justify-center"
                src={logo.src}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default PlayingCard;
