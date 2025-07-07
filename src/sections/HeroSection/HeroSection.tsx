"use client";

import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../../../8enjamin-studio/sanity-ulits";
import LogoHero from "@/components/ui/LogoHero/LogoHero";
import ScrollCube from "@/components/ui/ScrollCube/ScrollCube";
import ButtonShop from "@/components/ui/ButtonShop/ButtonShop";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import styles from "./HeroSection.module.scss";

interface HeroSectionProps {
  post: SanityDocument | null;
  postImageUrl: string | null;
}

export default function HeroSection({ post, postImageUrl }: HeroSectionProps) {
  useGSAP(() => {
    gsap.fromTo(
      "#bg",
      {
        scale: 1,
      },
      {
        scale: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      "#logohero",
      {
        scale: 1,
      },
      {
        scale: 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="sticky top-0 h-screen flex flex-col items-center justify-center "
    >
      {postImageUrl ? (
        <img
          id="bg"
          loading="lazy"
          src={postImageUrl}
          alt="background image"
          className={` ${styles.bg} absolute h-screen object-cover w-screen`}
        />
      ) : (
        <p>Image not found</p>
      )}
      <LogoHero />
      <div className="absolute top-[clamp(46vh,30vw+30vh,68vh)] w-full h-[40vh] text-center items-center">
        <h1 className="text-[clamp(36px,5vw+0.8rem,72px)] uppercase text-[#fbf4f9] tracking-widest">
          {post?.title || "No title"}
        </h1>
        <ButtonShop link={post?.link} />
      </div>

      <ScrollCube />
    </section>
  );
}
