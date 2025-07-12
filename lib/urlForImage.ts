import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../8enjamin-studio/sanity-ulits";

const builder = imageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
