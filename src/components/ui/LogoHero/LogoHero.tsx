"use client";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

import Logo from "../../../../public/logo_hero.png";

import styles from "./LogoHero.module.scss";

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
      className="relative p-4 perspective-distant items-center flex justify-center"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={Logo}
        alt="logo"
        className={` ${styles.logo} relative mt-[clamp(0vh,10vw,20vh)] mb-[30vh] w-[clamp(70%,80%,90%)]`}
        ref={logoRef}
      />
    </div>
  );
};

export default LogoHero;
