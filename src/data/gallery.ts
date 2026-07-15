import type { GalleryImage } from "@/types";

const cdn = "https://res.cloudinary.com/lclxcm8g/image/upload";

export const galleryImages: GalleryImage[] = [
  {
    id: "umayyad",
    title: { de: "Das Erbe der Umayyaden", ar: "إرث الأمويين" },
    location: { de: "Damaskus", ar: "دمشق" },
    image: `${cdn}/v1783899059/83b8bbcbd3588914c7544a47d90469a9_odvpub.jpg`,
    imageAlt: {
      de: "Historische Architektur aus der Umayyadenzeit in Damaskus",
      ar: "العمارة الأموية التاريخية في دمشق",
    },
  },
  {
    id: "old-city",
    title: { de: "Gassen der Altstadt", ar: "أزقة المدينة القديمة" },
    location: { de: "Damaskus", ar: "دمشق" },
    image: `${cdn}/v1783899047/images_12_wsbmr4.jpg`,
    imageAlt: {
      de: "Verwinkelte Gassen in der Altstadt von Damaskus",
      ar: "الأزقة المتعرجة في مدينة دمشق القديمة",
    },
  },
  {
    id: "citadel-views",
    title: { de: "Ausblicke von der Zitadelle", ar: "إطلالات القلعة" },
    location: { de: "Aleppo", ar: "حلب" },
    image: `${cdn}/v1783899047/image-18-jpeg_h7ihzs.webp`,
    imageAlt: {
      de: "Panoramablick von der Zitadelle von Aleppo",
      ar: "إطلالة بانورامية من قلعة حلب",
    },
  },
  {
    id: "coastal-retreat",
    title: { de: "Rückzugsort am Mittelmeer", ar: "ملاذ على الساحل" },
    location: { de: "Syrische Küste", ar: "الساحل السوري" },
    image: `${cdn}/v1783899046/images_13_hbafne.jpg`,
    imageAlt: {
      de: "Ruhige Mittelmeerküste in Syrien",
      ar: "ساحل البحر المتوسط الهادئ في سوريا",
    },
  },
  {
    id: "desert-heritage",
    title: { de: "Kulturerbe der Wüste", ar: "إرث الصحراء" },
    location: { de: "Zentralsyrien", ar: "وسط سوريا" },
    image: `${cdn}/v1783899046/156523924507271800_k427zw.jpg`,
    imageAlt: {
      de: "Historische Stätten in der syrischen Wüste",
      ar: "المواقع التاريخية في الصحراء السورية",
    },
  },
  {
    id: "mountain-vistas",
    title: { de: "Bergpanoramen", ar: "إطلالات جبلية" },
    location: { de: "Syrien", ar: "سوريا" },
    image: `${cdn}/v1783899046/images_14_ltwu4x.jpg`,
    imageAlt: {
      de: "Berglandschaften in Syrien",
      ar: "المناظر الجبلية في سوريا",
    },
  },
  {
    id: "luxury-stays",
    title: { de: "Exklusive Unterkünfte", ar: "إقامات فاخرة" },
    location: { de: "Syrien", ar: "سوريا" },
    image: `${cdn}/v1783899047/hotel_3_6_hyswro.jpg`,
    imageAlt: {
      de: "Exklusive Hotelunterkunft in Syrien",
      ar: "إقامة فندقية فاخرة في سوريا",
    },
  },
];
