export type Locale = "en" | "de" | "ar";

export type LocalizedText = Record<Locale, string>;

export interface Destination {
  id: string;
  name: LocalizedText;
  tagline: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
}

export interface GalleryImage {
  id: string;
  title: LocalizedText;
  location: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
}

export interface NavLink {
  label: LocalizedText;
  href: LocalizedText;
}
