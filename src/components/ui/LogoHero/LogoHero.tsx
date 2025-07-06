"use client";
import { useRef } from "react";

import Logo from "../../../../public/logo_hero.png";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LogoHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.from(
      containerRef.current,

      {
        yPercent: -100,
        ease: "elastic.out(0.2, 0.1)",
        duration: 2,
      }
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const logo = logoRef.current;
    if (!logo) return;
    const rect = logo.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * 40;
    const rotateY = (x / rect.width) * 40;

    logo.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const logo = logoRef.current;
    if (!logo) return;
    logo.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className="container2"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={Logo} alt="logo" className="logo" ref={logoRef} />
    </div>
  );
};

export default LogoHero;
