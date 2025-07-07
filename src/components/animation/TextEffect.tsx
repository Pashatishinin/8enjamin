"use client";

import React, {
  useRef,
  ReactNode,
  ReactElement,
  cloneElement,
  isValidElement,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface TextEffectProps {
  children: ReactElement<any>;
  animateOnScroll?: boolean;
  delay?: number;
}

const TextEffect = ({
  children,
  animateOnScroll = true,
  delay = 0,
}: TextEffectProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const splitRefs = useRef<SplitType[]>([]);
  const lines = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      document.fonts.ready.then(() => {
        splitRefs.current = [];
        lines.current = [];

        const split = new SplitType(containerRef.current!, {
          types: "lines",
          lineClass: "line++",
        });

        splitRefs.current.push(split);
        lines.current.push(...(split.lines as HTMLElement[]));

        gsap.set(lines.current, { y: "100%", opacity: 0 });

        const animationProps = {
          y: "0%",
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: "power4.out",
          delay,
        };

        if (animateOnScroll) {
          gsap.to(lines.current, {
            ...animationProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              once: true,
            },
          });
        } else {
          gsap.to(lines.current, animationProps);
        }
      });

      return () => {
        splitRefs.current.forEach((split) => split.revert());
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  return cloneElement(children, {
    ref: containerRef,
  });
};

export default TextEffect;
