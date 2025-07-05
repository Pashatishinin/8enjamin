import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../../../8enjamin-studio/sanity-ulits";
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
    <section>
      {postImageUrl ? (
        <img
          src={postImageUrl}
          alt={post?.title || "Hero image"}
          className="aspect-video rounded-xl"
        />
      ) : (
        <p>Image not found</p>
      )}
      <h1>{post?.title || "No title"}</h1>
      HeroSection
    </section>
  );
}
