import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../../../8enjamin-studio/sanity-ulits";
import LogoHero from "@/components/ui/LogoHero/LogoHero";
import ScrollCube from "@/components/ui/ScrollCube/ScrollCube";
import ButtonShop from "@/components/ui/ButtonShop/ButtonShop";

// Sanity connect
const HERO_QUERY = `*[
  _type == "heroSection"
][0]{title, image}`;
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
const options = { next: { revalidate: 30 } };

export default async function HeroSection() {
  const post = await client.fetch<SanityDocument>(HERO_QUERY, {}, options);

  console.log("Fetched hero post:", post); // для отладки

  const postImageUrl = post?.image ? urlFor(post.image)?.url() : null;
  return (
    <section id="home">
      {postImageUrl ? (
        <img
          loading="lazy"
          src={postImageUrl}
          alt={post?.title || "background image"}
          className="aspect-video rounded-xl"
        />
      ) : (
        <p>Image not found</p>
      )}
      <LogoHero />
      <h1>{post?.title || "No title"}</h1>

      <ScrollCube />
      <ButtonShop />
    </section>
  );
}
