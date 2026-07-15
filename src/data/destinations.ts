import type { Destination } from "@/types";

const cdn = "https://res.cloudinary.com/lclxcm8g/image/upload";

export const destinations: Destination[] = [
  {
    id: "tartus",
    name: { de: "Tartus", ar: "طرطوس" },
    tagline: {
      de: "Mediterrane Eleganz als außergewöhnliches Reiseerlebnis",
      ar: "أناقة البحر المتوسط بتجربة استثنائية",
    },
    image: `${cdn}/v1783899049/Screenshot_2026-07-12_200420_rr2jls.png`,
    imageAlt: {
      de: "Mediterrane Eleganz und historische Architektur in Tartus",
      ar: "أناقة البحر المتوسط والعمارة التاريخية في طرطوس",
    },
  },
  {
    id: "aleppo",
    name: { de: "Aleppo", ar: "حلب" },
    tagline: {
      de: "Zeitlose Größe im Schatten der Zitadelle",
      ar: "عراقة خالدة تتوّجها القلعة",
    },
    image: `${cdn}/v1783899048/b3_SYR_Cit_Aleppo_JPEG_Hero_SYR_Cit_Aleppo_rylci7.jpg`,
    imageAlt: {
      de: "Die historische Zitadelle von Aleppo im goldenen Abendlicht",
      ar: "قلعة حلب التاريخية في ضوء الغروب الذهبي",
    },
  },
  {
    id: "qasioun",
    name: { de: "Berg Qasioun", ar: "جبل قاسيون" },
    tagline: {
      de: "Panoramablicke über die Hauptstadt",
      ar: "إطلالات بانورامية على قلب العاصمة",
    },
    image: `${cdn}/v1783899060/Mount_Qasioun-%D8%AC%D8%A8%D9%84_%D9%82%D8%A7%D8%B3%D9%8A%D9%88%D9%86_jdzgcj.jpg`,
    imageAlt: {
      de: "Der Berg Qasioun mit Blick über Damaskus",
      ar: "جبل قاسيون المطل على مدينة دمشق",
    },
  },
  {
    id: "mashta-al-helou",
    name: { de: "Mashta Al Helou", ar: "مشتى الحلو" },
    tagline: {
      de: "Bergidylle über den Wolken",
      ar: "سكينة الجبال فوق الغيوم",
    },
    image: `${cdn}/v1783899047/1049915691_0030722048_1920x0_80_0_0_219a9611a48cb4a756ff44212002eb5b_ctkkul.jpg`,
    imageAlt: {
      de: "Berglandschaft und Natur in Mashta Al Helou",
      ar: "الطبيعة الجبلية الخلابة في مشتى الحلو",
    },
  },
  {
    id: "palmyra",
    name: { de: "Palmyra", ar: "تدمر" },
    tagline: {
      de: "Die Wüstenrose der Antike",
      ar: "وردة الصحراء الخالدة",
    },
    image: `${cdn}/v1783899059/59642608_804_w9zlq4.jpg`,
    imageAlt: {
      de: "Palmyra, die Wüstenrose der syrischen Antike",
      ar: "تدمر، وردة الصحراء السورية الخالدة",
    },
  },
  {
    id: "latakia",
    name: { de: "Latakia", ar: "اللاذقية" },
    tagline: {
      de: "Wo das Meer auf jahrtausendealtes Erbe trifft",
      ar: "حيث يلتقي البحر بعبق التاريخ",
    },
    image: `${cdn}/v1783899047/1536x864_cmsv2_339df696-1081-586f-a5bb-4f699eb4da90-9209890_lz3zbh.jpg`,
    imageAlt: {
      de: "Kulturelles Erbe und Meerblick in Latakia",
      ar: "المشهد الساحلي والإرث التاريخي في اللاذقية",
    },
  },
];
