import CustomCursor from "@/components/ui/CustomCursor";
import AboutSection from "@/sections/AboutSection/AboutSection";
import BestsellersSection from "@/sections/BestsellersSection/BestsellersSection";
import FooterSection from "@/sections/FooterSection/FooterSection";
import GallerySection from "@/sections/GallerySection/GallerySection";
import HeaderSection from "@/sections/HeaderSection/HeaderSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import WorksSection from "@/sections/WorksSection/WorksSection";

import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../../8enjamin-studio/sanity-ulits";

// Sanity connect
const HERO_QUERY = `*[
  _type == "heroSection"
][0]{title, image, link}`;
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
const options = { next: { revalidate: 30 } };

const ABOUT_QUERY = `*[_type == "aboutSection"][0]{
  description,
  images[]{
    asset->{
      _id,
      url
    },
    alt
  }
}`;

export default async function Home() {
  const hero = await client.fetch<SanityDocument>(HERO_QUERY, {}, options);
  const heroImageUrl = hero?.image
    ? (urlFor(hero.image)?.url() as string | null)
    : null;

  const about = await client.fetch<SanityDocument>(ABOUT_QUERY, {}, options);
  const aboutImages =
    about?.images?.map((img: SanityImageSource) => urlFor(img)?.url() ?? "") ||
    [];

  return (
    <div>
      <CustomCursor />
      {/* <HeaderSection /> */}
      <HeroSection post={hero} postImageUrl={heroImageUrl} />
      <AboutSection post={about} postImageUrl={aboutImages} />
      <BestsellersSection />
      <WorksSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
}
