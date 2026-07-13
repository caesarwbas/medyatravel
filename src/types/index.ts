export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  location: string;
  image: string;
  imageAlt: string;
}

export interface NavLink {
  label: string;
  href: string;
}
