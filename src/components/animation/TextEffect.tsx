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
  children: ReactElement<any>; // строго ReactElement
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

      // Ждём полной загрузки шрифтов
      document.fonts.ready.then(() => {
        splitRefs.current = [];
        lines.current = [];

        const elements = containerRef.current?.hasAttribute("data-copy-wrapper")
          ? Array.from(containerRef.current.children)
          : [containerRef.current];

        elements.forEach((element) => {
          const split = new SplitType(element as HTMLElement, {
            types: "lines",
            lineClass: "line++",
          });
          splitRefs.current.push(split);
          lines.current.push(...(split.lines as HTMLElement[]));
        });

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
              // markers: true,
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

  if (React.Children.count(children) === 1 && isValidElement(children)) {
    // Явно указываем, что children - это ReactElement с типом компонента string (DOM)
    return cloneElement(children as ReactElement<any, string>, {
      ref: containerRef,
    });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
};

export default TextEffect;
