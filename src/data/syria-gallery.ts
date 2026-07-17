import type { LocalizedText } from "@/types";
export interface SyriaPhoto {
  id: string;
  src: string;
  width: number;
  height: number;
  title: LocalizedText;
}
export interface SyriaPhotoCategory {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  photos: SyriaPhoto[];
}
export const destinationFeatureImages = {
  currency: { src: "/syria/syrian-currency.webp", width: 736, height: 1308 },
  love: { src: "/syria/i-love-syria.webp", width: 736, height: 981 },
  flag: { src: "/syria/free-syria-flag.webp", width: 2240, height: 2800 },
  pageHero: { src: "/syria/free-syria-flag-landscape.webp", width: 2800, height: 1867 },
} as const;

export const syriaPhotoCategories: SyriaPhotoCategory[] = [
  {
    id: "damascus",
    name: { en: "Damascus", de: "Damaskus", ar: "دمشق" },
    description: { en: "Courtyards, mosques, historic khans and the living streets of one of the world’s oldest cities.", de: "Höfe, Moscheen, historische Khane und lebendige Gassen in einer der ältesten Städte der Welt.", ar: "جوامع وخانات وبيوت وأسواق حيّة في واحدة من أقدم مدن العالم." },
    photos: [
      {
        id: "umayyad-mosque-damascus", src: "/syria/umayyad-mosque-damascus.webp", width: 1800, height: 2400,
        title: { en: "The Umayyad Mosque", de: "Die Umayyaden-Moschee", ar: "الجامع الأموي" },
      },
      {
        id: "bayt-al-mal-umayyad-mosque", src: "/syria/bayt-al-mal-umayyad-mosque.webp", width: 1802, height: 2400,
        title: { en: "Bayt al-Mal at the Umayyad Mosque", de: "Bayt al-Mal an der Umayyaden-Moschee", ar: "بيت المال في الجامع الأموي" },
      },
      {
        id: "old-damascus-alley", src: "/syria/old-damascus-alley.webp", width: 736, height: 795,
        title: { en: "An alley in Old Damascus", de: "Eine Gasse in der Altstadt von Damaskus", ar: "حارة في دمشق القديمة" },
      },
      {
        id: "khan-asad-pasha-interior", src: "/syria/khan-asad-pasha-interior.webp", width: 400, height: 600,
        title: { en: "Khan As'ad Pasha", de: "Khan As'ad Pascha", ar: "خان أسعد باشا" },
      },
      {
        id: "umayyad-mosque-night", src: "/syria/umayyad-mosque-night.webp", width: 1584, height: 993,
        title: { en: "The Umayyad Mosque at night", de: "Die Umayyaden-Moschee bei Nacht", ar: "الجامع الأموي ليلًا" },
      },
      {
        id: "al-nawfara-cafe", src: "/syria/al-nawfara-cafe.webp", width: 735, height: 1053,
        title: { en: "Al-Nawfara Café in Old Damascus", de: "Café Al-Nawfara in der Altstadt von Damaskus", ar: "مقهى النوفرة في دمشق القديمة" },
      },
      {
        id: "four-seasons-damascus", src: "/syria/four-seasons-damascus.webp", width: 1680, height: 2400,
        title: { en: "Four Seasons Hotel Damascus", de: "Four Seasons Hotel Damaskus", ar: "فندق فورسيزونز دمشق" },
      },
      {
        id: "damascus-copperware", src: "/syria/damascus-copperware.webp", width: 1600, height: 2400,
        title: { en: "Traditional copperware in Damascus", de: "Traditionelle Kupferwaren in Damaskus", ar: "النحاسيات التقليدية في دمشق" },
      },
      {
        id: "khan-asad-pasha-courtyard", src: "/syria/khan-asad-pasha-courtyard.webp", width: 1600, height: 2400,
        title: { en: "Courtyard of Khan As'ad Pasha", de: "Innenhof des Khan As'ad Pascha", ar: "باحة خان أسعد باشا" },
      },
      {
        id: "old-damascus-khan", src: "/syria/old-damascus-khan.webp", width: 2400, height: 1800,
        title: { en: "An ancient khan in Old Damascus", de: "Historischer Khan in der Altstadt von Damaskus", ar: "خان أثري في دمشق القديمة" },
      },
    ],
  },
  {
    id: "rif-dimashq",
    name: { en: "Rif Dimashq", de: "Umland von Damaskus", ar: "ريف دمشق" },
    description: { en: "Mountain villages, sacred heritage and the dramatic landscapes surrounding the capital.", de: "Bergdörfer, religiöses Erbe und eindrucksvolle Landschaften rund um die Hauptstadt.", ar: "قرى جبلية ومواقع مقدسة وطبيعة مدهشة تحيط بالعاصمة." },
    photos: [
      {
        id: "maaloula-cliff-church", src: "/syria/maaloula-cliff-church.webp", width: 735, height: 860,
        title: { en: "Maaloula and its cliffside churches", de: "Maaloula und seine Felsenkirchen", ar: "معلولا وكنائسها الجبلية" },
      },
      {
        id: "maaloula-rock-monastery", src: "/syria/maaloula-rock-monastery.webp", width: 736, height: 841,
        title: { en: "Maaloula carved into the mountains", de: "Maaloula in den Felsen", ar: "معلولا بين الجبال" },
      },
      {
        id: "moses-cave-boat", src: "/syria/moses-cave-boat.webp", width: 736, height: 981,
        title: { en: "Moses Cave near Bloudan", de: "Moses-Höhle bei Bloudan", ar: "مغارة موسى قرب بلودان" },
      },
      {
        id: "moses-cave-water", src: "/syria/moses-cave-water.webp", width: 736, height: 981,
        title: { en: "The waterways of Moses Cave", de: "Wasserwege der Moses-Höhle", ar: "الممرات المائية في مغارة موسى" },
      },
      {
        id: "moses-cave-tunnel", src: "/syria/moses-cave-tunnel.webp", width: 736, height: 1308,
        title: { en: "Inside Moses Cave", de: "Im Inneren der Moses-Höhle", ar: "داخل مغارة موسى" },
      },
      {
        id: "maaloula-panorama", src: "/syria/maaloula-panorama.webp", width: 2400, height: 1800,
        title: { en: "Panoramic view of Maaloula", de: "Panoramablick auf Maaloula", ar: "إطلالة بانورامية على معلولا" },
      },
    ],
  },
  {
    id: "aleppo",
    name: { en: "Aleppo", de: "Aleppo", ar: "حلب" },
    description: { en: "A timeless city crowned by its citadel and shaped by centuries of trade and culture.", de: "Eine zeitlose Stadt, gekrönt von ihrer Zitadelle und geprägt von Handel und Kultur.", ar: "مدينة خالدة تتوّجها القلعة وتصوغ ملامحها قرون من التجارة والثقافة." },
    photos: [
      {
        id: "aleppo-citadel-night", src: "/syria/aleppo-citadel-night.webp", width: 736, height: 981,
        title: { en: "Aleppo Citadel", de: "Zitadelle von Aleppo", ar: "قلعة حلب" },
      },
      {
        id: "aleppo-citadel-stairs", src: "/syria/aleppo-citadel-stairs.webp", width: 474, height: 474,
        title: { en: "The entrance to Aleppo Citadel", de: "Eingang der Zitadelle von Aleppo", ar: "مدخل قلعة حلب" },
      },
      {
        id: "aleppo-old-city", src: "/syria/aleppo-old-city.webp", width: 1600, height: 2400,
        title: { en: "The old city of Aleppo", de: "Altstadt von Aleppo", ar: "مدينة حلب القديمة" },
      },
    ],
  },
  {
    id: "hama",
    name: { en: "Hama", de: "Hama", ar: "حماة" },
    description: { en: "Historic norias, river scenery and unmistakable traditional architecture.", de: "Historische Norias, Flusslandschaften und unverwechselbare traditionelle Architektur.", ar: "نواعير تاريخية ومشهد نهري وعمارة تقليدية لا تخطئها العين." },
    photos: [
      {
        id: "hama-norias-river", src: "/syria/hama-norias-river.webp", width: 2400, height: 1600,
        title: { en: "The Norias of Hama", de: "Die Norias von Hama", ar: "نواعير حماة" },
      },
      {
        id: "hama-noria-close", src: "/syria/hama-noria-close.webp", width: 736, height: 920,
        title: { en: "A historic noria in Hama", de: "Historische Noria in Hama", ar: "ناعورة تاريخية في حماة" },
      },
      {
        id: "hama-arched-window", src: "/syria/hama-arched-window.webp", width: 736, height: 1064,
        title: { en: "Traditional architecture in Hama", de: "Traditionelle Architektur in Hama", ar: "عمارة حماة التقليدية" },
      },
    ],
  },
  {
    id: "homs",
    name: { en: "Homs", de: "Homs", ar: "حمص" },
    description: { en: "From the green valley of Wadi al-Nasara to the monumental desert city of Palmyra.", de: "Vom grünen Wadi al-Nasara bis zur monumentalen Wüstenstadt Palmyra.", ar: "من خضرة وادي النصارى إلى عظمة مدينة تدمر الصحراوية." },
    photos: [
      {
        id: "wadi-al-nasara", src: "/syria/wadi-al-nasara.webp", width: 720, height: 874,
        title: { en: "Wadi al-Nasara", de: "Wadi al-Nasara", ar: "وادي النصارى" },
      },
      {
        id: "palmyra-monumental-arch", src: "/syria/palmyra-monumental-arch.webp", width: 1800, height: 2400,
        title: { en: "The monumental ruins of Palmyra", de: "Monumentale Ruinen von Palmyra", ar: "آثار تدمر المهيبة" },
      },
      {
        id: "palmyra-columns", src: "/syria/palmyra-columns.webp", width: 2400, height: 1800,
        title: { en: "The columns of Palmyra", de: "Säulen von Palmyra", ar: "أعمدة تدمر" },
      },
    ],
  },
  {
    id: "latakia",
    name: { en: "Latakia", de: "Latakia", ar: "اللاذقية" },
    description: { en: "Clear Mediterranean waters, forested valleys and the mountain villages of Kassab.", de: "Klares Mittelmeerwasser, bewaldete Täler und die Bergdörfer von Kassab.", ar: "مياه متوسطية صافية ووديان خضراء وقرى كسب الجبلية." },
    photos: [
      {
        id: "latakia-coast", src: "/syria/latakia-coast.webp", width: 533, height: 960,
        title: { en: "Latakia coastline", de: "Küste von Latakia", ar: "ساحل اللاذقية" },
      },
      {
        id: "al-samra-kassab", src: "/syria/al-samra-kassab.webp", width: 640, height: 900,
        title: { en: "Al-Samra village near Kassab", de: "Dorf Al-Samra bei Kassab", ar: "قرية السمرا في كسب" },
      },
      {
        id: "latakia-crystal-water", src: "/syria/latakia-crystal-water.webp", width: 736, height: 981,
        title: { en: "Crystal-clear water on the Latakia coast", de: "Kristallklares Wasser an der Küste von Latakia", ar: "مياه صافية على ساحل اللاذقية" },
      },
      {
        id: "wadi-qandil", src: "/syria/wadi-qandil.webp", width: 736, height: 980,
        title: { en: "Wadi Qandil", de: "Wadi Qandil", ar: "وادي قنديل" },
      },
    ],
  },
  {
    id: "tartus",
    name: { en: "Tartus", de: "Tartus", ar: "طرطوس" },
    description: { en: "A Mediterranean coast framed by green mountains and peaceful inland retreats.", de: "Eine Mittelmeerküste, umrahmt von grünen Bergen und ruhigen Rückzugsorten im Hinterland.", ar: "ساحل متوسطي تحيط به الجبال الخضراء والملاذات الهادئة." },
    photos: [
      {
        id: "sheikh-badr-stream", src: "/syria/sheikh-badr-stream.webp", width: 1713, height: 2400,
        title: { en: "The nature of Sheikh Badr", de: "Natur von Sheikh Badr", ar: "طبيعة الشيخ بدر" },
      },
      {
        id: "sheikh-badr-mountains", src: "/syria/sheikh-badr-mountains.webp", width: 1800, height: 2400,
        title: { en: "The green mountains of Sheikh Badr", de: "Grüne Berge von Sheikh Badr", ar: "جبال الشيخ بدر الخضراء" },
      },
      {
        id: "tartus-waterfront", src: "/syria/tartus-waterfront.webp", width: 736, height: 981,
        title: { en: "Tartus waterfront", de: "Uferpromenade von Tartus", ar: "واجهة طرطوس البحرية" },
      },
      {
        id: "tartus-coast", src: "/syria/tartus-coast.webp", width: 2400, height: 1600,
        title: { en: "The coast of Tartus", de: "Küste von Tartus", ar: "ساحل طرطوس" },
      },
    ],
  },
  {
    id: "daraa",
    name: { en: "Daraa", de: "Daraa", ar: "درعا" },
    description: { en: "The Roman theatre of Bosra and the rich produce of Syria’s southern plains.", de: "Das römische Theater von Bosra und die reichen Erzeugnisse der südlichen Ebenen Syriens.", ar: "مدرج بصرى الروماني وخيرات السهول الجنوبية السورية." },
    photos: [
      {
        id: "bosra-roman-theatre", src: "/syria/bosra-roman-theatre.webp", width: 736, height: 552,
        title: { en: "The Roman Theatre of Bosra", de: "Römisches Theater von Bosra", ar: "مدرج بصرى الروماني" },
      },
      {
        id: "daraa-grapes", src: "/syria/daraa-grapes.webp", width: 2120, height: 2400,
        title: { en: "Grapes from Daraa", de: "Weintrauben aus Daraa", ar: "عنب درعا" },
      },
      {
        id: "daraa-pomegranate", src: "/syria/daraa-pomegranate.webp", width: 2400, height: 1600,
        title: { en: "Pomegranate from Daraa", de: "Granatapfel aus Daraa", ar: "رمان درعا" },
      },
    ],
  },
  {
    id: "quneitra",
    name: { en: "Quneitra & the Golan", de: "Quneitra und der Golan", ar: "القنيطرة والجولان" },
    description: { en: "Highland landscapes, waterfalls and wide horizons in Syria’s southwest.", de: "Hochland, Wasserfälle und weite Horizonte im Südwesten Syriens.", ar: "مرتفعات وشلالات وآفاق واسعة في جنوب غرب سوريا." },
    photos: [
      {
        id: "golan-waterfall", src: "/syria/golan-waterfall.webp", width: 735, height: 1021,
        title: { en: "A waterfall in the Golan", de: "Wasserfall auf den Golanhöhen", ar: "شلال في الجولان" },
      },
      {
        id: "golan-heights", src: "/syria/golan-heights.webp", width: 736, height: 736,
        title: { en: "The Golan Heights", de: "Die Golanhöhen", ar: "هضبة الجولان" },
      },
    ],
  },
  {
    id: "raqqa",
    name: { en: "Raqqa", de: "Raqqa", ar: "الرقة" },
    description: { en: "Qal’at Ja’bar rising above the waters of Lake Assad.", de: "Qal’at Ja’bar erhebt sich über dem Wasser des Assad-Sees.", ar: "قلعة جعبر شامخة فوق مياه بحيرة الأسد." },
    photos: [
      {
        id: "qalaat-jaabar", src: "/syria/qalaat-jaabar.webp", width: 735, height: 895,
        title: { en: "Qal'at Ja'bar on Lake Assad", de: "Qal'at Ja'bar am Assad-See", ar: "قلعة جعبر على بحيرة الأسد" },
      },
    ],
  },
  {
    id: "deir-ez-zor",
    name: { en: "Deir ez-Zor", de: "Deir ez-Zor", ar: "دير الزور" },
    description: { en: "The Euphrates and the iconic suspension bridge that marks the city’s memory.", de: "Der Euphrat und die ikonische Hängebrücke als prägendes Symbol der Stadt.", ar: "الفرات والجسر المعلق بوصفه أحد أبرز رموز المدينة." },
    photos: [
      {
        id: "deir-ez-zor-suspension-bridge", src: "/syria/deir-ez-zor-suspension-bridge.webp", width: 736, height: 1309,
        title: { en: "The suspension bridge of Deir ez-Zor", de: "Hängebrücke von Deir ez-Zor", ar: "الجسر المعلق في دير الزور" },
      },
      {
        id: "deir-ez-zor-bridge-evening", src: "/syria/deir-ez-zor-bridge-evening.webp", width: 720, height: 913,
        title: { en: "The suspension bridge at sunset", de: "Hängebrücke bei Sonnenuntergang", ar: "الجسر المعلق عند الغروب" },
      },
    ],
  },
  {
    id: "food",
    name: { en: "Syrian Cuisine", de: "Syrische Küche", ar: "المطبخ السوري" },
    description: { en: "Breakfast tables, mezze, sweets and beloved dishes that express Syria’s generous hospitality.", de: "Frühstückstafeln, Mezze, Süßspeisen und beliebte Gerichte als Ausdruck syrischer Gastfreundschaft.", ar: "موائد فطور ومقبلات وحلويات وأطباق محبوبة تختصر كرم الضيافة السورية." },
    photos: [
      {
        id: "syrian-sfiha", src: "/syria/syrian-sfiha.webp", width: 735, height: 980,
        title: { en: "Syrian sfiha", de: "Syrische Sfiha", ar: "صفيحة لحم سورية" },
      },
      {
        id: "fattoush", src: "/syria/fattoush.webp", width: 712, height: 889,
        title: { en: "Fattoush", de: "Fattoush", ar: "فتوش" },
      },
      {
        id: "damascene-pastries", src: "/syria/damascene-pastries.webp", width: 720, height: 960,
        title: { en: "Damascene pastries", de: "Damaszener Gebäck", ar: "معجنات شامية" },
      },
      {
        id: "kusa-bi-laban", src: "/syria/kusa-bi-laban.webp", width: 736, height: 920,
        title: { en: "Kusa bi laban", de: "Kusa bi Laban", ar: "كوسا باللبن" },
      },
      {
        id: "syrian-breakfast-platter", src: "/syria/syrian-breakfast-platter.webp", width: 736, height: 1051,
        title: { en: "Syrian breakfast", de: "Syrisches Frühstück", ar: "فطور سوري" },
      },
      {
        id: "syrian-table", src: "/syria/syrian-table.webp", width: 736, height: 725,
        title: { en: "A table of Syrian dishes", de: "Syrische Spezialitäten", ar: "مائدة سورية" },
      },
      {
        id: "syrian-sweets-display", src: "/syria/syrian-sweets-display.webp", width: 500, height: 667,
        title: { en: "Syrian sweets", de: "Syrische Süßigkeiten", ar: "حلويات سورية" },
      },
      {
        id: "damascus-candy-market", src: "/syria/damascus-candy-market.webp", width: 2400, height: 1800,
        title: { en: "A colourful sweets market in Damascus", de: "Bunter Süßwarenmarkt in Damaskus", ar: "سوق الحلويات في دمشق" },
      },
      {
        id: "halawet-al-jibn", src: "/syria/halawet-al-jibn.webp", width: 718, height: 960,
        title: { en: "Halawet al-jibn", de: "Halawet al-Jibn", ar: "حلاوة الجبن" },
      },
      {
        id: "bakdash-ice-cream", src: "/syria/bakdash-ice-cream.webp", width: 640, height: 789,
        title: { en: "Bakdash ice cream", de: "Bakdash-Eis", ar: "بوظة بكداش" },
      },
      {
        id: "syrian-kibbeh", src: "/syria/syrian-kibbeh.webp", width: 736, height: 1104,
        title: { en: "Syrian kibbeh", de: "Syrische Kibbeh", ar: "كبة سورية" },
      },
      {
        id: "syrian-molokhia", src: "/syria/syrian-molokhia.webp", width: 736, height: 904,
        title: { en: "Syrian molokhia", de: "Syrische Molokhia", ar: "ملوخية سورية" },
      },
      {
        id: "shawarma-platter", src: "/syria/shawarma-platter.webp", width: 736, height: 981,
        title: { en: "Shawarma platter", de: "Schawarma-Teller", ar: "طبق شاورما" },
      },
      {
        id: "syrian-breakfast-bowls", src: "/syria/syrian-breakfast-bowls.webp", width: 512, height: 640,
        title: { en: "Traditional Syrian breakfast", de: "Traditionelles syrisches Frühstück", ar: "فطور سوري تقليدي" },
      },
      {
        id: "syrian-falafel", src: "/syria/syrian-falafel.webp", width: 683, height: 1024,
        title: { en: "Syrian falafel", de: "Syrische Falafel", ar: "فلافل سورية" },
      },
      {
        id: "syrian-food-selection", src: "/syria/syrian-food-selection.webp", width: 1080, height: 1350,
        title: { en: "A selection of Syrian cuisine", de: "Auswahl syrischer Küche", ar: "تشكيلة من المطبخ السوري" },
      },
      {
        id: "syrian-mahashi", src: "/syria/syrian-mahashi.webp", width: 735, height: 893,
        title: { en: "Syrian mahashi", de: "Syrische Mahashi", ar: "محاشي سورية" },
      },
      {
        id: "syrian-shawarma", src: "/syria/syrian-shawarma.webp", width: 676, height: 1200,
        title: { en: "Syrian shawarma", de: "Syrisches Schawarma", ar: "شاورما سورية" },
      },
      {
        id: "syrian-traditional-breakfast", src: "/syria/syrian-traditional-breakfast.webp", width: 1080, height: 1159,
        title: { en: "A traditional Syrian breakfast table", de: "Traditioneller syrischer Frühstückstisch", ar: "مائدة فطور سورية تقليدية" },
      },
    ],
  },
];

export const categoryById = (id: string) => syriaPhotoCategories.find((category) => category.id === id);
