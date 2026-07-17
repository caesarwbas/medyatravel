import type { LocalizedText } from "@/types";

export interface JourneyDay {
  day: number;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
}

export const journeySummary = {
  title: {
    en: "First Journey to Syria",
    de: "Erste Syrienreise",
    ar: "الرحلة الأولى إلى سوريا",
  },
  subtitle: {
    en: "Seven days of heritage, coastlines, mountains and Syrian hospitality.",
    de: "Sieben Tage voller Kulturerbe, Küsten, Berglandschaften und syrischer Gastfreundschaft.",
    ar: "سبعة أيام تجمع التاريخ والساحل والجبال وكرم الضيافة السورية.",
  },
  duration: { en: "7 Days / 6 Nights", de: "7 Tage / 6 Übernachtungen", ar: "7 أيام / 6 ليالٍ" },
  price: { en: "€999 per person", de: "999 € pro Person", ar: "999 يورو للشخص الواحد" },
  landPackage: {
    en: "The price includes all land-package services listed below.",
    de: "Der Preis umfasst alle unten aufgeführten Leistungen des Landpakets.",
    ar: "يشمل السعر جميع خدمات الباقة الأرضية المذكورة أدناه.",
  },
} satisfies Record<string, LocalizedText>;

export const journeyDays: JourneyDay[] = [
  {
    day: 1,
    title: { en: "Arrival in Aleppo", de: "Ankunft in Aleppo", ar: "الوصول إلى حلب" },
    description: {
      en: "Welcome at Aleppo International Airport and transfer to the Sheraton Aleppo Hotel. After check-in and a short rest, visit the Citadel of Aleppo, enjoy lunch or dinner at Peroya Restaurant, stroll through Khan Al-Shouneh Market and return to the hotel.",
      de: "Empfang am Flughafen Aleppo und Transfer zum Sheraton Aleppo Hotel. Nach Check-in und kurzer Erholung besuchen Sie die Zitadelle von Aleppo, genießen Mittag- oder Abendessen im Peroya Restaurant, spazieren durch den Khan-Al-Shouneh-Markt und kehren zum Hotel zurück.",
      ar: "استقبال في مطار حلب الدولي والتوجه إلى فندق شيراتون حلب. بعد تسجيل الدخول والاستراحة، تبدأ الجولة بزيارة قلعة حلب، ثم تناول الغداء أو العشاء في مطعم بيرويا، والتجول في سوق خان الشونة قبل العودة إلى الفندق.",
    },
    image: "/syria/aleppo-citadel-night.webp",
  },
  {
    day: 2,
    title: { en: "Aleppo to Tartus", de: "Von Aleppo nach Tartus", ar: "من حلب إلى طرطوس" },
    description: {
      en: "Breakfast and check-out, followed by the journey to Tartus. Check in at Shahin Resort, relax at the private beach or pool, enjoy lunch at Ark Restaurant and spend the rest of the day using the resort’s leisure facilities.",
      de: "Nach Frühstück und Check-out reisen Sie nach Tartus. Im Shahin Resort beziehen Sie Ihr Zimmer, entspannen am Privatstrand oder Pool, genießen das Mittagessen im Ark Restaurant und nutzen anschließend die Freizeiteinrichtungen der weitläufigen Anlage.",
      ar: "تناول الفطور وتسليم الغرف ثم الانطلاق إلى طرطوس. بعد الوصول إلى منتجع شاهين واستلام الغرف، يمكن الاستمتاع بالشاطئ الخاص أو المسبح، وتناول الغداء في مطعم أرك، ثم قضاء وقت حر في مرافق المنتجع.",
    },
    image: "/syria/tartus-coast.webp",
  },
  {
    day: 3,
    title: { en: "Mashta Al Helou", de: "Mashta Al Helou", ar: "مشتى الحلو" },
    description: {
      en: "Travel to the mountain town of Mashta Al Helou, enjoy its landscapes and religious landmarks, have lunch in the region, visit Dawayat Cave and stop in Al-Kafroun for coffee before returning to Shahin Resort.",
      de: "Fahrt in die Bergregion Mashta Al Helou mit ihren Landschaften und religiösen Sehenswürdigkeiten. Nach dem Mittagessen besuchen Sie die Dawayat-Höhle und legen in Al-Kafroun eine Kaffeepause ein, bevor Sie zum Shahin Resort zurückkehren.",
      ar: "التوجه إلى مشتى الحلو والاستمتاع بطبيعتها الخلابة ومواقعها الدينية، ثم تناول الغداء في المنطقة وزيارة مغارة الضوايات، مع استراحة قهوة في الكفرون قبل العودة إلى منتجع شاهين.",
    },
    image: "/syria/sheikh-badr-stream.webp",
  },
  {
    day: 4,
    title: { en: "Damascus & Bloudan", de: "Damaskus & Bloudan", ar: "دمشق وبلودان" },
    description: {
      en: "Travel to Damascus and check in at Caesar Hotel. Continue to Bloudan, visit Moses Cave and the markets of Madaya, and enjoy lunch at Swiss House Restaurant. In the afternoon, explore Bab Sharqi, Bab Touma, the Umayyad Mosque and Al-Salihiyah, followed by dinner in Bab Touma.",
      de: "Fahrt nach Damaskus und Check-in im Caesar Hotel. Anschließend besuchen Sie Bloudan, die Moses-Höhle und die Märkte von Madaya und genießen das Mittagessen im Swiss House Restaurant. Am Nachmittag entdecken Sie Bab Sharqi, Bab Touma, die Umayyaden-Moschee und Al-Salihiyah, bevor der Tag mit einem Abendessen in Bab Touma endet.",
      ar: "التوجه إلى دمشق وتسجيل الدخول في فندق القيصر، ثم زيارة بلودان ومغارة موسى وأسواق مضايا وتناول الغداء في مطعم البيت السويسري. بعد ذلك جولة في باب شرقي وباب توما والجامع الأموي والصالحية، ثم عشاء في باب توما.",
    },
    image: "/syria/umayyad-mosque-night.webp",
  },
  {
    day: 5,
    title: { en: "Maaloula, Saidnaya & Return to Tartus", de: "Maaloula, Saidnaya & Rückkehr nach Tartus", ar: "معلولا وصيدنايا والعودة إلى طرطوس" },
    description: {
      en: "After breakfast and check-out, depart towards Tartus and visit Maaloula and Saidnaya on the way. Continue to Shahin Resort, then to Matn Al Sahel for a fresh seafood lunch at Al Arrab Restaurant, followed by leisure time on the Mediterranean coast.",
      de: "Nach Frühstück und Check-out fahren Sie in Richtung Tartus und besuchen unterwegs Maaloula und Saidnaya. Nach der Ankunft im Shahin Resort geht es nach Matn Al Sahel zu einem frischen Fischmittagessen im Al Arrab Restaurant. Der Abend steht zur freien Verfügung am Mittelmeer.",
      ar: "بعد الفطور وتسليم الغرف، الانطلاق باتجاه طرطوس مع زيارة معلولا وصيدنايا في الطريق. بعد الوصول إلى منتجع شاهين، التوجه إلى متن الساحل لتناول غداء من الأسماك الطازجة في مطعم العراب، ثم قضاء وقت حر على البحر.",
    },
    image: "/syria/maaloula-panorama.webp",
  },
  {
    day: 6,
    title: { en: "Along the Mediterranean Coast to Aleppo", de: "Entlang der Küste nach Aleppo", ar: "على طول الساحل باتجاه حلب" },
    description: {
      en: "Begin the scenic journey to Aleppo via Latakia and Mashqita. Enjoy a boat trip in Mashqita, visit Ras Shamra - ancient Ugarit and the birthplace of one of humanity’s earliest alphabets - have lunch, then continue to Aleppo and check in at the hotel.",
      de: "Die landschaftlich reizvolle Rückfahrt nach Aleppo führt über Latakia und Mashqita. In Mashqita unternehmen Sie eine Bootsfahrt und besuchen anschließend Ras Shamra - das antike Ugarit und Heimat eines der frühesten Alphabete der Menschheit. Nach dem Mittagessen geht es weiter zum Hotel in Aleppo.",
      ar: "الانطلاق في رحلة ساحلية باتجاه حلب مرورًا باللاذقية ومشقيتا. تتضمن الجولة رحلة بالقارب في مشقيتا وزيارة رأس شمرا - أوغاريت القديمة وموطن إحدى أقدم الأبجديات - ثم تناول الغداء ومتابعة الطريق إلى حلب واستلام الغرف.",
    },
    image: "/syria/wadi-qandil.webp",
  },
  {
    day: 7,
    title: { en: "Departure", de: "Abreise", ar: "يوم العودة" },
    description: {
      en: "Enjoy your final breakfast, check out and transfer to Aleppo International Airport for your departure flight. The journey ends with the memories of Syria’s history, landscapes and hospitality.",
      de: "Nach dem letzten Frühstück und dem Check-out erfolgt der Transfer zum Flughafen Aleppo für Ihren Rückflug. Die Reise endet mit Erinnerungen an Syriens Geschichte, Landschaften und Gastfreundschaft.",
      ar: "تناول الفطور الأخير، ثم تسليم الغرف والتوجه إلى مطار حلب الدولي للمغادرة، مع ذكريات تجمع تاريخ سوريا وطبيعتها وكرم ضيافتها.",
    },
    image: "/syria/i-love-syria.webp",
  },
];

export const includedServices: LocalizedText[] = [
  { en: "7 days / 6 nights accommodation", de: "7 Tage / 6 Übernachtungen", ar: "إقامة لمدة 7 أيام / 6 ليالٍ" },
  { en: "Selected hotels and resorts: Sheraton Aleppo, Shahin Resort Tartus and Caesar Hotel Damascus", de: "Ausgewählte Hotels und Resorts: Sheraton Aleppo, Shahin Resort Tartus und Caesar Hotel Damaskus", ar: "الإقامة في فنادق ومنتجعات مختارة: شيراتون حلب، منتجع شاهين طرطوس، وفندق القيصر دمشق" },
  { en: "Daily breakfast", de: "Tägliches Frühstück", ar: "وجبة إفطار يومية" },
  { en: "Lunches and dinners as specified in the itinerary", de: "Mittag- und Abendessen gemäß Reiseprogramm", ar: "وجبات الغداء والعشاء وفقًا لبرنامج الرحلة" },
  { en: "Comfortable air-conditioned transportation throughout the tour", de: "Komfortabler, klimatisierter Transport während der gesamten Rundreise", ar: "وسائل نقل مريحة ومكيّفة طوال مدة الرحلة" },
  { en: "Airport transfers", de: "Flughafentransfers", ar: "الاستقبال والتوديع والنقل من وإلى المطار" },
  { en: "Professional tour guide", de: "Professionelle Reiseleitung", ar: "مرشد سياحي محترف" },
  { en: "Entrance fees to all attractions included in the itinerary", de: "Eintrittsgelder zu allen im Reiseprogramm enthaltenen Sehenswürdigkeiten", ar: "رسوم الدخول إلى جميع المواقع والمعالم المذكورة في البرنامج" },
  { en: "Boat trip in Mashqita", de: "Bootsfahrt in Mashqita", ar: "رحلة بالقارب في مشقيتا" },
  { en: "Leisure time at Shahin Resort with beach and pool access", de: "Freizeit im Shahin Resort mit Zugang zum Strand und Swimmingpool", ar: "وقت حر في منتجع شاهين مع إمكانية استخدام الشاطئ والمسبح" },
];

export const excludedServices: LocalizedText[] = [
  { en: "International airfare", de: "Internationale Flugtickets", ar: "تذاكر الطيران الدولية" },
  { en: "Visa fees", de: "Visumgebühren", ar: "رسوم التأشيرة" },
  { en: "Travel insurance", de: "Reiseversicherung", ar: "التأمين على السفر" },
  { en: "Personal expenses", de: "Persönliche Ausgaben", ar: "المصاريف الشخصية" },
  { en: "Tips and gratuities", de: "Trinkgelder", ar: "الإكراميات" },
];
