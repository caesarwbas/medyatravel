import type { GalleryImage } from "@/types";

const cdn = "https://res.cloudinary.com/lclxcm8g/image/upload";

export const galleryImages: GalleryImage[] = [
  {
    id: "umayyad",
    title: { en: "Umayyad Heritage", de: "Das Erbe der Umayyaden", ar: "إرث الأمويين" },
    location: { en: "Damascus", de: "Damaskus", ar: "دمشق" },
    image: `${cdn}/v1783899059/83b8bbcbd3588914c7544a47d90469a9_odvpub.jpg`,
    imageAlt: {
      en: "Historic Umayyad architecture in Damascus",
      de: "Historische Architektur aus der Umayyadenzeit in Damaskus",
      ar: "العمارة الأموية التاريخية في دمشق",
    },
  },
  {
    id: "old-city",
    title: { en: "Old City Streets", de: "Gassen der Altstadt", ar: "أزقة المدينة القديمة" },
    location: { en: "Damascus", de: "Damaskus", ar: "دمشق" },
    image: `${cdn}/v1783899047/images_12_wsbmr4.jpg`,
    imageAlt: {
      en: "Winding alleys of Damascus old city",
      de: "Verwinkelte Gassen in der Altstadt von Damaskus",
      ar: "الأزقة المتعرجة في مدينة دمشق القديمة",
    },
  },
  {
    id: "citadel-views",
    title: { en: "Citadel Views", de: "Ausblicke von der Zitadelle", ar: "إطلالات القلعة" },
    location: { en: "Aleppo", de: "Aleppo", ar: "حلب" },
    image: `${cdn}/v1783899047/image-18-jpeg_h7ihzs.webp`,
    imageAlt: {
      en: "Panoramic views from Aleppo citadel",
      de: "Panoramablick von der Zitadelle von Aleppo",
      ar: "إطلالة بانورامية من قلعة حلب",
    },
  },
  {
    id: "coastal-retreat",
    title: { en: "Coastal Retreat", de: "Rückzugsort am Mittelmeer", ar: "ملاذ على الساحل" },
    location: { en: "Syrian Coast", de: "Syrische Küste", ar: "الساحل السوري" },
    image: `${cdn}/v1783899046/images_13_hbafne.jpg`,
    imageAlt: {
      en: "Serene Mediterranean coastline",
      de: "Ruhige Mittelmeerküste in Syrien",
      ar: "ساحل البحر المتوسط الهادئ في سوريا",
    },
  },
  {
    id: "desert-heritage",
    title: { en: "Desert Heritage", de: "Kulturerbe der Wüste", ar: "إرث الصحراء" },
    location: { en: "Central Syria", de: "Zentralsyrien", ar: "وسط سوريا" },
    image: `${cdn}/v1783899046/156523924507271800_k427zw.jpg`,
    imageAlt: {
      en: "Ancient heritage sites in the Syrian desert",
      de: "Historische Stätten in der syrischen Wüste",
      ar: "المواقع التاريخية في الصحراء السورية",
    },
  },
  {
    id: "mountain-vistas",
    title: { en: "Mountain Vistas", de: "Bergpanoramen", ar: "إطلالات جبلية" },
    location: { en: "Syria", de: "Syrien", ar: "سوريا" },
    image: `${cdn}/v1783899046/images_14_ltwu4x.jpg`,
    imageAlt: {
      en: "Mountain landscapes across Syria",
      de: "Berglandschaften in Syrien",
      ar: "المناظر الجبلية في سوريا",
    },
  },
  {
    id: "luxury-stays",
    title: { en: "Luxury Stays", de: "Exklusive Unterkünfte", ar: "إقامات فاخرة" },
    location: { en: "Syria", de: "Syrien", ar: "سوريا" },
    image: `${cdn}/v1783899047/hotel_3_6_hyswro.jpg`,
    imageAlt: {
      en: "Premium hotel accommodation in Syria",
      de: "Exklusive Hotelunterkunft in Syrien",
      ar: "إقامة فندقية فاخرة في سوريا",
    },
  },
];
