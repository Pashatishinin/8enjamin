"use client";
import React, { useRef, ReactElement, cloneElement } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface GsapMagneticProps {
  children: ReactElement<any>;
}

export default function GsapMagnetic({ children }: GsapMagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);
  const frameId = useRef<number | null>(null);
  const last = useRef({ x: 0, y: 0 });

  useGSAP(() => {
    if (!ref.current) return;

    xTo.current = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    yTo.current = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const mouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const rect = ref.current.getBoundingClientRect();
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);

      if (
        Math.abs(x - last.current.x) > 1 ||
        Math.abs(y - last.current.y) > 1
      ) {
        if (frameId.current) cancelAnimationFrame(frameId.current);
        frameId.current = requestAnimationFrame(() => {
          xTo.current?.(x);
          yTo.current?.(y);
        });
        last.current = { x, y };
      }
    };

    const mouseLeave = () => {
      xTo.current?.(0);
      yTo.current?.(0);
    };

    ref.current.addEventListener("mousemove", mouseMove);
    ref.current.addEventListener("mouseleave", mouseLeave);

    return () => {
      ref.current?.removeEventListener("mousemove", mouseMove);
      ref.current?.removeEventListener("mouseleave", mouseLeave);
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, []); // empty deps = run once

  return cloneElement(children, { ref });
}
