"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import EyesCursor from "./EyesCursor/EyesCursor";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const eyesRef = useRef<HTMLDivElement | null>(null);
  const [showEyes, setShowEyes] = useState(false);

  useGSAP(() => {
    if (!eyesRef.current) {
      console.warn("eyesRef is null!");
      return;
    }

    gsap.set([eyesRef.current], {
      xPercent: -50,
      yPercent: -50,
    });

    gsap.set(eyesRef.current, { scale: 0, opacity: 0 });

    const eyesX = gsap.quickTo(eyesRef.current, "x", { duration: 0.6 });
    const eyesY = gsap.quickTo(eyesRef.current, "y", { duration: 0.6 });

    const move = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      eyesX(clientX);
      eyesY(clientY + 40);
    };

    const toggleEyes = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      const show = customEvent.detail;

      if (show) {
        setShowEyes(true);
        gsap.to(eyesRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "bounce.out",
        });
      } else {
        setShowEyes(false);
        gsap.to(eyesRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("show-eyes-cursor", toggleEyes);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("show-eyes-cursor", toggleEyes);
    };
  }, []);

  return (
    <div>
      <EyesCursor ref={eyesRef} />
    </div>
  );
};

export default CustomCursor;
