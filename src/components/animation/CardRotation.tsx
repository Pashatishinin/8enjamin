import React, { useRef, ReactElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ limitCallbacks: true });

type CardRotationProps = {
  children: ReactElement<any>;
  delay?: number;
};

const CardRotation: React.FC<CardRotationProps> = ({ children, delay = 0 }) => {
  const bestSelRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!bestSelRef.current) return;

    const cards = bestSelRef.current.querySelectorAll(".card");

    return gsap.fromTo(
      cards,
      { y: 200, rotateY: 180 },
      {
        rotateY: 0,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "elastic.out",
        scrollTrigger: {
          trigger: bestSelRef.current,
          start: `${delay * 200}px 60%`,
          end: "60% 80%",
          scrub: true,
          markers: true,
        },
      }
    );
  }, [delay]);

  return React.cloneElement(children, {
    ref: bestSelRef,
  });
};

export default CardRotation;
