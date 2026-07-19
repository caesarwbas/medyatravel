import type { NavLink } from "@/types";
import {
  destinationsPaths,
  journeyPaths,
  localizeAnchor,
  routeLabels,
} from "@/data/routes";

export const navLinks: NavLink[] = [
  {
    label: routeLabels.destinations,
    href: destinationsPaths,
  },
  {
    label: routeLabels.journey,
    href: journeyPaths,
  },
  {
    label: routeLabels.catalogue,
    href: {
      en: localizeAnchor("en", "#catalogue"),
      de: localizeAnchor("de", "#catalogue"),
      ar: localizeAnchor("ar", "#catalogue"),
    },
  },
  {
    label: routeLabels.about,
    href: {
      en: localizeAnchor("en", "#about"),
      de: localizeAnchor("de", "#about"),
      ar: localizeAnchor("ar", "#about"),
    },
  },
];
