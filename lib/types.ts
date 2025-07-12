export interface AboutImage {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
}

export interface AboutSection {
  description: string;
  images: AboutImage[];
}

export interface Bestseller {
  _id: string;
  _type: "bestsellersSection";
  title: string;
  image?: any; // можно заменить на ImageAsset типа Sanity
  link?: string;
}

export interface ImageAsset {
  asset: {
    _id: string;
    url: string;
  };
}

export interface Works {
  _id: string;
  _type: "worksSection";
  title: string;
  description?: string;
  images?: ImageAsset[];
}

export interface Gallery {
  _id: string;
  _type: "gallerySection";
  title: string;
  image?: any;
}
