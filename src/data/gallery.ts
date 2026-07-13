import type { GalleryImage } from "@/types";

const cdn = "https://res.cloudinary.com/lclxcm8g/image/upload";

export const galleryImages: GalleryImage[] = [
  {
    id: "umayyad",
    title: "Umayyad Heritage",
    location: "Damascus",
    image: `${cdn}/v1783899059/83b8bbcbd3588914c7544a47d90469a9_odvpub.jpg`,
    imageAlt: "Historic Umayyad architecture in Damascus",
  },
  {
    id: "old-city",
    title: "Old City Streets",
    location: "Damascus",
    image: `${cdn}/v1783899047/images_12_wsbmr4.jpg`,
    imageAlt: "Winding alleys of Damascus old city",
  },
  {
    id: "citadel-views",
    title: "Citadel Views",
    location: "Aleppo",
    image: `${cdn}/v1783899047/image-18-jpeg_h7ihzs.webp`,
    imageAlt: "Panoramic views from Aleppo citadel",
  },
  {
    id: "coastal-retreat",
    title: "Coastal Retreat",
    location: "Syrian Coast",
    image: `${cdn}/v1783899046/images_13_hbafne.jpg`,
    imageAlt: "Serene Mediterranean coastline",
  },
  {
    id: "desert-heritage",
    title: "Desert Heritage",
    location: "Central Syria",
    image: `${cdn}/v1783899046/156523924507271800_k427zw.jpg`,
    imageAlt: "Ancient heritage sites in the Syrian desert",
  },
  {
    id: "mountain-vistas",
    title: "Mountain Vistas",
    location: "Syria",
    image: `${cdn}/v1783899046/images_14_ltwu4x.jpg`,
    imageAlt: "Mountain landscapes across Syria",
  },
  {
    id: "luxury-stays",
    title: "Luxury Stays",
    location: "Syria",
    image: `${cdn}/v1783899047/hotel_3_6_hyswro.jpg`,
    imageAlt: "Premium hotel accommodation in Syria",
  },
];
