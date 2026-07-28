import type { LocalizedText } from "@/types";

export interface SpainJourneyDay {
  day: number;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
}

export const spainJourneySummary = {
  title: { en: "Essential Spain", de: "Essentielles Spanien", ar: "إسبانيا الأساسية" },
  subtitle: {
    en: "A six-day cultural circuit from Barcelona through Zaragoza, Madrid, Córdoba, Seville, Granada and Valencia.",
    de: "Eine sechstägige Kulturreise ab Barcelona über Zaragoza, Madrid, Córdoba, Sevilla, Granada und Valencia.",
    ar: "جولة ثقافية لمدة ستة أيام تنطلق من برشلونة وتمر بسرقسطة ومدريد وقرطبة وإشبيلية وغرناطة وفالنسيا.",
  },
  duration: { en: "6 Days / 5 Nights", de: "6 Tage / 5 Nächte", ar: "6 أيام / 5 ليالٍ" },
  departure: { en: "Starts in Barcelona every Sunday", de: "Start jeden Sonntag in Barcelona", ar: "تنطلق من برشلونة كل يوم أحد" },
  overview: {
    en: "A balanced introduction to Spain’s cultural heartlands, combining Mediterranean cities, historic inland landscapes and the celebrated heritage of Andalusia.",
    de: "Eine ausgewogene Einführung in Spaniens kulturelle Kernregionen mit mediterranen Städten, historischen Landschaften und dem berühmten Erbe Andalusiens.",
    ar: "رحلة متوازنة لاكتشاف قلب إسبانيا الثقافي، تجمع مدن المتوسط والمناظر الداخلية التاريخية وتراث الأندلس الشهير.",
  },
} satisfies Record<string, LocalizedText>;


export const spainJourneyMapUrl = "https://www.scribblemaps.com/maps/view/3/qcRyf3sTL4";

export const spainJourneyGallery = [
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1785234886/images_16_aaffwk.jpg",
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1785234886/480451719_k5njnl.jpg",
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1785234886/Mediterrane_zcgy3l.jpg",
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1785234886/74_iy8bfr.jpg",
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1785234887/1x_mcimuz.jpg",
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1785234886/bc_yl8twt.jpg",
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1785234887/image_processing20190907-4-3e3iwx_u90sfd.jpg",
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1785234887/images_15_lurwdx.jpg",
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1785234887/istockphoto-1344545914-612x612_dtlkya.jpg",
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1785234888/036-Basilica-of-Our-Lady-of-the-Pillar-and-Ebor-River-in-the-Evening-Zaragoza-Aragon-Spain_gbyi3d.jpg",
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1785234888/2-weeks-traveling-spain-madrid-cordoba-seville-granada-and-v0-v98wsac6va7a1_kmiuhj.jpg",
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1785234888/a85927d6f7b866ee638f7d419c3fe294-1643363128_xekca5.jpg",
  "https://res.cloudinary.com/lclxcm8g/image/upload/v1785234888/58_ri3rfy.jpg",
] as const;

export const spainJourneyDays: SpainJourneyDay[] = [
  {
    day: 1,
    title: { en: "Barcelona → Zaragoza → Madrid", de: "Barcelona → Zaragoza → Madrid", ar: "برشلونة ← سرقسطة ← مدريد" },
    description: {
      en: "Depart Barcelona in the morning and travel inland to Zaragoza. Explore the Basilica of Our Lady of the Pillar and views across the Ebro River before continuing to Madrid for dinner and an overnight stay.",
      de: "Morgendliche Abfahrt von Barcelona nach Zaragoza. Besuchen Sie die Basilika Nuestra Señora del Pilar und genießen Sie den Blick über den Ebro, bevor es weiter nach Madrid zum Abendessen und zur Übernachtung geht.",
      ar: "الانطلاق صباحًا من برشلونة نحو سرقسطة، وزيارة بازيليك سيدة العمود والاستمتاع بإطلالات نهر إيبرو، ثم متابعة الطريق إلى مدريد لتناول العشاء والمبيت.",
    },
    image: "https://iberica-travel.com/files/travel%20packages%202018/3.%20Andalusia%20and%20Levante/LasRamblasBarcelonaTitle.jpg",
  },
  {
    day: 2,
    title: { en: "Madrid → Córdoba → Seville", de: "Madrid → Córdoba → Sevilla", ar: "مدريد ← قرطبة ← إشبيلية" },
    description: {
      en: "Cross the plains of Castilla–La Mancha and reach Córdoba for a guided visit through the historic center, Jewish Quarter and the extraordinary Mosque–Cathedral. Continue to Seville in the afternoon.",
      de: "Durchqueren Sie die Ebenen von Castilla-La Mancha und erreichen Sie Córdoba zu einer Führung durch Altstadt, jüdisches Viertel und die außergewöhnliche Mezquita-Kathedrale. Am Nachmittag Weiterfahrt nach Sevilla.",
      ar: "عبور سهول قشتالة لا مانتشا والوصول إلى قرطبة لجولة في المركز التاريخي والحي اليهودي والجامع-الكاتدرائية الاستثنائي، ثم متابعة الرحلة إلى إشبيلية بعد الظهر.",
    },
    image: "https://iberica-travel.com/files/travel%20packages%202018/3.%20Andalusia%20and%20Levante/Cordoba%20courtyardin.jpg",
  },
  {
    day: 3,
    title: { en: "Seville", de: "Sevilla", ar: "إشبيلية" },
    description: {
      en: "Discover Plaza de España, María Luisa Park, Seville Cathedral and the historic Santa Cruz district. The afternoon is free for the Giralda, Metropol Parasol, Triana or an optional flamenco experience.",
      de: "Entdecken Sie Plaza de España, den María-Luisa-Park, die Kathedrale von Sevilla und das historische Viertel Santa Cruz. Der Nachmittag steht für Giralda, Metropol Parasol, Triana oder Flamenco zur freien Verfügung.",
      ar: "اكتشاف ساحة إسبانيا وحديقة ماريا لويزا وكاتدرائية إشبيلية وحي سانتا كروز التاريخي، مع وقت حر بعد الظهر لزيارة الخيرالدا أو تريانا أو حضور عرض فلامنكو اختياري.",
    },
    image: "https://iberica-travel.com/files/travel%20packages%202018/3.%20Andalusia%20and%20Levante/GoldTowerSeville.jpg",
  },
  {
    day: 4,
    title: { en: "Seville → Granada", de: "Sevilla → Granada", ar: "إشبيلية ← غرناطة" },
    description: {
      en: "Travel east to Granada and visit the Alhambra complex, including the Nasrid Palaces, Generalife Gardens and Alcazaba. The remainder of the day is free for the Albaicín, markets and tapas culture.",
      de: "Fahrt nach Granada und Besuch der Alhambra mit Nasridenpalästen, Generalife-Gärten und Alcazaba. Danach Freizeit für Albaicín, Märkte und Tapas-Kultur.",
      ar: "التوجه شرقًا إلى غرناطة وزيارة مجمع الحمراء بما فيه قصور بني نصر وحدائق جنة العريف والقصبة، ثم وقت حر لاكتشاف حي البيازين والأسواق وثقافة التاباس.",
    },
    image: "https://iberica-travel.com/files/travel%20packages%202018/3.%20Andalusia%20and%20Levante/AlbaicinGranadaTitle.jpg",
  },
  {
    day: 5,
    title: { en: "Granada → Valencia", de: "Granada → Valencia", ar: "غرناطة ← فالنسيا" },
    description: {
      en: "Journey through changing landscapes toward Valencia. Explore the City of Arts and Sciences, the old town, Silk Exchange and medieval gates, and enjoy the city known as the birthplace of paella.",
      de: "Fahrt durch abwechslungsreiche Landschaften nach Valencia. Entdecken Sie die Stadt der Künste und Wissenschaften, Altstadt, Seidenbörse und mittelalterliche Tore sowie die Heimat der Paella.",
      ar: "رحلة عبر مناظر متنوعة نحو فالنسيا، مع فرصة لاكتشاف مدينة الفنون والعلوم والبلدة القديمة وبورصة الحرير والبوابات التاريخية، والاستمتاع بمدينة تُعد مهد طبق الباييّا.",
    },
    image: "https://iberica-travel.com/files/travel%20packages%202018/3.%20Andalusia%20and%20Levante/CityofArtsandSciencesValenciaTitle.jpg",
  },
  {
    day: 6,
    title: { en: "Valencia → Barcelona", de: "Valencia → Barcelona", ar: "فالنسيا ← برشلونة" },
    description: {
      en: "Enjoy a relaxed final morning in Valencia for beaches, the Central Market, El Carmen or the cathedral. Return to Barcelona in the afternoon, bringing the journey to a close.",
      de: "Genießen Sie den letzten Vormittag in Valencia an den Stränden, auf dem Zentralmarkt, in El Carmen oder an der Kathedrale. Am Nachmittag Rückfahrt nach Barcelona.",
      ar: "صباح أخير هادئ في فالنسيا لزيارة الشواطئ أو السوق المركزي أو حي إل كارمن أو الكاتدرائية، ثم العودة إلى برشلونة بعد الظهر واختتام الرحلة.",
    },
    image: "https://iberica-travel.com/files/travel%20packages%202018/3.%20Andalusia%20and%20Levante/valenciacity.jpg",
  },
];

export const spainIncludedServices: LocalizedText[] = [
  { en: "Accommodation in selected four-star hotels", de: "Unterkunft in ausgewählten Vier-Sterne-Hotels", ar: "الإقامة في فنادق مختارة من فئة أربع نجوم" },
  { en: "Five breakfasts and three dinners", de: "Fünf Frühstücke und drei Abendessen", ar: "خمس وجبات إفطار وثلاث وجبات عشاء" },
  { en: "Modern air-conditioned coach", de: "Moderner klimatisierter Reisebus", ar: "حافلة حديثة ومكيّفة" },
  { en: "Multilingual tour escort", de: "Mehrsprachige Reisebegleitung", ar: "مرافق سياحي متعدد اللغات" },
  { en: "Local guided visits in Córdoba, Seville and Granada", de: "Lokale Führungen in Córdoba, Sevilla und Granada", ar: "جولات مع مرشدين محليين في قرطبة وإشبيلية وغرناطة" },
  { en: "Entrance to the Mosque–Cathedral of Córdoba", de: "Eintritt in die Mezquita-Kathedrale von Córdoba", ar: "تذكرة دخول الجامع-الكاتدرائية في قرطبة" },
  { en: "Entrance to the Alhambra in Granada", de: "Eintritt in die Alhambra in Granada", ar: "تذكرة دخول قصر الحمراء في غرناطة" },
  { en: "Travel insurance and Wi-Fi on board", de: "Reiseversicherung und WLAN an Bord", ar: "تأمين سفر وخدمة واي فاي على متن الحافلة" },
];
