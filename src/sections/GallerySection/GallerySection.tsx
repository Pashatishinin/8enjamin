"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SanityDocument } from "next-sanity";
import PhotoCard from "@/components/ui/PhotoCard";

gsap.registerPlugin(ScrollTrigger);

type GalleryItem = SanityDocument & { imageUrl: string | null };

interface GallerySectionProps {
  post: GalleryItem[];
}

const GallerySection = ({ post }: GallerySectionProps) => {
  // console.log("MESSAGE", post);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousTouch = useRef<Touch | null>(null);
  let highestZIndex = 1;

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const pictures =
        containerRef.current.querySelectorAll<HTMLDivElement>(".photo_card");

      pictures.forEach((picture) => {
        const range = 100;
        const randomMultiplier = Math.random() * 10 - 5;
        const randomX = Math.random() * (range * randomMultiplier) - range;
        const randomY = Math.random() * (range * 2) - range;
        const randomRotate = Math.random() * 20 - 10;

        picture.style.top = `${randomY}px`;
        picture.style.left = `${randomX}px`;
        picture.style.transform = `rotate(${randomRotate}deg)`;

        const dirX = (Math.random() - 0.5) * 3000;
        const dirY = (Math.random() - 0.5) * 3000;
        const startRotate = randomRotate + (Math.random() * 60 - 30);

        gsap.fromTo(
          picture,
          {
            x: dirX,
            y: dirY,
            opacity: 1,
            rotate: startRotate,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: randomRotate,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );

        const updateElementPosition = (event: MouseEvent | TouchEvent) => {
          let movementX = 0,
            movementY = 0;

          if (event.type === "touchmove") {
            const touch = (event as TouchEvent).touches[0];
            if (previousTouch.current) {
              movementX = touch.clientX - previousTouch.current.clientX;
              movementY = touch.clientY - previousTouch.current.clientY;
            }
            previousTouch.current = touch;
          } else {
            const mouseEvent = event as MouseEvent;
            movementX = mouseEvent.movementX;
            movementY = mouseEvent.movementY;
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
          picture.style.zIndex = (++highestZIndex).toString();
          if (event.type === "touchstart") {
            previousTouch.current = (event as TouchEvent).touches[0];
          }

          document.addEventListener("mousemove", updateElementPosition);
          document.addEventListener("touchmove", updateElementPosition);
          document.addEventListener("mouseup", stopDrag);
          document.addEventListener("touchend", stopDrag);
        };

        picture.addEventListener("mousedown", startDrag);
        picture.addEventListener("touchstart", startDrag);
      });
    },
    { scope: containerRef }
  ); // ⬅️ указываем DOM scope

  return (
    <section
      id="gallery"
      className="bg-[#fbf4f9] relative py-[190px] px-[130px] h-[100vh] w-[100vw]"
    >
      <div
        className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
        ref={containerRef}
      >
        {post.map((photo, index) => (
          <PhotoCard
            key={photo._id ?? index}
            date={photo.title}
            img={photo.imageUrl ?? ""}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
