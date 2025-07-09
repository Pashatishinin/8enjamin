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

const BEST_QUERY = `*[_type == "bestsellersSection"]{title, image, link}`;

const WORKS_QUERY = `*[_type == "worksSection"]{
  title,
  description,
  images[]{
    asset->{
      _id,
      url
    }
  }
}`;

const GALLERY_QUERY = `*[_type == "gallerySection"]{title, image}`;

export default async function Home() {
  const hero = await client.fetch<SanityDocument>(HERO_QUERY, {}, options);
  const heroImageUrl = hero?.image
    ? (urlFor(hero.image)?.url() as string | null)
    : null;

  const about = await client.fetch<SanityDocument>(ABOUT_QUERY, {}, options);
  const aboutImages =
    about?.images?.map((img: SanityImageSource) => urlFor(img)?.url() ?? "") ||
    [];

  type BestsellerItem = SanityDocument & { imageUrl: string | null };
  const best = await client.fetch<SanityDocument[]>(BEST_QUERY, {}, options);

  const bestWithUrls: BestsellerItem[] = best.map((item) => ({
    ...item,
    imageUrl: item.image ? (urlFor(item.image)?.url() ?? null) : null,
  }));

  const works = await client.fetch<SanityDocument[]>(WORKS_QUERY, {}, options);
  const worksWithImageUrls = works.map((item) => ({
    ...item,
    imageUrls: item.images?.map((img: any) => urlFor(img)?.url() ?? "") ?? [],
  }));

  type GalleryItem = SanityDocument & { imageUrl: string | null };
  const gallery = await client.fetch<SanityDocument[]>(
    GALLERY_QUERY,
    {},
    options
  );
  const galleryWithUrls: GalleryItem[] = gallery.map((item) => ({
    ...item,
    imageUrl: item.image ? (urlFor(item.image)?.url() ?? null) : null,
  }));

  console.log("HELLO", galleryWithUrls);

  return (
    <div>
      <CustomCursor />
      {/* <HeaderSection /> */}
      <HeroSection post={hero} postImageUrl={heroImageUrl} />
      <AboutSection post={about} postImageUrl={aboutImages} />
      <BestsellersSection post={bestWithUrls} />
      <WorksSection post={worksWithImageUrls} />
      <GallerySection post={galleryWithUrls} />
      <FooterSection />
    </div>
  );
}
