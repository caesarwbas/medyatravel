import type { Destination } from "@/types";

const cdn =
  "https://res.cloudinary.com/lclxcm8g/image/upload";

export const destinations: Destination[] = [
  {
    id: "tartus",

    name: {
      en: "Tartus",
      de: "Tartus",
      ar: "طرطوس",
    },

    tagline: {
      en: "Mediterranean elegance in an exceptional travel experience",
      de: "Mediterrane Eleganz als außergewöhnliches Reiseerlebnis",
      ar: "أناقة البحر المتوسط بتجربة استثنائية",
    },

    image: `${cdn}/v1783899049/Screenshot_2026-07-12_200420_rr2jls.png`,

    imageAlt: {
      en: "Mediterranean scenery and coastal atmosphere in Tartus",
      de: "Mediterrane Landschaft und Küstenatmosphäre in Tartus",
      ar: "مشهد متوسطي وأجواء ساحلية في طرطوس",
    },
  },

  {
    id: "aleppo",

    name: {
      en: "Aleppo",
      de: "Aleppo",
      ar: "حلب",
    },

    tagline: {
      en: "A citadel of timeless grandeur",
      de: "Eine Zitadelle von zeitloser Pracht",
      ar: "قلعة تختصر عظمة التاريخ",
    },

    image: `${cdn}/v1783899048/b3_SYR_Cit_Aleppo_JPEG_Hero_SYR_Cit_Aleppo_rylci7.jpg`,

    imageAlt: {
      en: "The ancient Citadel of Aleppo at golden hour",
      de: "Die historische Zitadelle von Aleppo im goldenen Licht",
      ar: "قلعة حلب التاريخية في الإضاءة الذهبية",
    },
  },

  {
    id: "qasioun",

    name: {
      en: "Mount Qasioun",
      de: "Berg Qasioun",
      ar: "جبل قاسيون",
    },

    tagline: {
      en: "Panoramic views over the capital",
      de: "Panoramablicke über die Hauptstadt",
      ar: "إطلالات بانورامية على العاصمة",
    },

    image: `${cdn}/v1783899060/Mount_Qasioun-%D8%AC%D8%A8%D9%84_%D9%82%D8%A7%D8%B3%D9%8A%D9%88%D9%86_jdzgcj.jpg`,

    imageAlt: {
      en: "Mount Qasioun overlooking Damascus",
      de: "Berg Qasioun mit Blick über Damaskus",
      ar: "جبل قاسيون المطل على دمشق",
    },
  },

  {
    id: "mashta-al-helou",

    name: {
      en: "Mashta Al Helou",
      de: "Mashta Al Helou",
      ar: "مشتى الحلو",
    },

    tagline: {
      en: "Mountain serenity above the clouds",
      de: "Bergidylle über den Wolken",
      ar: "سكينة الجبال فوق الغيوم",
    },

    image: `${cdn}/v1783899047/1049915691_0030722048_1920x0_80_0_0_219a9611a48cb4a756ff44212002eb5b_ctkkul.jpg`,

    imageAlt: {
      en: "Mountain landscape and natural beauty in Mashta Al Helou",
      de: "Berglandschaft und natürliche Schönheit in Mashta Al Helou",
      ar: "الطبيعة الجبلية الخلابة في مشتى الحلو",
    },
  },

  {
    id: "palmyra",

    name: {
      en: "Palmyra",
      de: "Palmyra",
      ar: "تدمر",
    },

    tagline: {
      en: "Desert rose of antiquity",
      de: "Die Wüstenrose der Antike",
      ar: "وردة الصحراء الخالدة",
    },

    image: `${cdn}/v1783899059/59642608_804_w9zlq4.jpg`,

    imageAlt: {
      en: "Palmyra, the desert rose of Syrian antiquity",
      de: "Palmyra, die Wüstenrose der syrischen Antike",
      ar: "تدمر، وردة الصحراء السورية الخالدة",
    },
  },

  {
    id: "latakia",

    name: {
      en: "Latakia",
      de: "Latakia",
      ar: "اللاذقية",
    },

    tagline: {
      en: "Where the sea meets ancient heritage",
      de: "Wo das Meer auf jahrtausendealtes Erbe trifft",
      ar: "حيث يلتقي البحر بعراقة التاريخ",
    },

    image: `${cdn}/v1783899047/1536x864_cmsv2_339df696-1081-586f-a5bb-4f699eb4da90-9209890_lz3zbh.jpg`,

    imageAlt: {
      en: "Coastal heritage and Mediterranean views in Latakia",
      de: "Küstenerbe und mediterrane Ausblicke in Latakia",
      ar: "التراث الساحلي والإطلالات المتوسطية في اللاذقية",
    },
  },
];