import CustomCursor from "@/components/ui/CustomCursor";
import AboutSection from "@/sections/AboutSection/AboutSection";
import BestsellersSection from "@/sections/BestsellersSection/BestsellersSection";
import FooterSection from "@/sections/FooterSection/FooterSection";
import GallerySection from "@/sections/GallerySection/GallerySection";
import HeaderSection from "@/sections/HeaderSection/HeaderSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import WorksSection from "@/sections/WorksSection/WorksSection";

import {
  getAbout,
  getBestsellers,
  getContact,
  getGalley,
  getHero,
  getSocial,
  getWorks,
} from "../../lib/api";
import { urlForImage } from "../../lib/urlForImage";
import { AboutImage, Bestseller, Works, Gallery } from "../../lib/types";

export const dynamic = "force-static";

export default async function Home() {
  const hero = await getHero();
  const heroImageUrl = hero?.image ? urlForImage(hero.image).url() : null;

  const about = await getAbout();
  const aboutImages =
    about.images.map(
      (img: AboutImage) => urlForImage(img.asset)?.url() ?? ""
    ) || [];

  type BestsellerItem = Bestseller & { imageUrl: string | null };
  const best = await getBestsellers();
  const bestWithUrls: BestsellerItem[] = best.map((item) => ({
    ...item,
    imageUrl: item.image ? (urlForImage(item.image)?.url() ?? null) : null,
  }));

  const works = await getWorks();
  const worksWithImageUrls = works.map((item: Works) => ({
    ...item,
    imageUrls:
      item.images?.map((img: { asset: { _id: string; url: string } }) =>
        urlForImage(img.asset).url()
      ) ?? [],
  }));

  type GalleryItem = Gallery & { imageUrl: string | null };
  const gallery = await getGalley();
  const galleryWithUrls: GalleryItem[] = gallery.map((item) => ({
    ...item,
    imageUrl: item.image ? (urlForImage(item.image)?.url() ?? null) : null,
  }));

  const social = await getSocial();
  const contact = await getContact();

  return (
    <div>
      <CustomCursor />
      {/* <HeaderSection /> */}
      <HeroSection post={hero} postImageUrl={heroImageUrl} />
      <AboutSection post={about} postImageUrl={aboutImages} />
      <BestsellersSection posts={bestWithUrls} />
      <WorksSection post={worksWithImageUrls} />
      <GallerySection post={galleryWithUrls} />
      <FooterSection social={social} contact={contact} link={hero.link} />
    </div>
  );
}
