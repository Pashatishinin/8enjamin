"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Img1 from "../../assets/photos/about-me/about.png";
// import Img2 from "../../assets/photos/about-me/about-2.jpg";
// import Img3 from "../../assets/photos/about-me/about-3.jpg";
// import Img4 from "../../assets/photos/about-me/about-4.jpg";

import PhotoCard from "../ui/PhotoCard";
import { StaticImageData } from "next/image";

gsap.registerPlugin(ScrollTrigger);

// const defaultPhotos = [Img1, Img2, Img3, Img4];

type Props = {
  photoslist?: string[];
};

const DragablePhotos = ({ photoslist = [] }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousTouch = useRef<Touch | null>(null);
  let highestZIndex = 1;

  useGSAP(
    () => {
      const pictures =
        containerRef.current?.querySelectorAll<HTMLDivElement>(".photo_card") ||
        [];

      pictures.forEach((picture, index) => {
        const range = 10;
        const randomMultiplier = Math.random() * 10 - 5;
        const randomX = Math.random() * (range * randomMultiplier) - range;
        const randomRotate = Math.random() * 20 - 10;

        picture.style.left = `${randomX}px`;
        picture.style.transform = `rotate(${randomRotate}deg)`;

        gsap.from(picture, {
          x: -2000,
          rotate: 5,
          duration: 1.2,
          delay: index * 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: picture,
            start: "top 60%",
            end: "top 40%",
            toggleActions: "play none none none",
            scrub: false,
          },
        });

        const updateElementPosition = (event: MouseEvent | TouchEvent) => {
          let movementX = 0;
          let movementY = 0;

          if (event.type === "touchmove") {
            const touch = (event as TouchEvent).touches[0];
            if (previousTouch.current) {
              movementX = touch.clientX - previousTouch.current.clientX;
              movementY = touch.clientY - previousTouch.current.clientY;
            }
            previousTouch.current = touch;
          } else {
            movementX = (event as MouseEvent).movementX;
            movementY = (event as MouseEvent).movementY;
          }

          const currentTop = parseFloat(picture.style.top || "0");
          const currentLeft = parseFloat(picture.style.left || "0");

          picture.style.top = `${currentTop + movementY}px`;
          picture.style.left = `${currentLeft + movementX}px`;
        };

        const stopDrag = () => {
          document.removeEventListener("mousemove", updateElementPosition);
          document.removeEventListener("touchmove", updateElementPosition);
          document.removeEventListener("mouseup", stopDrag);
          document.removeEventListener("touchend", stopDrag);
          previousTouch.current = null;
        };

        const startDrag = (event: MouseEvent | TouchEvent) => {
          picture.style.zIndex = `${++highestZIndex}`;
          if (event.type === "touchstart") {
            previousTouch.current = (event as TouchEvent).touches[0];
          }

          document.addEventListener("mousemove", updateElementPosition);
          document.addEventListener("touchmove", updateElementPosition);
          document.addEventListener("mouseup", stopDrag);
          document.addEventListener("touchend", stopDrag);
        };

        picture.addEventListener("mousedown", startDrag as EventListener);
        picture.addEventListener("touchstart", startDrag as EventListener);
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="absolute top-1/2 left-1/2" ref={containerRef}>
      {photoslist &&
        photoslist.map((photo, index) => <PhotoCard key={index} img={photo} />)}
    </div>
  );
};

export default DragablePhotos;
