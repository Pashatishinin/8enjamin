import { groq } from "next-sanity";
import { client } from "../8enjamin-studio/sanity-ulits";
import { AboutSection, Bestseller, Gallery, Works } from "./types";

export async function getHero() {
  const query = groq`*[
  _type == "heroSection"
][0]{title, image, link}`;
  return await client.fetch(query);
}

export async function getAbout(): Promise<AboutSection> {
  const query = groq`*[_type == "aboutSection"][0]{
  description,
  images[]{
    asset->{
      _id,
      url
    },
    alt
  }
}`;
  return await client.fetch(query);
}

export async function getBestsellers(): Promise<Bestseller[]> {
  const query = groq`*[_type == "bestsellersSection"]{title, image, link}`;
  return await client.fetch(query);
}

export async function getWorks(): Promise<Works[]> {
  const query = groq`*[_type == "worksSection"]{
  title,
  description,
  images[]{
    asset->{
      _id,
      url
    }
  }
}`;
  return await client.fetch(query);
}

export async function getGalley(): Promise<Gallery[]> {
  const query = groq`*[_type == "gallerySection"]{title, image}`;
  return await client.fetch(query);
}

export async function getSocial() {
  const query = groq`*[_type == "socialDetails"]{dribble, behance, instagram, facebook, linkedin}`;
  return await client.fetch(query);
}

export async function getContact() {
  const query = groq`*[_type == "contactDetails"]{phone, email, whatsapp}`;
  return await client.fetch(query);
}
