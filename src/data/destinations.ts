import type { Destination } from "@/types";

const cdn = "https://res.cloudinary.com/lclxcm8g/image/upload";

export const destinations: Destination[] = [
  {
    id: "damascus",
    name: "Damascus",
    tagline: "The world's oldest living capital",
    image: `${cdn}/v1783899049/Screenshot_2026-07-12_200420_rr2jls.png`,
    imageAlt: "Historic streets and architecture in Damascus",
  },
  {
    id: "aleppo",
    name: "Aleppo",
    tagline: "A citadel of timeless grandeur",
    image: `${cdn}/v1783899048/b3_SYR_Cit_Aleppo_JPEG_Hero_SYR_Cit_Aleppo_rylci7.jpg`,
    imageAlt: "The ancient citadel of Aleppo at golden hour",
  },
  {
    id: "qasioun",
    name: "Mount Qasioun",
    tagline: "Panoramic views over the capital",
    image: `${cdn}/v1783899060/Mount_Qasioun-%D8%AC%D8%A8%D9%84_%D9%82%D8%A7%D8%B3%D9%8A%D9%88%D9%86_jdzgcj.jpg`,
    imageAlt: "Mount Qasioun overlooking Damascus",
  },
  {
    id: "palmyra",
    name: "Palmyra",
    tagline: "Desert rose of antiquity",
    image: `${cdn}/v1783899047/1049915691_0030722048_1920x0_80_0_0_219a9611a48cb4a756ff44212002eb5b_ctkkul.jpg`,
    imageAlt: "Ancient ruins of Palmyra in the Syrian desert",
  },
  {
    id: "tartus",
    name: "Tartus",
    tagline: "Mediterranean elegance redefined",
    image: `${cdn}/v1783899059/59642608_804_w9zlq4.jpg`,
    imageAlt: "Mediterranean coastline near Tartus",
  },
  {
    id: "latakia",
    name: "Latakia",
    tagline: "Where sea meets ancient heritage",
    image: `${cdn}/v1783899047/1536x864_cmsv2_339df696-1081-586f-a5bb-4f699eb4da90-9209890_lz3zbh.jpg`,
    imageAlt: "Coastal heritage and sea views in Latakia",
  },
];
