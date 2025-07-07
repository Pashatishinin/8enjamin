"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TextEffect from "../../components/animation/TextEffect";
import { SanityDocument } from "next-sanity";
import DragablePhotos from "@/components/animation/DragablePhotos";

gsap.registerPlugin(ScrollTrigger);

interface AboutSectionProps {
  post: SanityDocument | null;
  postImageUrl: [];
}

const AboutSection = ({ post, postImageUrl }: AboutSectionProps) => {
  console.log("MESSAGE", post);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(aboutRef.current, {
        borderRadius: "20px",
        scale: 0.9,
        duration: 1.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "top 40%",
        },
      });
    },
    { scope: aboutRef }
  );
  return (
    <section
      id="about"
      className="bg-[#f274ac] py-32 px-[5vw] flex flex-wrap-reverse justify-center items-center gap-[2em]"
      ref={aboutRef}
    >
      <div className="relative py-[190px] px-[130px] flex justify-center items-center w-full h-full flex-1 basis-[360px] min-w-[300px] ">
        <DragablePhotos photoslist={postImageUrl} />
      </div>

      <div className="flex-1 basis-[360px] min-w-[300px]">
        <TextEffect>
          <h2>ABOUT ME</h2>
        </TextEffect>
        <TextEffect delay={0.5}>
          <p>{post?.description || "no text"}</p>
        </TextEffect>
      </div>
    </section>
  );
};

export default AboutSection;
